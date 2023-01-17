import {
    setCustomProperty,
    getCustomProperty,
    incrementCustomProperty
} from "./updateCustomProperty.js"

const SPEED = 0.05
const asteroids = ["./models/asteroid-1.png", "./models/asteroid-2.png"]
const ASTEROIDS_INTERVAL_MIN = 500;
const ASTEROIDS_INTERVAL_MAX = 2000;
const screen = document.querySelector("[data-screen]")

