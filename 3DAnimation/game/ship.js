import {
    getCustomProperty,
    setCustomProperty,
    incrementCustomProperty
} from "./updateCustomProperty.js"

const ship = document.querySelector("[data-ship]")
const screen = document.querySelector("[data-screen]")

export function setupShip() {
    setCustomProperty(ship, "top", 680)
    setCustomProperty(ship, "left", 445)
    screen.removeEventListener("mousemove", moveShip)
    screen.addEventListener("mousemove", moveShip)
}


function moveShip(e) {
    let mouseX = e.pageX - screen.offsetLeft;
    let mouseY = e.pageY - screen.offsetTop;

    if (mouseX > 50 && mouseX < 900) {
        setCustomProperty(ship, "left", mouseX - 45)
        // ship.style.left = ;
    }
    
    if (mouseY > 60 && mouseY < 740) {
        setCustomProperty(ship, "top", mouseY - 45)
        // ship.style.top = mouseY - 45;
    }
    
}