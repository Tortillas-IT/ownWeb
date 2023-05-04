function darkLight() {
    moon = document.getElementById("moon")
    sun = document.getElementById("sun")
    if (sun.style.display == 'block') {
        sun.style.display = 'none'
        moon.style.display = 'block'
    }
    else {
        sun.style.display = 'block'
        moon.style.display = 'none'
        
    }
}