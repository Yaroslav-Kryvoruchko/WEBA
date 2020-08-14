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



