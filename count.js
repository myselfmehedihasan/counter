let sum = 0;
const firstElement = document.getElementById("count");

function clickMe() {
    console.log("hello");
    sum += 1;
    firstElement.innerText = sum;
};


const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click",function(){
    if (sum >0){
        sum -= 1;
        firstElement.innerText = sum;

    }
    
});

// Add reset functionality
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    sum = 0; // Reset sum to 0
    firstElement.innerText = sum; // Update the displayed value
});
