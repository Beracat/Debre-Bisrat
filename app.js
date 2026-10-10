(() => {
  const DATA = window.DEBRE_BISRAT;
  const ORDER = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const BY_JS_DAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = BY_JS_DAY[new Date().getDay()];
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const audio = $('audio');
  let day = null;
  let track = null;

  // day tabs
  $('days').insertAdjacentHTML('beforeend', ORDER.map(d =>
    `<button type="button" data-day="${d}" class="${d === today ? 'today' : ''}">${DATA.days[d].en.slice(0, 3)}</button>`
  ).join(''));

  function movePill() {
    const b = document.querySelector(`[data-day="${day}"]`);
    $('pill').style.width = b.offsetWidth + 'px';
    $('pill').style.transform = `translateX(${b.offsetLeft}px)`;
  }

  function render() {
    const d = DATA.days[day];
    const count = d.sections.filter(s => s.audio).length;
    $('day').innerHTML = `
      <div class="head">
        <h2>${esc(d.am)} · ውዳሴ ማርያም ${esc(d.gz)}</h2>
        <p>${d.en}${day === today ? ' · today' : ''} · ${count} of ${d.sections.length} recorded</p>
      </div>
      ${count ? '' : '<p class="empty">Not recorded yet. The sections are listed so you can follow along in class.</p>'}
      <ol class="list">${d.sections.map((s, i) => `
        <li class="${s.audio ? '' : 'missing'}" id="${day}-${i}" style="--i:${i}">
          <button type="button" class="row" ${s.audio ? `data-i="${i}"` : 'disabled'}>
            <span class="num">${i + 1}</span>
            <span class="txt"><span class="gz">${esc(s.gz)}</span><span class="tr">${esc(s.tr)}</span></span>
            ${s.audio
              ? '<span class="icon"><svg><use href="#play"/></svg><span class="eq"><i></i><i></i><i></i></span></span>'
              : '<span class="soon">Not yet</span>'}
          </button>
        </li>`).join('')}
      </ol>`;
    mark();
  }

  function showDay(k, animate) {
    k = DATA.days[k] ? k : today;
    if (k === day) return;
    day = k;
    history.replaceState(null, '', '#' + day);
    document.querySelectorAll('[data-day]').forEach(b => b.classList.toggle('on', b.dataset.day === day));
    movePill();
    if (!animate) return render();
    $('day').classList.add('out');
    setTimeout(() => { render(); $('day').classList.remove('out'); }, 150);
  }

  // playback
  function play(k, i) {
    const s = DATA.days[k].sections[i];
    track = { day: k, i };
    audio.src = s.audio;
    audio.play().catch(() => {});
    $('now-title').textContent = s.gz;
    $('now-sub').textContent = `${i + 1}. ${s.tr} · ${DATA.days[k].en}`;
    const now = document.querySelector('.now');
    now.classList.remove('swap'); void now.offsetWidth; now.classList.add('swap');
    $('player').classList.add('show');
    $('player').setAttribute('aria-hidden', 'false');
    mark();
  }

  function nextIndex() {
    const list = DATA.days[track.day].sections;
    for (let n = track.i + 1; n < list.length; n++) if (list[n].audio) return n;
    return -1;
  }

  function current() {
    return track && document.getElementById(track.day + '-' + track.i);
  }

  function mark() {
    document.querySelectorAll('.list li.playing').forEach(li => li.classList.remove('playing', 'live'));
    const li = current();
    if (li) li.classList.add('playing'), li.classList.toggle('live', !audio.paused);
    $('toggle-ico').setAttribute('href', audio.paused ? '#play' : '#pause');
    $('toggle').setAttribute('aria-label', audio.paused ? 'Play' : 'Pause');
    $('next-btn').style.opacity = track && nextIndex() >= 0 ? 1 : .3;
  }

  // events
  $('days').addEventListener('click', e => {
    const b = e.target.closest('[data-day]');
    if (b) showDay(b.dataset.day, true);
  });
  $('day').addEventListener('click', e => {
    const b = e.target.closest('[data-i]');
    if (!b) return;
    const i = +b.dataset.i;
    if (track && track.day === day && track.i === i) audio.paused ? audio.play() : audio.pause();
    else play(day, i);
  });
  $('toggle').addEventListener('click', () => audio.paused ? audio.play() : audio.pause());
  $('next-btn').addEventListener('click', () => { if (track && nextIndex() >= 0) play(track.day, nextIndex()); });
  $('repeat-btn').addEventListener('click', e => {
    audio.loop = !audio.loop;
    e.currentTarget.setAttribute('aria-pressed', audio.loop);
  });
  $('seek').addEventListener('click', e => {
    const r = e.currentTarget.getBoundingClientRect();
    if (audio.duration) audio.currentTime = (e.clientX - r.left) / r.width * audio.duration;
  });

  audio.addEventListener('play', mark);
  audio.addEventListener('pause', mark);
  audio.addEventListener('timeupdate', () => {
    const p = audio.duration ? audio.currentTime / audio.duration * 100 : 0;
    $('fill').style.width = p + '%';
    const li = current();
    if (li) li.style.setProperty('--p', p + '%');
  });
  audio.addEventListener('ended', () => {
    const li = current();
    if (li) li.style.setProperty('--p', '0%');
    const n = nextIndex();
    if (n >= 0) play(track.day, n); else mark();
  });
  window.addEventListener('resize', movePill);
  window.addEventListener('hashchange', () => showDay(location.hash.slice(1), true));

  // class times
  const t = hm => { const [h, m] = hm.split(':').map(Number); return (h % 12 || 12) + (m ? ':' + String(m).padStart(2, '0') : ''); };
  $('classes').innerHTML = 'Classes: ' + DATA.classes.map(c =>
    `<b>${DATA.days[BY_JS_DAY[c.day]].en}</b> ${t(c.start)}–${t(c.end)}`).join(' · ') +
    (DATA.telegram ? ` · <a href="${esc(DATA.telegram)}">Telegram</a>` : '');

  showDay(location.hash.slice(1), false);
  document.fonts && document.fonts.ready.then(movePill);
})();
