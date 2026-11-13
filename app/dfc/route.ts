import { NextResponse } from "next/server"

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dubai Fitness Challenge Cycle Planner | Solu</title>
<meta name="description" content="A free Dubai Fitness Challenge plan with 30-minute sessions matched to your cycle phase, plus answers to common questions from women taking part.">
<link rel="canonical" href="https://www.solu.ae/dfc">
<meta property="og:type" content="website">
<meta property="og:title" content="Dubai Fitness Challenge Cycle Planner | Solu">
<meta property="og:description" content="A free Dubai Fitness Challenge plan with 30-minute sessions matched to your cycle phase, plus answers to common questions from women taking part.">
<meta property="og:url" content="https://www.solu.ae/dfc">
<meta property="og:site_name" content="Solu">
<meta property="og:image" content="https://www.solu.ae/opengraph-image">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dubai Fitness Challenge Cycle Planner | Solu">
<meta name="twitter:description" content="A free Dubai Fitness Challenge plan with 30-minute sessions matched to your cycle phase, plus answers to common questions from women taking part.">
<meta name="twitter:image" content="https://www.solu.ae/opengraph-image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[
{"@type":"BreadcrumbList","@id":"https://www.solu.ae/dfc#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.solu.ae"},{"@type":"ListItem","position":2,"name":"Dubai Fitness Challenge Cycle Planner","item":"https://www.solu.ae/dfc"}]},
{"@type":"FAQPage","@id":"https://www.solu.ae/dfc#webpage","url":"https://www.solu.ae/dfc","name":"Dubai Fitness Challenge Cycle Planner | Solu","description":"A free Dubai Fitness Challenge plan with 30-minute sessions matched to your cycle phase, plus answers to common questions from women taking part.","inLanguage":"en","isPartOf":{"@id":"https://www.solu.ae/#website"},"publisher":{"@id":"https://www.solu.ae/#organization"},"about":{"@type":"Thing","name":"Dubai Fitness Challenge"},"breadcrumb":{"@id":"https://www.solu.ae/dfc#breadcrumb"},"mainEntity":[
{"@type":"Question","name":"Can you do the Dubai Fitness Challenge on your period?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you feel up to it. The challenge asks for 30 minutes of activity a day, and a gentle walk, stretch or easy yoga session counts. If your pain is severe or unusual, rest and speak to a doctor."}},
{"@type":"Question","name":"How do you fit 30 minutes of exercise into a busy day?","acceptedAnswer":{"@type":"Answer","text":"Pick a fixed time and treat it like a meeting. If a full block will not fit, try a brisk walk at lunch, a short home workout, or movement you already enjoy with friends or family."}},
{"@type":"Question","name":"How should women train for a 5K or 10K?","acceptedAnswer":{"@type":"Answer","text":"Build distance gradually, mix easy runs with one faster session a week, add strength work, and include rest days. Many women choose harder sessions on days when their energy is higher and easier ones when it is lower."}},
{"@type":"Question","name":"Is it safe to exercise in the heat in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Train in the early morning or evening, drink water before you start, and slow down or stop if you feel dizzy or unwell. Choose shade or an indoor option on hotter days."}},
{"@type":"Question","name":"What should you eat before a morning workout?","acceptedAnswer":{"@type":"Answer","text":"Something small and easy to digest often works well, such as a banana or dates. Try different options and see what feels best for your body."}},
{"@type":"Question","name":"How much water should women drink when exercising?","acceptedAnswer":{"@type":"Answer","text":"It depends on your body, the session and the weather. Start hydrated, sip regularly during exercise and drink afterwards, with more in warm conditions."}},
{"@type":"Question","name":"Is it okay to exercise every day as a woman?","acceptedAnswer":{"@type":"Answer","text":"Daily movement is fine for many women when intensity varies. Keep some days light, and take more rest if you feel run down or keep getting injured."}},
{"@type":"Question","name":"Can exercising too much stop your period?","acceptedAnswer":{"@type":"Answer","text":"It can, especially when hard training is combined with too little food or recovery. If your periods stop or change suddenly, speak to a doctor."}}
]}
]}
</script>
<style>
:root{--cream:#FFFAF1;--butter:#FBECB5;--orange:#F7941D;--deep:#C06A05;--green:#1F6F5C;--gold:#F7A10D;--ink:#1A1A1A;--muted:#6B5A4C;--line:#EAD9BE}
*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font:400 17px/1.55 "Space Grotesk",system-ui,sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:0 20px}
h1,h2,h3{font-family:Fredoka,system-ui,sans-serif;line-height:1.12;margin:0}
.hero{padding:56px 0 28px}
.eyebrow{font-weight:700;letter-spacing:.14em;font-size:13px;color:var(--deep);margin:0 0 12px}
h1{font-size:clamp(38px,8vw,62px);font-weight:700}
h1 span{color:var(--orange)}
.lead{font-size:20px;color:var(--muted);margin:16px 0 0}
.card{background:#fff;border:2px solid var(--line);border-radius:24px;padding:26px}
form{display:grid;grid-template-columns:1fr 1fr auto;gap:16px;align-items:end}
label{display:block;font-weight:700;font-size:15px;margin-bottom:6px}
input{width:100%;font:inherit;padding:12px 14px;border:2px solid var(--line);border-radius:14px;background:var(--cream);color:var(--ink)}
button,.btn{font:600 18px Fredoka,system-ui,sans-serif;background:var(--orange);color:#fff;border:0;border-radius:999px;padding:13px 26px;cursor:pointer;text-decoration:none;display:inline-block}
button:hover,.btn:hover{background:var(--deep)}
.note{font-size:14px;color:var(--muted);margin:14px 0 0}
.err{color:#B23A1E;font-weight:700;margin:14px 0 0}
#result{margin-top:26px}
.day{display:grid;grid-template-columns:96px 1fr;gap:14px;padding:14px 0;border-top:1px solid var(--line)}
.day:first-child{border-top:0}
.date{font-weight:700}
.date small{display:block;font-weight:400;color:var(--muted)}
.tag{display:inline-block;font-size:13px;font-weight:700;border-radius:999px;padding:2px 10px;margin-bottom:4px}
.period{background:#F9DAD2}.rising{background:#DCEFE3}.peak{background:var(--butter)}.winding{background:#F6E2C6}
.event{display:block;font-weight:700;color:var(--green)}
.cta{background:var(--green);color:var(--cream);border-radius:24px;padding:26px;margin-top:24px}
.cta h3{font-size:26px;margin-bottom:8px}.cta p{margin:0 0 16px}
section{margin-top:56px}
h2{font-size:36px;margin-bottom:18px}
.events{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;list-style:none;padding:0;margin:0}
.events li{background:var(--butter);border-radius:18px;padding:16px 18px}
.events b{display:block;font-family:Fredoka;font-size:20px}
details{background:#fff;border:2px solid var(--line);border-radius:18px;padding:16px 20px;margin-bottom:12px}
summary{font-weight:700;cursor:pointer}
details p{margin:10px 0 0}
a{color:var(--deep)}
footer{margin:56px 0 40px;font-size:14px;color:var(--muted)}
@media(max-width:640px){form{grid-template-columns:1fr}.day{grid-template-columns:76px 1fr}}
@media print{.cta,form,.hero .lead{display:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="hero">
    <p class="eyebrow">SOLU · TRAIN WITH YOUR CYCLE</p>
    <h1>Your Dubai Fitness Challenge, <span>matched to your cycle</span></h1>
    <p class="lead">Enter your last period date and get a free day-by-day plan of 30-minute sessions through to November 29.</p>
  </header>

  <div class="card">
    <form id="f">
      <div><label for="last">First day of your last period</label><input id="last" type="date" required></div>
      <div><label for="len">Usual cycle length (days)</label><input id="len" type="number" min="21" max="40" value="28" required></div>
      <button type="submit">Build my plan</button>
    </form>
    <p class="note">Your dates stay on this device. They are not sent or saved anywhere.</p>
    <p class="err" id="err" hidden></p>
    <div id="result"></div>
    <div class="cta" id="cta" hidden>
      <h3>Want this in your pocket?</h3>
      <p>The Solu app is coming soon. Join the waitlist and we will tell you the moment it is ready.</p>
      <a class="btn" id="wait" href="#" target="_blank" rel="noopener">Join the waitlist</a>
    </div>
  </div>

  <section>
    <h2>Key dates</h2>
    <ul class="events">
      <li><b>Oct 31 to Nov 29</b>30 minutes of activity a day for 30 days</li>
      <li><b>Nov 22: Dubai Run</b>Sheikh Zayed Road and Downtown</li>
      <li><b>Nov 29: Dubai Yoga</b>The closing event</li>
      <li><b>Free Fitness Villages</b>Including Kite Beach and Zabeel Park</li>
    </ul>
    <p class="note">Check times and registration at dubaifitnesschallenge.com.</p>
  </section>

  <section>
    <h2>Your questions, answered</h2>
    <details open><summary>Can you do the Dubai Fitness Challenge on your period?</summary><p>Yes, if you feel up to it. The challenge asks for 30 minutes of activity a day, and a gentle walk, stretch or easy yoga session counts. If your pain is severe or unusual, rest and speak to a doctor. <a href="https://www.solu.ae/blog/can-you-do-the-dubai-fitness-challenge-on-your-period">Read more</a></p></details>
    <details><summary>How do you fit 30 minutes of exercise into a busy day?</summary><p>Pick a fixed time and treat it like a meeting. If a full block will not fit, try a brisk walk at lunch, a short home workout, or movement you already enjoy with friends or family. <a href="https://www.solu.ae/blog/how-to-fit-30-minutes-of-exercise-into-a-busy-day">Read more</a></p></details>
    <details><summary>How should women train for a 5K or 10K?</summary><p>Build distance gradually, mix easy runs with one faster session a week, add strength work, and include rest days. Many women choose harder sessions on days when their energy is higher and easier ones when it is lower. <a href="https://www.solu.ae/blog/how-should-women-train-for-a-5k-or-10k">Read more</a></p></details>
    <details><summary>Is it safe to exercise in the heat in Dubai?</summary><p>Train in the early morning or evening, drink water before you start, and slow down or stop if you feel dizzy or unwell. Choose shade or an indoor option on hotter days. <a href="https://www.solu.ae/blog/is-it-safe-to-exercise-in-the-heat-in-dubai">Read more</a></p></details>
    <details><summary>What should you eat before a morning workout?</summary><p>Something small and easy to digest often works well, such as a banana or dates. Try different options and see what feels best for your body. <a href="https://www.solu.ae/blog/what-to-eat-before-a-morning-workout">Read more</a></p></details>
    <details><summary>How much water should women drink when exercising?</summary><p>It depends on your body, the session and the weather. Start hydrated, sip regularly during exercise and drink afterwards, with more in warm conditions. <a href="https://www.solu.ae/blog/how-much-water-should-women-drink-when-exercising">Read more</a></p></details>
    <details><summary>Is it okay to exercise every day as a woman?</summary><p>Daily movement is fine for many women when intensity varies. Keep some days light, and take more rest if you feel run down or keep getting injured. <a href="https://www.solu.ae/blog/is-it-okay-to-exercise-every-day-as-a-woman">Read more</a></p></details>
    <details><summary>Can exercising too much stop your period?</summary><p>It can, especially when hard training is combined with too little food or recovery. If your periods stop or change suddenly, speak to a doctor. <a href="https://www.solu.ae/blog/can-exercising-too-much-stop-your-period">Read more</a></p></details>
  </section>

  <footer>
    <p>Phases are estimates based on the dates you enter, and every cycle is different, so go by how you feel. This plan is general wellness information, not medical advice. It is not suitable for predicting fertility or preventing pregnancy.</p>
    <p>Solu is independent and is not affiliated with or endorsed by Dubai Fitness Challenge or its organisers.</p>
    <p><a href="/">Solu home</a> · <a href="/blog">Health blog</a> · <a href="/blog/can-you-do-the-dubai-fitness-challenge-on-your-period">Exercising on your period during DFC</a></p>
  </footer>
</div>

<script>
const WAITLIST_URL = 'https://tally.so/r/vGdWa0?source=dfc_planner';
const DAY = 86400000, END = Date.UTC(2026, 10, 29), START = Date.UTC(2026, 9, 31);
const PHASES = {
  period:  {label: '🩸 Period', ideas: ['Easy walk', 'Gentle yoga', 'Light stretching', 'Slow beach walk']},
  rising:  {label: '🌱 Energy rising', ideas: ['Strength: squats, lunges, push-ups', 'Bike ride', 'Dance class', 'Strength: upper body']},
  peak:    {label: '☀️ Peak', ideas: ['Run or HIIT', 'Intervals', 'Padel or a team sport']},
  winding: {label: '🍂 Winding down', ideas: ['Steady swim', 'Pilates', 'Steady bike ride', 'Long walk']}
};
const EVENTS = {
  [Date.UTC(2026, 10, 22)]: 'Dubai Run day. If you are taking part, this is your 30.',
  [Date.UTC(2026, 10, 29)]: 'Dubai Yoga, the closing event. Final day!'
};
const fmt = new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', timeZone: 'UTC'});
const wk = new Intl.DateTimeFormat('en-GB', {weekday: 'short', timeZone: 'UTC'});

function utc(d) { return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()); }

function phaseFor(cycleDay, len) {
  const ov = len - 14;
  if (cycleDay <= 5) return 'period';
  if (cycleDay < ov - 1) return 'rising';
  if (cycleDay <= ov + 1) return 'peak';
  return 'winding';
}

function build(lastISO, len) {
  const [y, m, d] = lastISO.split('-').map(Number);
  const last = Date.UTC(y, m - 1, d), today = utc(new Date());
  if (last > today) return {error: 'That date is in the future. Please enter your most recent period.'};
  if (!(len >= 21 && len <= 40)) return {error: 'Please enter a cycle length between 21 and 40 days.'};
  const from = Math.max(today, START);
  if (from > END) return {error: 'The 2026 challenge has finished. Thank you for moving with us!'};
  const days = [], counts = {period: 0, rising: 0, peak: 0, winding: 0};
  for (let t = from; t <= END; t += DAY) {
    const cycleDay = ((Math.round((t - last) / DAY) % len) + len) % len + 1;
    const phase = phaseFor(cycleDay, len);
    const ideas = PHASES[phase].ideas;
    days.push({t, phase, idea: ideas[counts[phase]++ % ideas.length]});
  }
  return {days};
}

function esc(s) { const e = document.createElement('i'); e.textContent = s; return e.innerHTML; }

document.getElementById('wait').href = WAITLIST_URL;
document.getElementById('f').addEventListener('submit', ev => {
  ev.preventDefault();
  const err = document.getElementById('err'), out = document.getElementById('result'), cta = document.getElementById('cta');
  const r = build(document.getElementById('last').value, Number(document.getElementById('len').value));
  err.hidden = !r.error; err.textContent = r.error || '';
  cta.hidden = !!r.error;
  out.innerHTML = r.error ? '' : r.days.map(x => \`<div class="day"><div class="date">\${fmt.format(x.t)}<small>\${wk.format(x.t)}</small></div><div><span class="tag \${x.phase}">\${PHASES[x.phase].label}</span>\${EVENTS[x.t] ? \`<span class="event">\${esc(EVENTS[x.t])}</span>\` : ''}<div>30 minutes: \${esc(x.idea)}</div></div></div>\`).join('');
});
</script>
</body>
</html>`

export async function GET() {
  return new NextResponse(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
