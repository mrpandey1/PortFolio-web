const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const linkedinIcon = document.querySelector('.portfolio-icons>a:nth-child(1)>img');
const githubIcon = document.querySelector('.portfolio-icons>a:nth-child(2)>img');

const logo = document.querySelector("#header>div.logo>a>img")
const scrollDownArrow = document.querySelector("#hero>div.scroll-down-arrow>img");
const email = document.querySelector("main>#hero>.email>a>p");
const themeColorMeta = document.querySelector("meta[name='theme-color']");
// console.log(themeColorMeta)

function loading() {
  setTimeout(() => {
    wrapper.style.display = 'none';
    wrapper.style.opacity = 0;

    header.style.display = 'flex';
    setTimeout(() => (header.style.opacity = 1), 50);

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);

    footer.style.display = 'block';
    setTimeout(() => (footer.style.opacity = 1), 50);

  }, 5000);
}



document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("load", function() {
    setTimeout(() => {
      loading()
    }, 500);
  }, false);
})



// LIGHT/DARK MODE FEATURE
const toggleBtnImg = document.querySelector('.mode-toggle-button img');
const toggleBtn = document.querySelector('.mode-toggle-button');
let lightMode = localStorage.getItem('lightMode');


const enableLightMode = () => {
  document.body.classList.add('lightmode');

  let themeColor = themeColorMeta.getAttribute("content");
  // console.log("enableLightMode", themeColor)
  themeColor = "#f3ebeb";
  themeColorMeta.setAttribute("content", themeColor)
  // console.log("enableLightMode", themeColorMeta)

  logo.src = '../static/images/icons/img1-24.png';
  toggleBtnImg.src = '../static/images/icons/img2-09.png';
  linkedinIcon.src = '../static/images/icons/img1-11.png';
  githubIcon.src = '../static/images/icons/img2-02.png';
  email.style.color = "#a34039";
  scrollDownArrow.src = '../static/images/icons/img1-22.png';

  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');

  let themeColor = themeColorMeta.getAttribute("content");
  // console.log("disableLightMode", themeColor)
  themeColor = "#18081c";
  themeColorMeta.setAttribute("content", themeColor)
  // console.log("disableLightMode", themeColorMeta)

  logo.src = '../static/images/icons/img1-23.png';
  toggleBtnImg.src = '../static/images/icons/img1-01.png';
  linkedinIcon.src = '../static/images/icons/img1-03.png';
  githubIcon.src = '../static/images/icons/img1-04.png';
  email.style.color = "#d3b5b9";
  scrollDownArrow.src = '../static/images/icons/img1-07.png';

  localStorage.setItem('lightMode', null);
}


if (lightMode === 'enabled') {
  enableLightMode();
}

// When someone clicks the button
toggleBtn.addEventListener('click', () => {
  // get their lightMode setting
  lightMode = localStorage.getItem('lightMode');

  // if it is not current enabled, enable it
  if (lightMode !== 'enabled') {
    enableLightMode();
  // if it has been enabled, turn it off  
  } else {
    disableLightMode();
  }
});


// NAVIGATION

const navButton = document.querySelector('#header .nav-button');
const navOverlay = document.querySelector('header .overlay');
const navMenu = document.querySelector('header nav.small-screen');
const menuItems = document.querySelector('header nav.small-screen ul');
const menuLinks = document.querySelectorAll('header nav.small-screen ul li a');
// console.log(navButton)

navButton.addEventListener('click', openMenu);
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', closeMenu);
})

function openMenu() {
  navButton.classList.toggle('close');
  navOverlay.classList.toggle('appear');
  navMenu.classList.toggle('open');
  menuItems.classList.toggle('menu-items-appear');

// console.log('clicked')
}
function closeMenu() {
  navButton.classList.remove('close');
  navOverlay.classList.remove('appear');
  navMenu.classList.remove('open');
  menuItems.classList.remove('menu-items-appear');

// console.log('clicked')
}