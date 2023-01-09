//declaring variables used for animation
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const fullname = document.querySelectorAll('.fullname');

window.addEventListener('mousemove', (e) => {
    console.log(e.pageX);
})

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
container.addEventListener('mouseleave', (e) => {
    title.style.transition = "all 0.5s ease";
    title.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // fullname[0].style.transition = "all 0.5s ease out";
    // fullname[1].style.transition = "all 0.5s ease out";
})

//On page load animation
window.addEventListener('scroll', (e) => {
    fullname[0].style.transform = "translateX(-1000px)"
    fullname[1].style.transform = "translateX(1000px)"
})