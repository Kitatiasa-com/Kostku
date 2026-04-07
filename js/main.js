// ==========================
// LOAD COMPONENT
// ==========================
function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = data;
        setActiveMenu();
      }
    });
}

loadComponent("sidebar", "../components/sidebar.html");
loadComponent("sidebar-penghuni", "../components/sidebar-penghuni.html");
loadComponent("topbar", "../components/topbar.html");
loadComponent("topbar-penghuni", "../components/topbar-penghuni.html");


// ==========================
// SIDEBAR TOGGLE (MOBILE)
// ==========================
document.addEventListener("click", function (e) {

  const sidebar = document.querySelector(".sidebar");
  const sidebarPenghuni = document.querySelector(".sidebar-penghuni");
  const burger = document.getElementById("burger-btn");
  const overlay = document.getElementById("overlay");

  // buka sidebar
  if (burger && e.target === burger) {

    if (overlay) overlay.classList.add("active");

    if (sidebar) sidebar.classList.add("active");
    if (sidebarPenghuni) sidebarPenghuni.classList.add("active");

  }

  // tutup sidebar (hanya di mobile)
  if (
    window.innerWidth <= 768 &&
    overlay &&
    (e.target.id === "overlay" || e.target.id === "content")
  ) {

    if (sidebar) sidebar.classList.remove("active");
    if (sidebarPenghuni) sidebarPenghuni.classList.remove("active");

    overlay.classList.remove("active");

  }

});


// ==========================
// MENU ACTIVE
// ==========================
function setActiveMenu() {

  const links = document.querySelectorAll(".list-item a");
  const currentPath = window.location.pathname;

  links.forEach((link) => {

    const linkPath = new URL(link.href).pathname;

    if (currentPath.includes(linkPath)) {

      document.querySelectorAll(".list-item").forEach((item) => {
        item.classList.remove("active");
      });

      link.closest(".list-item").classList.add("active");

    }

  });

}