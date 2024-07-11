const containerDiv = document.querySelector(".container");

//creates and populates containDiv with child divs with their width and heights provided by the user
function createDivs(numDivs) {
    for (let i = 1; i <= numDivs; i++) {
        // Create a new div element
        const newDiv = document.createElement('div');

        // Add a class to the new div 
        newDiv.classList.add('grid-item');
        newDiv.style.backgroundColor = "blue";

        // Append the new div to the container
        containerDiv.appendChild(newDiv);
    }
}

// Create 16 divs
createDivs(16);
