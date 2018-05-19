// Menu click action
const toggleTopNav = () => {
  // Get elements
  const menuButton = document.getElementById("menu-button");
  const topNav = document.getElementById("top-nav");
  const lists = document.getElementsByTagName("li");

  // Toggle class
  menuButton.classList.toggle("active");
  topNav.classList.toggle("opened");

  for (const key in lists) {
    if (lists.hasOwnProperty(key)) {
      const li = lists[key];
      li.classList.toggle("animated");
      li.classList.toggle("zoomIn");
    }
  }
};

// Expose func to global scope
window.toggleTopNav = toggleTopNav;
export default toggleTopNav;