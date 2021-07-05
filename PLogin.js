function Go() {
    C = "Caput_Draconis"
    if (document.getElementById("Password").value== C) {
        window.location = "Professors.html"
    } else {
       document.getElementById("no").innerHTML= "You are not permitted to view this page"
    }
}