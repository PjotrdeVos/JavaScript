var MijnAuto = {
    kleur: "Geel",
    merk: "Ford",


    toet: function () {
        console.log("Toet!")
    }
}
MijnAuto.toet();




var Plaatjes =  [1,2,3,4,5,6,7,8,9];
var SlideHolder = document.getElementById("SlideHolder");
var teller = 0;
SlideHolder.style.backgroundImage = "url('Plaatjes/Aap1.jpg')";

SlideHolder.addEventListener("click", function () {
    SlideHolder.style.backgroundImage = "url('Plaatjes/Aap" +getAap() + ".jpg')";
});

function getAap() {
    if (teller >= Plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller)
    return(teller)
}




