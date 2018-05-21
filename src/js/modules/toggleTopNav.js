// Menu click action
const toggleTopNav = () => {
  // Get elements
  const menuButton = document.querySelector('a.menu-button');
  const topNav = document.querySelector('div.top-nav');
  const lists = document.getElementsByTagName("li");

  // Toggle class
  menuButton.classList.toggle("active");
  topNav.classList.toggle("opened");

  // Add animation to each list item
  for (const key in lists) {
    if (lists.hasOwnProperty(key)) {
      const item = lists[key];
      item.classList.toggle("animated");
      item.classList.toggle("zoomIn");
    }
  }
};

// Expose func to global scope
window.toggleTopNav = toggleTopNav;
export default toggleTopNav;