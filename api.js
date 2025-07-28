import { zoneFrostDates, zoneLastFrostDates } from './constants.js';

export async function lookupFrostDate(lat, lon, season = 1) {
    try {
        const stationRes = await fetch(`http://api.farmsense.net/v1/frostdates/stations/?lat=${lat}&lon=${lon}`);
        if (!stationRes.ok) throw new Error('Station lookup failed');
        const stations = await stationRes.json();
        if (!Array.isArray(stations) || stations.length === 0) throw new Error('No station');
        const station = stations[0].id;
        const frostRes = await fetch(`http://api.farmsense.net/v1/frostdates/probabilities/?station=${station}&season=${season}`);
        if (!frostRes.ok) throw new Error('Frost lookup failed');
        const frostJson = await frostRes.json();
        const info = frostJson[0];
        return info && (info.prob_50 || info.prob_70 || info.prob_90 || info.date);
    } catch (err) {
        console.error(err);
        return null;
    }
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

        let firstFrost = await lookupFrostDate(place.latitude, place.longitude, 1);
        let lastFrost = await lookupFrostDate(place.latitude, place.longitude, 2);
        if (!firstFrost && zoneFrostDates[zoneJson.zone]) {
            firstFrost = zoneFrostDates[zoneJson.zone];
        }
        if (!lastFrost && zoneLastFrostDates[zoneJson.zone]) {
            lastFrost = zoneLastFrostDates[zoneJson.zone];
        }

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
