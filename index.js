function darkLight() {
    moon = document.getElementById("moon")
    sun = document.getElementById("sun")
    let NumImg
    if (sun.style.display == 'block') {
        Img = document.getElementsByClassName("icons-dark");
        sun.style.display = 'none'
        moon.style.display = 'block'
        NumImg=Img.length
        for(let i=0;i<NumImg;i++){
            Img[0].className = "icons-white"
        }
        document.getElementsByClassName("dark")[0].className="white"
    }
    else {
        Img = document.getElementsByClassName("icons-white");
        sun.style.display = 'block'
        moon.style.display = 'none'
        NumImg=Img.length
        for(let i=0;i<NumImg;i++){
            Img[0].className = "icons-dark"
        }
        document.getElementsByClassName("white")[0].className="dark"
    }
}