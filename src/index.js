console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detimg = document.querySelector(".details-container");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
// const sounds = document.querySelectorAll("audio") //sound
// var element = document.getElementById('audio');
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function () {
        console.log("event - click on", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    });
}

function showDetails() {
    mainClass.classList.remove("hidden");
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT);
    }, 1)
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}

detimg.addEventListener("click", function () {
    console.log("event - click on", detimg);
    setDetails(detimg);
});


function playSound() {
    document.getElementById(ship_sound).play();
  };
function playSound(in_mountains) {
    document.getElementById(in_mountains).play();
  };
  function playSound(calm_surf) {
    document.getElementById(calm_surf).play();
  };
  function playSound(surf_noise) {
    document.getElementById(surf_noise).play();
  };
  function playSound(sea_sunset) {
    document.getElementById(sea_sunset).play();
  };
  function playSound(find_me) {
    document.getElementById(find_me).play();
  };


  // function OnLoad() {
//     //On Load Of Image
//     document.getElementById('myAudio').play();
// }







// function StartOrStop(audioFile) {
//     var audio = document.getElementById("myAudio");
//     if (!audio.src || audio.src !== audioFile) audio.src = audioFile;
//     if (audio.paused == false)
//         audio.pause();
//     else
//         audio.play();
//     }




// function playMySong(){
//     if(audio.paused){
//         audio.play()
//     } else {
//         audio.pause()
//     }
// }
