//declaring variables used for animation
const animate3D = document.querySelector('.animate3D');
const title = document.querySelector('.title');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const fullname = document.querySelectorAll('.fullname');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector("[data-navigation]");
var sticky = navbar.offsetTop;

// window.addEventListener('mousemove', (e) => {
//     console.log(e.pageX, e.pageY);
// })

//Moving Animation Event
animate3D.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // firstName.style.transform = "translateZ(150px)";
    // lastName.style.transform = "translateZ(150px)";
    fullname[0].style.transform = "translateZ(150px)";
    fullname[1].style.transform = "translateZ(150px)";
})

//Animate in
animate3D.addEventListener('mouseenter', (e) => {
    title.style.transition = "none";
    // fullname[0].style.transition = "none";
    // fullname[1].style.transition = "none";
})

//Animate out
animate3D.addEventListener('mouseleave', function() {
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
let isHome = false;

function stickyNavbar() {
    const listChild = document.createElement("a")
    listChild.setAttribute("href", "#home")
    listChild.innerHTML = "Home"
    const homeList = document.createElement("li")
    homeList.appendChild(listChild)
    
    console.log(isHome);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        if (!isHome) {
            navList.insertBefore(homeList, navList.children[0])
            isHome = true;
        }
        navbar.classList.add("navback");
        // navbar.style.top = window.pageYOffset;
    } else {
        if (isHome) {
            navList.removeChild(navList.children[0])
            isHome = false;
        }
        navbar.classList.remove("sticky");
        navbar.classList.remove("navback");

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