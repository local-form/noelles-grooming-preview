/* Noelle's Grooming Salon preview · cut finder. Every dog is a real photo from @noelles_grooming_salon (see SHOT-LIST.md). */
(() => {
  const IG = 'https://www.instagram.com/noelles_grooming_salon/';
  const P = id => `assets/dogs/${id}.webp`;
  // every wall photo, listed literally so the QA asset check can see them
  const IMG = [
    'assets/dogs/DaoTsYusE_d.webp',
    'assets/dogs/C77nMMKs3Ss.webp',
    'assets/dogs/DRBDFwEAI95.webp',
    'assets/dogs/DQrvxmygEnQ.webp',
    'assets/dogs/DOKMii1gEon.webp',
    'assets/dogs/DGjWjOUyMi_.webp',
    'assets/dogs/DJmSrziOvWy.webp',
    'assets/dogs/DKxqkXmyhNQ.webp',
    'assets/dogs/DGEefxjyKPf.webp',
    'assets/dogs/De0FpPgM0H5.webp',
    'assets/dogs/DD3NWvpMIAk.webp',
    'assets/dogs/DfVuOeoMhUt.webp',
    'assets/dogs/DMtQ8H7yzUN.webp',
    'assets/dogs/DRdQeJVgBYu.webp',
    'assets/dogs/DKrVjO2M8fh.webp',
    'assets/dogs/DLrxwAnsYvl.webp',
    'assets/dogs/DJXvWFkMstf.webp',
    'assets/dogs/DRBAjK6gK94.webp',
    'assets/dogs/DX2ywEgMSPC.webp',
    'assets/dogs/DGwSgawskVP.webp',
    'assets/dogs/DQeczjNACCX.webp',
    'assets/dogs/DJ5A8XiSFvL.webp',
    'assets/dogs/DOi-0PKAPD6.webp',
    'assets/dogs/DQpzm43gG-i.webp',
    'assets/dogs/DJwgN8PupIw.webp',
    'assets/dogs/DT1PjTfABTO.webp',
    'assets/dogs/DKVVw4sS5GX.webp',
    'assets/dogs/DUsw9cQgOrG.webp',
    'assets/dogs/Da8r7w0sEOQ.webp',
    'assets/dogs/DLqY4_eMmPo.webp',
    'assets/dogs/DQ_7CzfgP2-.webp',
    'assets/dogs/DT5QoY7gPeY.webp',
    'assets/dogs/DFWHtYOSy1-.webp',
    'assets/dogs/DQ6yhajgJ3L.webp',
    'assets/dogs/DSTgXtfDOW-.webp',
    'assets/dogs/DFk4CoSOVbx.webp',
  ];

  // coat · look · what's in the photo. Wall order = this order (mixed coats up top on purpose).
  const DOGS = [
    ['DaoTsYusE_d', 'curly', 'teddy', 'Small apricot doodle in a round teddy bear cut'],
    ['C77nMMKs3Ss', 'wiry', 'breed', 'Black schnauzer with a trimmed beard and brows'],
    ['DRBDFwEAI95', 'curly', 'short', 'Black and white sheepadoodle, short all over'],
    ['DQrvxmygEnQ', 'silky', 'short', 'Grey shih tzu mix with long ears and a flower clip'],
    ['DOKMii1gEon', 'double', 'bath', 'Husky on the back-to-school photo set'],
    ['DGjWjOUyMi_', 'curly', 'breed', 'Black poodle with a top knot and a bow tie'],
    ['DJmSrziOvWy', 'curly', 'teddy', 'Apricot doodle on the grooming table after a teddy bear cut'],
    ['DKxqkXmyhNQ', 'curly', 'teddy', 'Goldendoodle with a big round teddy face'],
    ['DGEefxjyKPf', 'silky', 'short', 'Small white dog in a short puppy cut on the Valentine set'],
    ['De0FpPgM0H5', 'curly', 'teddy', 'Ash, a chocolate doodle, in a Halloween bandana'],
    ['DD3NWvpMIAk', 'curly', 'teddy', 'Grey merle doodle in a teddy bear cut'],
    ['DfVuOeoMhUt', 'curly', 'breed', 'Doodle with a sculpted round head and a short body'],
    ['DMtQ8H7yzUN', 'silky', 'teddy', 'Small grey dog with a fluffy teddy face on the beach set'],
    ['DRdQeJVgBYu', 'curly', 'teddy', 'Apricot doodle with pink bows'],
    ['DKrVjO2M8fh', 'curly', 'short', 'Cream doodle in a short, easy cut'],
    ['DLrxwAnsYvl', 'short', 'bath', 'Brindle short-coated dog on the flag set'],
    ['DJXvWFkMstf', 'curly', 'teddy', 'Apricot doodle in a cowboy hat'],
    ['DRBAjK6gK94', 'wiry', 'short', 'Small white terrier on the Thanksgiving set'],
    ['DX2ywEgMSPC', 'curly', 'short', 'Father and son doodles after a short cut'],
    ['DGwSgawskVP', 'curly', 'teddy', 'White doodle with a long fluffy teddy face'],
    ['DQeczjNACCX', 'curly', 'breed', 'Apricot mini poodle with a round top knot'],
    ['DJ5A8XiSFvL', 'curly', 'short', 'White doodle on the 4th of July set'],
    ['DOi-0PKAPD6', 'curly', 'teddy', 'Grey doodle smiling after a teddy bear cut'],
    ['DQpzm43gG-i', 'curly', 'teddy', 'Cream doodle in a fall bandana'],
    ['DJwgN8PupIw', 'curly', 'teddy', 'Black and white sheepadoodle with a full fluffy face'],
    ['DT1PjTfABTO', 'curly', 'teddy', 'Doodle on the Valentine heart set'],
    ['DKVVw4sS5GX', 'curly', 'teddy', 'Goldendoodle with his tongue out'],
    ['DUsw9cQgOrG', 'curly', 'teddy', 'White doodle in a red bandana'],
    ['Da8r7w0sEOQ', 'curly', 'teddy', 'Red doodle lying down in a teddy bear cut'],
    ['DLqY4_eMmPo', 'curly', 'teddy', 'Apricot doodle on the flag set'],
    ['DQ_7CzfgP2-', 'curly', 'teddy', 'Golden doodle on the Thanksgiving set'],
    ['DT5QoY7gPeY', 'curly', 'teddy', 'White doodle in a red bow tie'],
    ['DFWHtYOSy1-', 'curly', 'short', 'White doodle walking across the salon'],
    ['DQ6yhajgJ3L', 'short', 'bath', 'Short-coated senior dog in a turkey bandana'],
    ['DSTgXtfDOW-', 'double', 'bath', 'St Bernard mix looking over the front desk'],
    ['DFk4CoSOVbx', 'wiry', 'bath', 'Scruffy dog mid-bath in the tub'],
  ].map(([id, coat, look, alt]) => ({ id, coat, look, alt }));

  const COATS = {
    curly:  { label: 'Curly',  hint: 'doodles, poodles',     thumb: 'DKxqkXmyhNQ', looks: ['teddy', 'short', 'breed', 'bath'] },
    silky:  { label: 'Silky',  hint: 'shih tzu, Maltese',    thumb: 'DQrvxmygEnQ', looks: ['teddy', 'short', 'bath'] },
    wiry:   { label: 'Wiry',   hint: 'schnauzer, terriers',  thumb: 'C77nMMKs3Ss', looks: ['breed', 'short', 'bath'] },
    double: { label: 'Double', hint: 'husky, shepherd',      thumb: 'DOKMii1gEon', looks: ['bath'] },
    short:  { label: 'Short',  hint: 'lab, pit, frenchie',   thumb: 'DLrxwAnsYvl', looks: ['bath'] },
  };
  const LOOKS = {
    teddy: { label: 'Teddy bear',    hint: 'round face, fluffy',   name: 'teddy bear cut' },
    short: { label: 'Short and easy', hint: 'short all over',      name: 'short and easy cut' },
    breed: { label: 'Breed style',   hint: 'the classic for the breed', name: 'breed-style cut' },
    bath:  { label: 'Bath and tidy', hint: 'no haircut',           name: 'bath and tidy' },
  };
  // Typical ranges across salons (labelled "typical" on the page). Noelle confirms for each dog.
  const CUT = 'Bath, blow-dry, brush-out, haircut and nails.';
  const BATH = 'Bath, blow-dry, brush-out, nails, and a tidy around the face, feet and sanitary area. No haircut.';
  const TIME = {
    curly:  { cut: ['2½–3½ hours', 'every 4–6 weeks'], bath: ['1½–2 hours', 'every 2–4 weeks, between cuts'] },
    silky:  { cut: ['1½–2½ hours', 'every 4–6 weeks'], bath: ['1–1½ hours', 'every 2–4 weeks, between cuts'] },
    wiry:   { cut: ['1½–2½ hours', 'every 6–8 weeks'], bath: ['1–1½ hours', 'every 4–6 weeks'] },
    double: { bath: ['1½–3 hours (big coats take longest to dry)', 'every 6–8 weeks, more in shedding season'] },
    short:  { bath: ['45 minutes–1½ hours', 'every 4–8 weeks'] },
  };
  const KNOW = {
    first:   { label: 'First groom', note: 'First groom', q: 'This was my puppy’s first real groom, and they did an amazing job. She came out looking adorable and completely relaxed even though my puppy doesn’t like her face touched.', who: 'Alison, on Google' },
    senior:  { label: 'Senior', note: 'Senior dog', q: 'The owner, Noelle, personally groomed our Westie herself due to his age and health issues and watched him closely until we could pick him up.', who: 'J., on Google' },
    nervous: { label: 'Nervous', note: 'Nervous at groomers', q: 'My dog is a senior and has such bad anxiety with being at the groomers, but they are so helpful and wonderful with my boy.', who: 'Melissa, on Google' },
  };

  const $ = s => document.querySelector(s);
  const wall = $('#wall');
  const state = { coat: null, look: null, know: null };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // build wall
  const tiles = DOGS.map((d, i) => {
    const f = document.createElement('figure');
    f.className = 'tile'; f.dataset.id = d.id;
    f.innerHTML = `<img src="${P(d.id)}" alt="${d.alt}" width="560" height="700" ${i < 9 ? 'fetchpriority="' + (i < 3 ? 'high' : 'auto') + '"' : 'loading="lazy"'} decoding="async"><span class="tag">${LOOKS[d.look].label}</span>`;
    wall.appendChild(f); return f;
  });

  // load the whole wall early so re-sorted dogs never show an empty tile
  let warmed = false;
  const warm = () => { if (warmed) return; warmed = true; tiles.forEach(t => { const i = t.querySelector('img'); if (i.loading === 'lazy') i.loading = 'eager'; }); };
  addEventListener('load', () => setTimeout(warm, 1200), { once: true });
  ['pointerdown', 'focusin'].forEach(ev => $('#coats').addEventListener(ev, warm, { once: true }));

  const chip = (key, o, thumb, group) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip' + (thumb ? '' : ' no-img'); b.dataset[group] = key; b.setAttribute('aria-pressed', 'false');
    b.innerHTML = (thumb ? `<span class="thumb" style="background-image:url(${P(thumb)})" aria-hidden="true"></span>` : '') + `<span><b>${o.label}</b>${o.hint ? `<small>${o.hint}</small>` : ''}</span>`;
    return b;
  };
  for (const [k, o] of Object.entries(COATS)) $('#coats').appendChild(chip(k, o, o.thumb, 'coat'));
  for (const [k, o] of Object.entries(KNOW)) $('#know').appendChild(chip(k, o, null, 'know'));

  const show = n => {
    const had = document.activeElement && document.activeElement.closest('.sheet');
    document.querySelectorAll('.step').forEach(s => s.hidden = +s.dataset.step !== n);
    if (!had) return;
    const t = n === 0 ? document.querySelector('#coats .chip') : n === 1 ? document.querySelector('#looks .chip') : $('#answerTitle');
    if (t) t.focus({ preventScroll: true });
  };

  // FLIP re-sort: matching dogs to the front, the rest dim
  const sort = () => {
    const before = new Map(tiles.map(t => [t, t.getBoundingClientRect()]));
    const score = t => { const d = DOGS.find(x => x.id === t.dataset.id); if (!state.coat) return 0; return (d.coat === state.coat ? 2 : 0) + (state.look && d.look === state.look ? 1 : 0); };
    const order = tiles.map((t, i) => [t, score(t), i]).sort((a, b) => b[1] - a[1] || a[2] - b[2]);
    const want = state.look ? 3 : 2;
    order.forEach(([t, sc]) => { wall.appendChild(t); t.classList.toggle('hit', !!state.coat && sc >= want); t.classList.toggle('dim', !!state.coat && sc < want); });
    wall.classList.toggle('sorted', !!state.coat);
    if (reduce) return;
    tiles.forEach(t => {
      const a = before.get(t), b = t.getBoundingClientRect(), dx = a.left - b.left, dy = a.top - b.top;
      if (!dx && !dy) return;
      t.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
    });
  };

  const press = (box, attr, key) => box.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset[attr] === key)));

  const pickCoat = k => {
    state.coat = k; state.look = null; state.know = null;
    press($('#coats'), 'coat', k);
    $('#pickedCoat').textContent = $('#pickedCoat2').textContent = COATS[k].label;
    const box = $('#looks'); box.textContent = '';
    for (const l of COATS[k].looks) {
      const ex = DOGS.find(d => d.coat === k && d.look === l) || DOGS.find(d => d.coat === k);
      box.appendChild(chip(l, LOOKS[l], ex.id, 'look'));
    }
    sort();
    if (COATS[k].looks.length === 1) pickLook(COATS[k].looks[0]); else show(1);
  };

  const pickLook = l => {
    state.look = l; state.know = null;
    const c = COATS[state.coat], one = c.looks.length === 1;
    $('#pickedLook').textContent = LOOKS[l].label;
    $('#pickedLookBtn').hidden = one;
    $('#answerTitle').textContent = `${LOOKS[l].label}${l === 'bath' ? '' : ' cut'} for a ${c.label.toLowerCase()} coat`;
    $('#answerTitle').tabIndex = -1;
    const kind = l === 'bath' ? 'bath' : 'cut';
    $('#aIncl').textContent = kind === 'cut' ? CUT : BATH;
    const [t, b] = TIME[state.coat][kind];
    $('#aTime').textContent = t; $('#aBack').textContent = b;
    const n = DOGS.filter(d => d.coat === state.coat && d.look === l).length;
    const up = matchMedia('(min-width:960px)').matches ? 'tagged in the wall above' : 'tagged above';
    $('#aCount').innerHTML = `<b>${n}</b><span>${n === 1 ? 'dog' : 'dogs'} Noelle groomed this way, ${up}.${n < 3 ? ` <a href="${IG}" target="_blank" rel="noopener">More on her Instagram</a>` : ''}</span>`;
    $('#said').hidden = true; press($('#know'), 'know', null);
    sort(); show(2);
  };

  $('#coats').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) pickCoat(b.dataset.coat); });
  $('#looks').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) pickLook(b.dataset.look); });
  $('#know').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    const k = state.know === b.dataset.know ? null : b.dataset.know; state.know = k;
    press($('#know'), 'know', k);
    $('#said').hidden = !k;
    if (k) { $('#saidQ').textContent = KNOW[k].q; $('#saidW').textContent = '— ' + KNOW[k].who; }
  });
  document.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', () => {
    const n = +b.dataset.back;
    if (n === 0) { state.coat = state.look = state.know = null; press($('#coats'), 'coat', null); sort(); }
    else { state.look = null; sort(); }
    show(n);
  }));

  // expose the pick for the request form
  window.NOELLE = { state, COATS, LOOKS, KNOW, pickCoat, pickLook };
})();

/* reveal on scroll (house standard; sections stay visible if this never runs) */
(() => {
  const els = [...document.querySelectorAll('[data-reveal]')];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('rv');
  const n = new Map();
  els.forEach(e => { const p = e.parentElement, i = n.get(p) || 0; e.style.setProperty('--d', Math.min(i, 5) * .08 + 's'); n.set(p, i + 1); });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: .01, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
  setTimeout(() => els.forEach(e => { if (e.getBoundingClientRect().top < innerHeight) e.classList.add('is-visible'); }), 1500);
})();

/* today's row in the hours table */
(() => {
  const rows = document.querySelectorAll('.hours tbody tr');
  const i = (new Date().getDay() + 6) % 7; // Monday first
  if (rows[i]) rows[i].classList.add('today');
})();

/* request form: filled from the cut finder, front end only */
(() => {
  const N = window.NOELLE, f = document.getElementById('form'), done = document.getElementById('done');
  if (!f || !N) return;
  const el = n => f.elements[n];
  const day = document.getElementById('day'), hint = document.getElementById('dayHint');
  const pad = x => String(x).padStart(2, '0');
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const now = new Date(); day.min = iso(now);
  const max = new Date(now); max.setDate(max.getDate() + 120); day.max = iso(max);
  const dateOf = v => { const [y, m, d] = v.split('-').map(Number); return new Date(y, m - 1, d); };
  day.addEventListener('change', () => {
    if (!day.value) { hint.textContent = 'Open Tuesday to Saturday.'; hint.classList.remove('warn'); return; }
    const wd = dateOf(day.value).getDay();
    const closed = wd === 0 || wd === 1;
    hint.textContent = closed ? 'Closed Sundays and Mondays. Pick Tuesday to Saturday.' : 'Open 8 am to 5 pm that day.';
    hint.classList.toggle('warn', closed);
  });

  const fill = () => {
    const s = N.state; if (!s.coat) return;
    el('coat').value = s.coat; el('look').value = s.look || '';
    const k = s.know ? N.KNOW[s.know].note : '';
    if (k && !el('notes').value.includes(k)) el('notes').value = (el('notes').value ? el('notes').value + '. ' : '') + k;
    const line = document.getElementById('fromFinder');
    line.textContent = `From the cut finder: ${s.look ? N.LOOKS[s.look].label : 'help me pick'}, ${N.COATS[s.coat].label.toLowerCase()} coat${k ? ', ' + k.toLowerCase() : ''}.`;
    line.hidden = false;
    done.hidden = true; f.hidden = false;
  };
  document.getElementById('reqCut').addEventListener('click', () => { fill(); setTimeout(() => el('dog').focus({ preventScroll: true }), 650); });

  f.addEventListener('submit', e => {
    e.preventDefault();
    const err = document.getElementById('err'); const miss = [];
    ['owner', 'phone'].forEach(n => { const ok = el(n).value.trim().length > (n === 'phone' ? 6 : 0); el(n).setAttribute('aria-invalid', String(!ok)); if (!ok) miss.push(n === 'owner' ? 'your name' : 'a phone number'); });
    if (miss.length) { err.textContent = `Please add ${miss.join(' and ')} so the salon can reach you.`; err.hidden = false; el(miss[0] === 'your name' ? 'owner' : 'phone').focus(); return; }
    err.hidden = true;
    const look = el('look').value, coat = el('coat').value;
    const what = look ? (look === 'bath' ? 'Bath and tidy' : N.LOOKS[look].label + ' cut') : 'A groom';
    const dog = el('dog').value.trim();
    const time = f.querySelector('input[name=time]:checked').value;
    const dd = day.value ? dateOf(day.value) : null;
    const when = dd ? `${dd.toLocaleDateString('en-US', { weekday: 'long' })} ${time}, ${dd.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}` : `the first ${time} that works`;
    document.getElementById('doneT').textContent = `${what}${coat ? ', ' + N.COATS[coat].label.toLowerCase() + ' coat' : ''}, ${when}${dog ? ', for ' + dog : ''}.`;
    const bits = [el('breed').value.trim(), el('size').value, el('notes').value.trim()].filter(Boolean);
    document.getElementById('doneD').textContent = `${el('owner').value.trim()}, ${el('phone').value.trim()}${bits.length ? ' · ' + bits.join(' · ') : ''}`;
    f.hidden = true; done.hidden = false; done.focus();
  });
  document.getElementById('again').addEventListener('click', () => { done.hidden = true; f.hidden = false; el('owner').focus(); });
})();
