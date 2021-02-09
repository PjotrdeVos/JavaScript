pictures = document.getElementById("pictures");
createPictureHolders();
createDriverPictures();

function createPictureHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "driverPicture";
        pictureHolder.id = "picture-holder-" + i;
        pictures.appendChild(pictureHolder);
    }
}

function createDriverPictures() {
    pictureHolders = document.getElementsByClassName("driverPicture");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i + 1);
        driverFoto = document.createElement("img");
        driverFoto.src = "foto/aap" + (i + 1) + ".jpg";
        driverFoto.id = (i + 1);
        driverFoto.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(driverFoto);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('foto/heart.jpg')";
}

