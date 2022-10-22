console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detimg = document.querySelector(".details-container");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
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
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}

detimg.addEventListener("click", function () {
    console.log("event - click on", detimg);
    setDetails(detimg);
});
