const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};``

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//      -nav-
// let navBar = document.querySelectorAll("a");
let navBar = document.querySelectorAll("nav a");
let count = 1;
navBar.forEach(item => {
  item.textContent = siteContent.nav[`nav-item-${count}`];
  count++;
});
// console.log(navBar)
// navBar[0].txtContent = siteContent["nav"]["nav-item-1"];-----why does this not work???----


//      -cta h1-
let ctah1 = document.querySelector(".cta-text h1");
ctah1.textContent = siteContent['cta']['h1'];

//     -cta button-
let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button'];

//      -cta imgSrc-
let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//     ---main content---
//      -features-h4-
let allh4 = document.querySelectorAll('.main-content h4');
let h4Arr = Array.from(allh4);

//      -content-p-
let allP = document.querySelectorAll('.main-content p');
let pArr = Array.from(allP);

//      -add content- h4
h4Arr[0].textContent = siteContent['main-content']['features-h4'];
h4Arr[1].textContent = siteContent['main-content']['about-h4'];
h4Arr[2].textContent = siteContent['main-content']['services-h4'];
h4Arr[3].textContent = siteContent['main-content']['product-h4'];
h4Arr[4].textContent = siteContent['main-content']['vision-h4'];

//      -add content- p
pArr[0].textContent = siteContent['main-content']['features-content'];
pArr[1].textContent = siteContent['main-content']['about-content'];
pArr[2].textContent = siteContent['main-content']['services-content'];
pArr[3].textContent = siteContent['main-content']['product-content'];
pArr[4].textContent = siteContent['main-content']['vision-content'];

//      -midImage-
let midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
