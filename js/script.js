const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");

    const images = await res.json();

    selectRandomImage(images); // The images argument here comes from the res fetch URL values. 

    //console.log(images);
};



const selectRandomImage = function (images) { // The images value, comes from whatever key value properties where passed onto selectRandomImage.
    const randomIndex = Math.floor(Math.random() * images.length); // The math.floor function round the interger to the nearest whole number.

    const randomImage = images[randomIndex]; // randomIndex has an integer value, images is an array of multiple images, by putting randomIndex in the brackets we a getting on random image from that array.

    console.log(randomImage);
    displayImage(randomImage); // This line of code is the link that will allow the function displayImage to take the argument and extract the key values that are containned inside it.
};

const displayImage = function(randomImage) {
    const author = randomImage.author // remember to use dote notation to access specific informtation
    const imageAddress = randomImage.download_url // Again here we are using dot notation to extract a specific key-value of the randomImage

    authorSpan.innerText = author; // Here we are beginning to modify the HTML 
    img.src = imageAddress; // this is linking the random images url, to the image that will be displayed on the website.

    imgDiv.classList.remove("hide");

};

button.addEventListener("click", function () {
    getImage();
});
