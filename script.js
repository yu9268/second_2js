'use strict'

const btn = document.getElementById('btn');
const text = document.getElementById('text');
let n = 1;
let s = Math.floor(Math.random() * 9) + 5;
btn.addEventListener('click', () => {
    s--;
    console.log(s);
    const results = ['すき', 'きらい'];
    text.textContent = results[n];
    if (n == 0){
      n = 1;
    }else{
      n = 0;
    }
    if (s <= 0){
      btn.disabled = true;
    }
});

