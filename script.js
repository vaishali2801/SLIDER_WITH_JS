
// Create an array to store all image paths
const images = [
    "./images/img1.avif",
    "./images/img2.avif",
    "./images/img3.jpg",
    "./images/img4.avif",
    "./images/img5.jpg",
    "./images/img6.avif",
    "./images/img7.jpg",
    "./images/img8.avif",
    "./images/img9.jpg",
    "./images/img10.jpg",
    "./images/img11.jpg",
    "./images/img12.jpg",
    "./images/img13.jpg"
]
// Variable to track the current image index
let index = 0;

// Get the image element from HTML using its ID
let img = document.getElementById("slide");

// Set the first image when the page loads
img.src = images[index];


// Function to show the previous image
const prevClick = () => {
    index--;
    // If index goes below 0, move to the last image
    if(index < 0){
        index = images.length-1;
    }
    // Update the image source
    img.src = images[index];
}

setInterval(
    // Function to show the next image
    nextClick = () =>{
    index++;
    // If index reaches the end, reset to the first image
    if(index >= images.length - 1){
        index = 0;
    }
    // Update the image source
    img.src = images[index];
},10000)
