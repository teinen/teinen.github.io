// Menu click action
document.getElementById("menu-button").onclick = () => {
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
      if (key % 2 === 0) {
        li.classList.toggle("bounceInLeft");
      } else {
        li.classList.toggle("bounceInRight");
      }
    }
  }
};