// ============================================================
// DROP BAR (projects dropdown) — vanilla JS only
//
// Required concepts demonstrated:
//   - DOM selection: getElementById()
//   - Event handling: addEventListener()
//   - classList.toggle() to show/hide the menu
// ============================================================

// 1. Select the dropdown button and dropdown menu
const dropdownButton = document.getElementById('dropdownBtn');
const dropdownMenu    = document.getElementById('dropdownMenu');
const dropdownCaret   = document.getElementById('dropdownCaret');

// 2. Click the button -> toggle the "show" class on the menu
dropdownButton.addEventListener('click', function (e) {
  e.stopPropagation(); // don't let this click immediately trigger the outside-click handler below
  dropdownMenu.classList.toggle('show');

  const isOpen = dropdownMenu.classList.contains('show');

  // keep accessibility attributes in sync
  dropdownButton.setAttribute('aria-expanded', isOpen);
  dropdownMenu.setAttribute('aria-hidden', !isOpen);

  // Bonus — flip the arrow indicator ▾ / ▴
  if (dropdownCaret) {
    dropdownCaret.textContent = isOpen ? '▴' : '▾';
  }
});

// Bonus — close the dropdown when clicking anywhere outside it
document.addEventListener('click', function (e) {
  const clickedInsideMenu = dropdownMenu.contains(e.target);
  const clickedButton = dropdownButton.contains(e.target);

  if (!clickedInsideMenu && !clickedButton) {
    dropdownMenu.classList.remove('show');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
    if (dropdownCaret) dropdownCaret.textContent = '▾';
  }
});

// Close on Escape key too
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    dropdownMenu.classList.remove('show');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
    if (dropdownCaret) dropdownCaret.textContent = '▾';
  }
});

// ============================================================
// Auto-update the project counter based on how many
// <article class="tray__item"> (non-placeholder) blocks exist.
// Add/remove project cards in index.html and this updates itself.
// ============================================================
const trayGrid  = document.getElementById('trayGrid');
const trayCount = document.getElementById('trayCount');

function updateProjectCount() {
  const items = trayGrid.querySelectorAll('.tray__item:not(.tray__item--placeholder)');
  trayCount.textContent = `${items.length} stored`;
}

updateProjectCount();