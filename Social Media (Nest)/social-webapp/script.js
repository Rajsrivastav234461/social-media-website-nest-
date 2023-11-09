


var settingsmenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}
if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}



// form access for website
function abc1() {
    var username = document.getElementById("raj").value;
    var pass = document.getElementById("raj1").value;
    if (username === 'itz_rjsrv231' && pass === '123456') {
        window.location.href = "index.html"; // Use window.location.href to navigate to the next page.
    } else {
        alert("Wrong entry");
    }
}


// ------------slideshow for advertisement-------------- 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("sidebar-ads");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
    // Change image every 2 seconds (2000 milliseconds)
}





// Function to open the viewer with content
const stories = document.querySelectorAll('.story');
const storyViewer = document.querySelector('.story-viewer');
const viewerImage = document.getElementById('viewer-image');
const viewerText = document.getElementById('viewer-text');
const closeButton = document.getElementById('close-button');

stories.forEach((story, index) => {
    story.addEventListener('click', () => {
        viewerImage.src = story.querySelector('img').src;
        viewerText.textContent = story.querySelector('p').textContent;
        storyViewer.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    storyViewer.style.display = 'none';
});



// Define an array of image sources
const imageSources = ["surya.webp", "advertisement1.png", "raj3.jpg"];

// Function to load and display new images
function loadMoreImages() {
    const imageContainer = document.getElementById("image-container");
    for (let i = 0; i < imageSources.length; i++) {
        const image = document.createElement("img");
        image.src = imageSources[i];
        imageContainer.appendChild(image);
    }
}

// Attach a click event listener to the "Load More" button
const loadMoreButton = document.getElementById("load-more-button");
loadMoreButton.addEventListener("click", loadMoreImages);

function loadMoreImages() {
    const imageContainer = document.getElementById("image-container");
    for (let i = 0; i < imageSources.length; i++) {
        const image = document.createElement("img");
        image.src = imageSources[i];
        image.className = "loaded-image"; // Add the loaded-image class
        imageContainer.appendChild(image);
    }
}


function abc() {
    window.alert("Your response is submitted");
}
