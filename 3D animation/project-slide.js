"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scroller(e) {
    const {
        scrollY
    } = window;

    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();

    const dist = targetY - timelineRect.top;
    console.log(dist);

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px * 1.1)`;
    }
    
    if (dist > timeline.offsetHeight + 150 && !full) {
        full = true;
        line.style.bottom = `-50px`;

    }

    sections.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        if (rect.top < targetY) {
            element.classList.add('show-me');
        } else {
            element.classList.remove('show-me');
        }
    });

    prevScrollY = window.scrollY;

}

scroller();
line.style.display = 'block';
window.addEventListener('scroll', scroller);