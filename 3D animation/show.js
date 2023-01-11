const bioContent = document.querySelector('.content');
// const bioContent = $(".content");

window.addEventListener("scroll", function () {
    console.log(bioContent.getBoundingClientRect().top)
    if (bioContent.getBoundingClientRect().top < window.innerHeight) {
        bioContent.classList.add("show");
    } else {
        bioContent.classList.remove('show');
    }
})

// window.addEventListener("scroll", function () {
//     let relativeTop = 
//     console.log(bioContent.offset().top, window.innerHeight)
//     if (bioContent.offset().top < window.innerHeight) {
//         bioContent.addClass("show")
        
//     } else {
//         bioContent.removeClass("show");
//     }
// })