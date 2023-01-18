import {
    setCustomProperty,
    getCustomProperty,
    incrementCustomProperty
} from "./updateCustomProperty.js"

const SPEED = 0.05
const asteroids = ["game/models/asteroid-1.png", "game/models/asteroid-2.png"]
const ASTEROIDS_INTERVAL_MIN = 500;
const ASTEROIDS_SPAWN_MIN = 1;
const ASTEROIDS_INTERVAL_MAX = 2000;
const ASTEROIDS_SPAWN_MAX = 3;
const screen = document.querySelector("[data-screen]")

let nextAsteroidsTime;

export function setupAsteroid() {
    nextAsteroidsTime = ASTEROIDS_INTERVAL_MIN;
    document.querySelectorAll("[data-asteroid]").forEach( a => {
        a.remove()
    })
}

export function updateAsteroid(delta, speedScale) {
    document.querySelectorAll("[data-asteroid]").forEach( a => {
        incrementCustomProperty(a, "--top",
         delta * speedScale * SPEED)
        if (getCustomProperty(a, "--top") >= 100) {
            a.remove()
        } 
    })

    if (nextAsteroidsTime <= 0) {
        let numOfSpawns = randomNumberBetween(
            ASTEROIDS_SPAWN_MIN, ASTEROIDS_SPAWN_MAX)

        for (let i = 0; i < numOfSpawns; i++) {
            createAsteroid()
        }
        nextAsteroidsTime = randomNumberBetween(
            ASTEROIDS_INTERVAL_MIN , ASTEROIDS_INTERVAL_MAX) / speedScale;
    }
    nextAsteroidsTime -= delta
}

export function createAsteroid() {
    let asteroidIndex = Math.floor(Math.random() * 2);
    const asteroid = document.createElement("img")
    let leftPosition = randomNumberBetween(5, 100)
    asteroid.dataset.asteroid = true
    asteroid.src = asteroids[asteroidIndex]
    asteroid.classList.add("asteroid")
    setCustomProperty(asteroid, "--top", 0)
    setCustomProperty(asteroid, "--left", leftPosition)
    screen.append(asteroid)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}