let Plas = document.getElementById('plas');
let Minus = document.getElementById('minus');
let Numbers = document.getElementById('number');
const ErrorAlert = document.querySelector('.alert-message');

const Total = document.getElementById('total');
const tickets = 20;

Plas.addEventListener('click', plas);
Minus.addEventListener('click', minus);

let i = 0;

function plas() {
    if(i <= 9) {
        i++;
        const totals = i * tickets;
        out(i, totals);
    }
}

function minus() {
    if(i >= 1) {
        i--;
        const totals = i * tickets;
        out(i, totals);
    }
}

function out(result, total) {
    Numbers.textContent = result;
    Total.textContent = total + "$";
}



// Mobile menu


const menuBtn = document.querySelector('.menu-btn');
const Menu = document.querySelector('.mobile--menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        Menu.classList.add('open_menu');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        Menu.classList.remove('open_menu');
        menuOpen = false;
    }
})


//scroll


var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// mobile

const SeeMore = document.querySelector(".see_more");
const Test = document.querySelector(".not_visible");
const Sec_3_Mobile = document.getElementById('sec-3__mobile');

SeeMore.addEventListener('click', () => {
  Test.classList.add('see_visible');
  Sec_3_Mobile.classList.add('height_section');
  SeeMore.style.display = 'none';
})


// google maps

const SectionMaps = document.getElementById('maps');
const Maps = document.querySelector('iframe');
const BtnMaps = document.querySelector('.btn_maps');
const TitleBtn = document.getElementById('title_btn');

let openMaps = false;

BtnMaps.addEventListener('click', () => {
  if(!openMaps) {
    SectionMaps.classList.add('open_maps');
    Maps.classList.add('open_maps');
    TitleBtn.textContent = "Close";
    openMaps = true;
  } else {
    SectionMaps.classList.remove('open_maps');
    Maps.classList.remove('open_maps');
    TitleBtn.textContent = "Open";
    openMaps = false;
  }
})

// input

const BtnSent = document.getElementById('btn_sent');


BtnSent.addEventListener('click', () => {

});






