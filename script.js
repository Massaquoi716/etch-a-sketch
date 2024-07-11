const containerDiv = document.querySelector(".container");

//creates and populates containDiv with child divs with their width and heights provided by the user
function createDivs(numDivs) {
    let grid = numDivs * numDivs;
    for (let i = 1; i <= grid; i++) {
        // Create a new div element
        const newDiv = document.createElement('div');

        // Add a class to the new div 
        newDiv.classList.add('grid-item');
        

        // Append the new div to the container
        containerDiv.appendChild(newDiv);
    }
}

// Create 16 divs
createDivs(16);

containerDiv.addEventListener("mouseover", (event) => {
        // Generate random RGB values
    let r = Math.floor(Math.random() * 256); // Random integer from 0 to 255
    let g = Math.floor(Math.random() * 256); // Random integer from 0 to 255
    let b = Math.floor(Math.random() * 256); // Random integer from 0 to 255
    
     // Construct RGB color string
    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    event.target.style.backgroundColor = rgbColor;
})
