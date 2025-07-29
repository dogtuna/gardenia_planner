const FARMSENSE_BASE = 'https://api.farmsense.net/v1/frostdates';
const CORS_PROXY = 'https://api.codetabs.com/v1/proxy?quest=';

export async function lookupFrostDate(lat, lon, season = 1) {
  // 1) Find the nearest station (if _this_ fails, we _can’t_ proceed at all)
  const stationsUrl = `${FARMSENSE_BASE}/stations/?lat=${lat}&lon=${lon}`;
  let stations;
  try {
    const res = await fetch(CORS_PROXY + encodeURIComponent(stationsUrl));
    if (!res.ok) throw new Error(`Station lookup failed: ${res.status}`);
    stations = await res.json();
  } catch (err) {
    console.error('lookupFrostDate › station error:', err);
    // No station → we can’t do anything
    return null;
  }

  if (!Array.isArray(stations) || stations.length === 0) {
    console.warn('lookupFrostDate › no stations returned');
    return null;
  }
  const stationId = stations[0].id;

  // 2) Get the frost probabilities (if _this_ fails, we'll just return null)
  const probsUrl = `${FARMSENSE_BASE}/probabilities/?station=${stationId}&season=${season}`;
  let frost;
  try {
    const res = await fetch(CORS_PROXY + encodeURIComponent(probsUrl));
    if (!res.ok) throw new Error(`Probabilities lookup failed: ${res.status}`);
    frost = await res.json();
  } catch (err) {
    console.error('lookupFrostDate › probabilities error:', err);
    return null;
  }

  if (!Array.isArray(frost) || frost.length === 0) {
    console.warn('lookupFrostDate › empty frost array');
    return null;
  }

  const info = frost[0];
  // prefer the 50% median date, then 70, then 90, then any `date` field
  const raw = info.prob_50 || info.prob_70 || info.prob_90 || info.date;
  if (!raw || raw === '0000') return null;

  const month = parseInt(raw.slice(0, 2), 10);
  const day   = parseInt(raw.slice(2),    10);
  if (!(month >= 1 && month <= 12) || day < 1) return null;

  const months = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'
  ];
  return `${months[month - 1]} ${day}`;
}

export async function lookupZip(zip, zipCache = {}) {
    try {
        const zoneRes = await fetch(`https://phzmapi.org/${zip}.json`);
        if (!zoneRes.ok) throw new Error('Zone lookup failed');
        const zoneJson = await zoneRes.json();

        const locRes = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (!locRes.ok) throw new Error('City lookup failed');
        const locJson = await locRes.json();

        const place = locJson.places && locJson.places[0];
        if (!place) throw new Error('No city found');

        const firstFrost = await lookupFrostDate(place.latitude, place.longitude, 1);
        const lastFrost = await lookupFrostDate(place.latitude, place.longitude, 2);

        const data = {
            city: place['place name'],
            state: place['state abbreviation'],
            zone: zoneJson.zone,
            firstFrost,
            lastFrost,
            lat: place.latitude,
            lon: place.longitude
        };
        zipCache[zip] = data;
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function fetchTasks(zone, days = 30) {
    try {
        const start = new Date();
        const end = new Date();
        end.setDate(start.getDate() + days);
        const startStr = start.toISOString().split('T')[0];
        const endStr = end.toISOString().split('T')[0];
        const url = `https://perenual.com/api/gardening-task-planner?hardiness_zone=${zone}&start_date=${startStr}&end_date=${endStr}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Task lookup failed');
        const text = await res.text();
        try {
            const json = JSON.parse(text);
            return json.tasks || [];
        } catch (err) {
            console.error('Invalid JSON from tasks API:', text.slice(0, 80));
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function fetchOpenFarmWindow(plantName) {
    try {
        const searchRes = await fetch(`https://api.openfarm.cc/api/v1/crops/?filter=${encodeURIComponent(plantName)}`);
        if (!searchRes.ok) throw new Error('OpenFarm crop search failed');
        const searchJson = await searchRes.json();
        const first = searchJson.data && searchJson.data[0];
        if (!first) return null;
        const slug = (first.attributes && first.attributes.slug) || first.id;
        const cropRes = await fetch(`https://api.openfarm.cc/api/v1/crops/${slug}`);
        if (!cropRes.ok) throw new Error('OpenFarm crop fetch failed');
        const cropJson = await cropRes.json();
        const attr = cropJson.data && cropJson.data.attributes;
        const start = attr && (attr.sowing_start_month || attr.sowing_start);
        const end = attr && (attr.sowing_end_month || attr.sowing_end);
        if (start && end) {
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const s = typeof start === 'number' ? months[start - 1] : start;
            const e = typeof end === 'number' ? months[end - 1] : end;
            return `${s}-${e}`;
        }
        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}
