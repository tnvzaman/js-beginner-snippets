//declaring variables used for animation
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const fullname = document.querySelectorAll('.fullname');
const navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

// window.addEventListener('mousemove', (e) => {
//     console.log(e.pageX, e.pageY);
// })

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // firstName.style.transform = "translateZ(150px)";
    // lastName.style.transform = "translateZ(150px)";
    fullname[0].style.transform = "translateZ(150px)";
    fullname[1].style.transform = "translateZ(150px)";
})

//Animate in
container.addEventListener('mouseenter', (e) => {
    title.style.transition = "none";
    // fullname[0].style.transition = "none";
    // fullname[1].style.transition = "none";
})

//Animate out
container.addEventListener('mouseleave', function() {
    title.style.transition = "all 0.5s ease";
    title.style.transform = `rotateY(0deg) rotateX(0deg)`;
    fullname[0].style.transform = "translateZ(0px)";
    fullname[1].style.transform = "translateZ(0px)";
    fullname[0].style.transition = "all 0.5s ease out";
    fullname[1].style.transition = "all 0.5s ease out";
})

//Intro page scroll animation
window.addEventListener('scroll', (e) => {
    
    let firstNamePos = 360 + 5 * scrollY;
    let lastNamePos = 400 + 5 * scrollY;
    // console.log(firstNamePos)
    if (firstNamePos < 1400) {
        firstName.style.right = (firstNamePos) + "px";
        lastName.style.left = (lastNamePos) + "px";
    }
    
})

// navbar sticking to the top when scrolling
window.addEventListener('scroll', stickyNavbar);

function stickyNavbar() {
    
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        // navbar.style.top = window.pageYOffset;
    } else {
        navbar.classList.remove("sticky");
    }
}

function myMove() {
    let id = null;
    let pos = pageX;
    clearInterval(id);
    id = setInterval(frame, 5);
    
    function frame() {
        console.log("===inside frame===")
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            firstName.style.left = pos + "px";
        }
    }
}