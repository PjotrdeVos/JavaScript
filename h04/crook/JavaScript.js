var Ogen = [1,2,3];
var Neus = [1,2,3];
var Mond = [1,2,3];
var teller = 0;

var crook1 = document.getElementById("crook1");
crook1.style.backgroundImage = "url('crook/Ogen/Ogen1.png')";
var crook2 = document.getElementById("crook2");
crook2.style.backgroundImage = "url('crook/Neus/Neus1.png')";
var crook3 = document.getElementById("crook3");
crook3.style.backgroundImage = "url('crook/Mond/Mond1.png')";

crook1.addEventListener("click", function() {
    crook1.style.backgroundImage = "url('crook/Ogen/Ogen" + getCrookOgen() + ".png')";
});
crook2.addEventListener("click", function() {
    crook2.style.backgroundImage = "url('crook/Neus/Neus" + getCrookNeus() + ".png')";
});
crook3.addEventListener("click", function() {
    crook3.style.backgroundImage = "url('crook/Mond/Mond" + getCrookMond() + ".png')";
});

function getCrookOgen() {
    if (teller >= Ogen.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller)
    return(teller)
}

function getCrookNeus() {
    if (teller >= Neus.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller)
    return(teller)
}

function getCrookMond() {
    if (teller >= Mond.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller)
    return(teller)
}