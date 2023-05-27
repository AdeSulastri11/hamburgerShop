// toggle
const navLink = document.querySelector('.nav-link');

document.querySelector('#menu-icon').onclick = () => {
  navLink.classList.toggle('active');
};

const menuIcon = document.querySelector('#menu-icon');

document.addEventListener('click', function(e) {
  if(!menuIcon.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove('active');
  }
});