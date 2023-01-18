import { setupShip } from "./ship.js";
import { updateAsteroid, setupAsteroid } from "./asteroid.js";

const SPEED_SCALE_INC = 0.00001;
const game = document.getElementById("game")
const screen = document.querySelector("[data-screen]")
const scoreElem = document.querySelector("[data-score]")
const startScreen = document.querySelector("[data-start-screen]")

let prevTime;
let speedScale;
let score = 0;

document.querySelector('.screen').addEventListener("mousemove", (e) => {
    console.log(e.pageX - screen.offsetLeft);
})
// document.querySelector('.projects').addEventListener("click", handleStart, { once: true})
// window.addEventListener("scroll", function () {
//     if (screen.getBoundingClientRect().top < 100) {
//         screen.focus();
//     }
// })

screen.addEventListener("click", handleStart, { once: true})

function update(time) {
    if (prevTime == null) {
        prevTime = time;
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - prevTime;

    updateSpeedScale(delta)
    updateScore(delta)
    updateAsteroid(delta, speedScale)

    prevTime = time;
    window.requestAnimationFrame(update)
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INC;
}

function updateScore(delta) {
    score += delta * 0.1
    scoreElem.textContent = Math.floor(score)
}

function handleStart() {
    console.log("here");
    prevTime = null;
    speedScale = 1;
    score = 0;
    setupShip()
    setupAsteroid()
    startScreen.classList.add("hide");
    window.requestAnimationFrame(update);

}

// window.requestAnimationFrame(update)