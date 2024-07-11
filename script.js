const containerDiv = document.querySelector(".container");
const changeGridDimensionBtn = document.querySelector(".gridDimensionBtn");

//creates and populates containDiv with child divs with their width and heights provided by the user
function createDivs(numDivs) {

    containerDiv.innerHTML = '';
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



containerDiv.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('grid-item')) {
        // Generate random RGB values
        let r = Math.floor(Math.random() * 256); // Random integer from 0 to 255
        let g = Math.floor(Math.random() * 256); // Random integer from 0 to 255
        let b = Math.floor(Math.random() * 256); // Random integer from 0 to 255


        // Construct RGB color string
        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        
        // Apply background color
        event.target.style.backgroundColor = rgbColor;
    }
});
createDivs(16);
changeGridDimensionBtn.addEventListener("click", () => {
    // Get user input for rows and columns
    const rows = parseInt(prompt('Enter grid dimension: '));
    createDivs(rows);


    
})
