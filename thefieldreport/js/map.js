// ── WORLD MAP ENGINE ──
// Draws an SVG world map and places interactive pins from BRIEFS data.

function drawWorldMap(svgId, tooltipId, onPinClick) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const tooltip = document.getElementById(tooltipId);

  // Clear existing
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  const W = 1000, H = 500;

  // ── OCEAN BACKGROUND ──
  const ocean = makeSvg('rect', { width: W, height: H, fill: '#0d1b2a' });
  svg.appendChild(ocean);

  // ── GRID LINES ──
  for (let i = 1; i < 10; i++) {
    svg.appendChild(makeSvg('line', { x1: i*100, y1: 0, x2: i*100, y2: H, stroke: 'rgba(255,255,255,0.03)', 'stroke-width': 1 }));
  }
  for (let i = 1; i < 5; i++) {
    svg.appendChild(makeSvg('line', { x1: 0, y1: i*100, x2: W, y2: i*100, stroke: 'rgba(255,255,255,0.03)', 'stroke-width': 1 }));
  }

  // ── EQUATOR ──
  svg.appendChild(makeSvg('line', {
    x1: 0, y1: 250, x2: W, y2: 250,
    stroke: 'rgba(127,179,211,0.1)', 'stroke-width': 1, 'stroke-dasharray': '4 8'
  }));

  // ── LANDMASSES ──
  const lands = getLandPaths();
  lands.forEach(d => {
    svg.appendChild(makeSvg('path', { d, fill: '#1e3a4f', stroke: '#2c5570', 'stroke-width': 0.7 }));
  });

  // ── GROUP BRIEFS BY COUNTRY ──
  const byCountry = {};
  BRIEFS.forEach(b => {
    if (!byCountry[b.country]) byCountry[b.country] = { briefs: [], lat: b.lat, lng: b.lng };
    byCountry[b.country].briefs.push(b);
  });

  // ── PLACE PINS ──
  Object.entries(byCountry).forEach(([country, data]) => {
    const { x, y } = latLngToXY(data.lat, data.lng, W, H);
    const count = data.briefs.length;
    const multi = count > 1;
    const color = multi ? '#c0392b' : '#7fb3d3';
    const glowColor = multi ? 'rgba(192,57,43,0.2)' : 'rgba(127,179,211,0.2)';

    const g = makeSvg('g', { style: 'cursor:pointer' });

    // Outer pulse ring
    const ring = makeSvg('circle', {
      cx: x, cy: y, r: 14,
      fill: glowColor, stroke: color, 'stroke-width': 1, opacity: 0.7
    });
    ring.style.animation = `pulsePing ${1.8 + Math.random() * 0.8}s ease-in-out infinite`;
    ring.style.transformOrigin = `${x}px ${y}px`;
    g.appendChild(ring);

    // Core dot
    g.appendChild(makeSvg('circle', { cx: x, cy: y, r: 6, fill: color }));

    // Count badge for multi
    if (multi) {
      const badge = makeSvg('circle', { cx: x + 8, cy: y - 8, r: 7, fill: '#c0392b', stroke: '#0d1b2a', 'stroke-width': 1.5 });
      g.appendChild(badge);
      const num = makeSvg('text', {
        x: x + 8, y: y - 8,
        'text-anchor': 'middle', 'dominant-baseline': 'central',
        fill: '#fff', 'font-size': 8, 'font-weight': 'bold',
        'font-family': 'DM Sans, sans-serif'
      });
      num.textContent = count;
      g.appendChild(num);
    }

    // Events
    g.addEventListener('mouseenter', (e) => {
      const mapWrap = svg.closest('.map-wrap');
      const wrapRect = mapWrap.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();
      const scaleX = svgRect.width / W;
      const scaleY = svgRect.height / H;
      const px = (x * scaleX) + (svgRect.left - wrapRect.left) + 16;
      const py = (y * scaleY) + (svgRect.top - wrapRect.top) - 10;

      const titles = data.briefs.map(b => `<div style="font-size:11px;color:#9ca8b4;margin-top:3px;">· ${b.title.substring(0,48)}…</div>`).join('');
      tooltip.innerHTML = `
        <strong>${country}</strong>
        <div class="tip-count">${count} brief${count > 1 ? 's' : ''} published</div>
        ${titles}
        <div class="tip-cta" style="margin-top:6px;">Click to read →</div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = Math.min(px, wrapRect.width - 220) + 'px';
      tooltip.style.top = Math.max(py - 80, 8) + 'px';
    });

    g.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });

    g.addEventListener('click', () => {
      tooltip.style.display = 'none';
      if (onPinClick) onPinClick(country, data.briefs);
    });

    svg.appendChild(g);
  });
}

// ── MERCATOR PROJECTION ──
function latLngToXY(lat, lng, W, H) {
  const x = ((lng + 180) / 360) * W;
  const latRad = lat * Math.PI / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = (H / 2) - (W * mercN / (2 * Math.PI));
  return { x: Math.round(x), y: Math.round(y) };
}

function makeSvg(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

// ── SIMPLIFIED WORLD LANDMASSES ──
function getLandPaths() {
  return [
    // North America main
    "M 75,70 L 120,60 L 165,55 L 200,62 L 220,80 L 235,110 L 240,145 L 225,170 L 200,185 L 175,200 L 155,210 L 135,200 L 115,185 L 90,165 L 70,140 L 58,110 L 62,85 Z",
    // Central America
    "M 175,200 L 195,205 L 205,215 L 195,228 L 180,225 L 170,212 Z",
    // Greenland
    "M 158,28 L 210,22 L 238,36 L 232,62 L 198,72 L 168,62 L 152,44 Z",
    // South America
    "M 210,225 L 248,215 L 278,225 L 292,258 L 296,300 L 284,340 L 264,362 L 242,368 L 222,345 L 205,305 L 200,265 L 206,238 Z",
    // Iceland
    "M 410,52 L 428,48 L 438,58 L 428,66 L 412,62 Z",
    // UK & Ireland
    "M 432,82 L 442,76 L 452,84 L 448,96 L 436,98 L 430,90 Z",
    "M 422,88 L 430,84 L 434,92 L 426,96 Z",
    // Scandinavia
    "M 472,42 L 500,36 L 516,50 L 512,76 L 496,88 L 474,80 L 464,62 Z",
    // Europe main
    "M 440,80 L 475,76 L 510,80 L 528,96 L 524,116 L 504,126 L 480,128 L 455,118 L 438,102 Z",
    // Iberian Peninsula
    "M 432,110 L 456,106 L 464,122 L 456,136 L 436,138 L 424,124 Z",
    // Italy
    "M 488,112 L 500,108 L 510,122 L 506,140 L 496,148 L 488,136 L 484,120 Z",
    // Africa
    "M 442,148 L 496,138 L 538,152 L 556,186 L 560,234 L 548,286 L 526,330 L 498,348 L 468,338 L 446,306 L 432,264 L 430,216 L 438,178 Z",
    // Madagascar
    "M 566,268 L 576,260 L 584,278 L 580,302 L 568,306 L 560,286 Z",
    // Russia / Northern Asia
    "M 524,40 L 600,28 L 700,30 L 790,42 L 848,60 L 856,90 L 830,108 L 780,118 L 720,122 L 660,118 L 600,108 L 556,90 L 528,68 Z",
    // Middle East
    "M 530,148 L 570,138 L 600,148 L 612,172 L 598,190 L 570,196 L 540,182 L 526,164 Z",
    // Indian subcontinent
    "M 622,148 L 668,140 L 702,152 L 716,180 L 710,214 L 692,232 L 668,228 L 644,210 L 626,182 Z",
    // SE Asia mainland
    "M 706,148 L 740,142 L 762,158 L 758,182 L 738,192 L 710,186 Z",
    // China / East Asia main
    "M 700,80 L 760,72 L 812,82 L 830,106 L 814,132 L 770,148 L 722,146 L 694,130 L 688,104 Z",
    // Japan
    "M 836,96 L 850,88 L 860,102 L 854,118 L 840,122 L 832,108 Z",
    "M 846,124 L 854,118 L 860,130 L 854,140 L 844,136 Z",
    // Korea
    "M 800,104 L 814,100 L 820,112 L 814,124 L 800,120 Z",
    // Indonesia / Philippines (simplified)
    "M 752,196 L 790,190 L 810,202 L 804,216 L 776,218 L 754,208 Z",
    "M 806,198 L 832,194 L 848,208 L 840,222 L 814,220 Z",
    "M 742,212 L 762,208 L 772,220 L 764,232 L 744,228 Z",
    // Australia
    "M 762,290 L 836,276 L 892,290 L 904,330 L 894,368 L 856,386 L 808,382 L 770,358 L 750,322 Z",
    // New Zealand
    "M 910,360 L 922,350 L 932,364 L 924,380 L 910,376 Z",
    "M 916,384 L 926,378 L 934,390 L 928,402 L 916,396 Z",
    // Sri Lanka
    "M 672,234 L 680,228 L 686,238 L 680,248 L 670,242 Z",
    // Taiwan
    "M 798,158 L 806,154 L 810,164 L 804,172 L 796,166 Z",
    // Caribbean (simplified)
    "M 218,182 L 228,178 L 236,186 L 228,192 L 218,188 Z",
  ];
}
