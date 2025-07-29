/**
 * Convert a Farmsense frost array into week-bins with frost probabilities [0..1].
 */
export function fractionByWeek(frostArr, tempThreshold = 32) {
  // 1) pick the record closest to your threshold
  let rec = frostArr.find(r => +r.temperature_threshold === tempThreshold)
         || frostArr[0];

  // 2) extract only the non-"0000" prob_xx fields
  const pairs = Object.entries(rec)
    .filter(([k,v]) => /^prob_(\d+)$/.test(k) && v !== "0000")
    .map(([k,v]) => ({
      pct: +k.slice(5),
      dateStr: v        // "MMDD"
    }))
    .sort((a,b) => a.pct - b.pct);

  // 3) turn into actual Date objects (this year)
  const year = new Date().getFullYear();
  const pts = pairs.map(({pct, dateStr}) => {
    const m = +dateStr.slice(0,2) - 1, d = +dateStr.slice(2);
    return { pct, date: new Date(year, m, d) };
  }).sort((a, b) => a.date - b.date);

  // 4) build week-start dates from first→last
  const start = pts[0].date, end = pts[pts.length-1].date;
  const weeks = [];
  for (let w = new Date(start); w <= end; w.setDate(w.getDate()+7)) {
    weeks.push(new Date(w));
  }

  // 5) for any given date, linearly interpolate its pct
  function interp(date) {
    if (date <= pts[0].date) return pts[0].pct/100;
    if (date >= pts[pts.length-1].date) return pts[pts.length-1].pct/100;
    for (let i=0; i<pts.length-1; i++) {
      const A = pts[i], B = pts[i+1];
      if (date >= A.date && date <= B.date) {
        const f = (date - A.date)/(B.date - A.date);
        return (A.pct + f*(B.pct - A.pct)) / 100;
      }
    }
    return 0;
  }

  return weeks.map(d => ({
    weekLabel: d.toLocaleDateString('en',{month:'short',day:'numeric'}),
    prob: interp(d)
  }));
}

/**
 * Render a horizontal gauge summarizing frost risk for each week.
 * Adjacent weeks with the same risk level are merged into one segment
 * and labeled with their date range.
 */
export function renderThermometerGauge(containerId, weekData) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  function colorInfo(prob) {
    if (prob <= 0.30) return { color: '#5BE12C', label: '≤30%' };
    if (prob <= 0.50) return { color: '#F5CD19', label: '30–50%' };
    return { color: '#EA4228', label: '>50%' };
  }

  // group consecutive weeks with the same color
  const ranges = [];
  let start = 0;
  for (let i = 1; i <= weekData.length; i++) {
    const prevInfo = colorInfo(weekData[start].prob);
    const currInfo = i < weekData.length ? colorInfo(weekData[i].prob) : null;
    if (!currInfo || currInfo.color !== prevInfo.color) {
      ranges.push({
        color: prevInfo.color,
        label: prevInfo.label,
        startLabel: weekData[start].weekLabel,
        endLabel: weekData[i - 1].weekLabel,
        startProb: weekData[start].prob,
        endProb: weekData[i - 1].prob,
        len: i - start,
      });
      start = i;
    }
  }

  ranges.forEach(r => {
    const seg = document.createElement('div');
    seg.className = 'segment';
    seg.style.background = r.color;
    seg.style.flex = r.len;
    seg.title = `${r.startLabel}–${r.endLabel}: ${r.label}`;
    const span = document.createElement('span');
    span.textContent = `${r.startLabel} - ${r.endLabel}`;
    seg.appendChild(span);
    container.appendChild(seg);
  });
}
