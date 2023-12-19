let dinheiros = document.getElementById("dinheiros")
const ihi = new Audio("assets/ihi.wav")
const ihi2 = new Audio("assets/ihi2.wav")
const sede = new Audio("assets/sede.wav")
const confuso = new Audio("assets/confuso.wav")

let riqueman = document.getElementById("riqueman")



function randomsfx() {
    return Math.floor(Math.random() * 3)
}


function addScore() {
    let o = localStorage.getItem("score");
    o = parseInt(o, 10) || 0;
    let n = o + 1 
    localStorage.setItem("score", n.toString())
    dinheiros.innerHTML = localStorage.getItem("score")

    try {
        if (isNaN(localStorage.getItem("score")) == null) throw "hell" 
    }

    catch (err) {
        console.log(err)
    }
}

riqueman.addEventListener("click", function() {
    addScore()

    switch(randomsfx()) {

        case 0:
            ihi.play()
            break
        case 1: 
            ihi2.play()
            break
        case 2:
            sede.play()
            break
        case 3:
            confuso.play()
            break
    }

    const maxX = window.innerWidth - riqueman.clientWidth;
    const maxY = window.innerHeight - riqueman.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    riqueman.style.top = `${randomY}px`;
    riqueman.style.left = `${randomX}px`;

}
)
dinheiros.innerHTML = localStorage.getItem("score")
