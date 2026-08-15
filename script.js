// ============================================================
// DROP BAR (projects tray) toggle
// ============================================================
const dropBtn   = document.getElementById('dropBtn');
const tray      = document.getElementById('projectTray');
const heroBtn   = document.getElementById('heroProjectsBtn');

function openTray(){
  tray.classList.add('tray--open');
  tray.setAttribute('aria-hidden', 'false');
  dropBtn.setAttribute('aria-expanded', 'true');
}

function closeTray(){
  tray.classList.remove('tray--open');
  tray.setAttribute('aria-hidden', 'true');
  dropBtn.setAttribute('aria-expanded', 'false');
}

function toggleTray(){
  const isOpen = tray.classList.contains('tray--open');
  isOpen ? closeTray() : openTray();
}

dropBtn.addEventListener('click', toggleTray);

// "See projects" button in the hero opens the tray and scrolls to it
heroBtn.addEventListener('click', () => {
  openTray();
  document.querySelector('.nav').scrollIntoView({ behavior: 'smooth' });
});

// close tray on outside click
document.addEventListener('click', (e) => {
  const clickedInsideTray = tray.contains(e.target);
  const clickedDropBtn = dropBtn.contains(e.target);
  const clickedHeroBtn = heroBtn.contains(e.target);
  if (!clickedInsideTray && !clickedDropBtn && !clickedHeroBtn){
    closeTray();
  }
});

// close tray on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTray();
});

// ============================================================
// Auto-update the project counter based on how many
// <article class="tray__item"> (non-placeholder) blocks exist.
// Add/remove project cards in index.html and this updates itself.
// ============================================================
const trayGrid  = document.getElementById('trayGrid');
const trayCount = document.getElementById('trayCount');

function updateProjectCount(){
  const items = trayGrid.querySelectorAll('.tray__item:not(.tray__item--placeholder)');
  const n = items.length;
  trayCount.textContent = `${n} stored`;
}

updateProjectCount();

// ============================================================
// Hero terminal-style typed line
// ============================================================
const typedEl = document.getElementById('typedLine');
const phrases = ['whoami', 'cat about.md', 'ls projects/'];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop(){
  const current = phrases[phraseIndex];

  if (!deleting){
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0){
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 45 : 90);
}

// respect reduced-motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion){
  typedEl.textContent = phrases[0];
} else {
  typeLoop();
}