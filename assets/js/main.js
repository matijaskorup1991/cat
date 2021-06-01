'use strict';
let $ = (el) => document.querySelector(el);

let walk = 0;
let myInterval;
let walkRight = true;
let width = window.innerWidth;

function catWalk(param = 100) {
  myInterval = setInterval(() => {
    if (walk > width - 300) {
      walkRight = false;
    }
    if (walkRight) {
      $('#cat').style.left = `${walk}px`;
      $('#cat').style.transform = `rotate(0deg)`;

      walk += 20;
    } else if (!walkRight) {
      if (walk <= 0) {
        walkRight = true;
      }
      walk -= 20;
      $('#cat').style.left = `${walk}px`;
      $('#cat').style.transform = `rotateY(180deg)`;
    }
  }, param);
}

function pause() {
  clearInterval(myInterval);
}

function turn() {
  walkRight = !walkRight;
}

function catSpeed() {
  catWalk(50);
}
