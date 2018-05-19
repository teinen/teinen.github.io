// menu click action
document.getElementById("menu-button").onclick = () => {
  // toggle menu button
  document.getElementById("menu-button").classList.toggle("active");

  // open top nav
  document.getElementById("top-nav").classList.toggle("opened");
};