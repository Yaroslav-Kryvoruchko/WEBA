let Plas = document.getElementById('plas');
let Minus = document.getElementById('minus');

let Number = document.getElementById('number');

Plas.addEventListener('click', plas);

Minus.addEventListener('click', minus);

let i = 0;

function plas() {
    if(i <= 9) {
        let p = i + 1;
        i++;
        out(p);
    }
}

function minus() {
    if(i <= 10) {
        let m = i - 1;
        i--;
        out(m);
    }
}

function out(result) {
    Number.textContent = result;
}


// Mobile menu


const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

//scroll

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
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

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
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




