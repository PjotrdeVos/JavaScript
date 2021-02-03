pics = document.getElementById("pics");
NewElement = document.createElement("div");
NewElement.className = "aappicture";
pics.appendChild(NewElement);



pics = document.getElementById("pics")

createPicsHolders();
CreateAapFoto();

function createPicsHolders() {
    for (var i = 0; i < 8; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "aappicture";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);

    }
}

function CreateAapFoto() {
    pictureHolder = document.getElementsByClassName("aappicture");
    for (var i = 0; i < pictureHolder.length; i++) {
        leukste = document.createElement("div");
        leukste.className = "leukste"
        leukste.id = "favoriet" +(i+1);
       aapplaatje = document.createElement("img");
       aapplaatje.src = "foto/aap" + (i+1) + ".jpg" ;
       aapplaatje.id = (i+1);
       aapplaatje.addEventListener("click",function () {
           maakFavoriet(this.id)
       });
       pictureHolder[i].appendChild(aapplaatje);
       pictureHolder[i].appendChild(leukste)

    }
}

function maakFavoriet(id) {
    console.log("Maak mijn favoriet! Het gaat om aap..." + id );
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    leukste = document.getElementById("favoriet" + id);
    leukste.style.backgroundImage = "url('foto/heart.jpg')";
}