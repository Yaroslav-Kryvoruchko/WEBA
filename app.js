let Plas = document.getElementById('plas');
let Minus = document.getElementById('minus');

let Number = document.getElementById('number');

Plas.addEventListener('click', plas)

Minus.addEventListener('click', minus)

let i = 0;
console.log(i);

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

const BtnMenu = document.querySelector('.mobile__btn');
const Menu = document.querySelector('.mobile__botton');

BtnMenu.addEventListener('click', () => {
    Menu.classList.toggle('anim');
})


//coments

const OneComit = document.getElementById("one__item");
const TwoComit = document.getElementById("two__item");

function comit() {

    for(let i = 1; i < 5; i++) {
        if(i === 1) {
            OneComit.style.display = "none";
        }else if (i === 2) {
            TwoComit.style.display = "flex";
        }
        console.log(i);
    }
}

comit();

