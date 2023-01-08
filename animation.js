function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    document.getElementById("animateButton").style.display = "none";
    console.log("===inside move===")
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    
    function frame() {
        console.log("===inside frame===")
        if (pos == 350) {
            clearInterval(id);
            document.getElementById("animateButton").style.display = "inline";
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
// document.getElementById("demo").innerHTML = document.documentElement.innerHTML;

function newDoc() {
    window.location.assign("https://www.github.com/tnvzaman")
  }