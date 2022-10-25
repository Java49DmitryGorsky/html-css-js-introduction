console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
// const detimg = document.querySelector(".details-container");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const audio = document.querySelector(".audio-melody");
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    pauseAudio(1);
    audio.setAttribute("src", anchor.getAttribute('data-details-audio'));
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function () {
        console.log("event - click on", anchors[i]);
        setDetails(anchors[i]);
        showDetails();
    });
}

function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT);
    }, 1)
    playAudio();
    pauseAudio(10000);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
    pauseAudio(1);
}

// detimg.addEventListener("click", function () {
//     console.log("event - click on", detimg);
//     setDetails(detimg);
// });

function playAudio() {
    setTimeout(function () {
        audio.play();
        // audio.loop = true;
    }, 1);
}

function pauseAudio(msecs) {
    setTimeout(function () {
        audio.pause();
    }, msecs);
}


// function playSound() {
//     document.getElementById(ship_sound).play();
//   };
// function playSound(in_mountains) {
//     document.getElementById(in_mountains).play();
//   };
//   function playSound(calm_surf) {
//     document.getElementById(calm_surf).play();
//   };
//   function playSound(surf_noise) {
//     document.getElementById(surf_noise).play();
//   };
//   function playSound(sea_sunset) {
//     document.getElementById(sea_sunset).play();
//   };
//   function playSound(find_me) {
//     document.getElementById(find_me).play();
//   };

