// Navigation drawer toggle script (extracted from inline HTML)

const menuBtn = document.getElementById("menuToggle");
const drawer = document.getElementById("rightDrawer");
const overlay = document.getElementById("drawerOverlay");
const closeBtn = document.getElementById("closeDrawer");

function openDrawer() {
  if (drawer) drawer.classList.remove("translate-x-full");
  if (overlay) overlay.classList.remove("opacity-0", "pointer-events-none");
}

function closeDrawer() {
  if (drawer) drawer.classList.add("translate-x-full");
  if (overlay) overlay.classList.add("opacity-0", "pointer-events-none");
}

if (menuBtn) menuBtn.addEventListener("click", openDrawer);
if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
if (overlay) overlay.addEventListener("click", closeDrawer);
