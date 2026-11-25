const existingElements = document.querySelectorAll(".showInputs");
const values = Array.from(existingElements).map(p => Number(p.innerText.trim()));

const add = document.getElementById("add");
const inputs = document.getElementById("inputs");
const container = document.querySelector(".row.mt-3" );

const sort = document.getElementById("sort");
const totalValue = document.querySelector(".total");
const average = document.querySelector(".average");
const highest = document.querySelector(".highest");
const lowest = document.querySelector(".lowest");
const passed = document.querySelector(".passed");


let sum = 0;

function updatesValues(){
    for(const num of values){
       sum += num;
    }
    totalValue.textContent = sum;
}
updatesValues();

function updateAverage(){
    const finalAverage = sum / values.length;

    average.textContent = finalAverage;
}
updateAverage();

function updateHighest(){
    values.sort((a,b) => a-b);
    const highestValues = values.at(-1);
    highest.textContent = highestValues;
}
updateHighest();

function updateLowest(){
    values.sort((a,b) => a-b);
    const lowestValue = values[0];
    lowest.textContent = lowestValue;
}
updateLowest();

let below35 = [];

function updatesPassed(){
    below35 = values.filter(num => num < 35);
    passed.textContent = below35.length;
}
updatesPassed();

sort.addEventListener("click", () => {
    values.sort((a,b) => a-b);

    container.innerHTML = values.map(val => `<p class="showInputs px-2 py-1">${val}</p>`).join("");
})


add.addEventListener("click", function(event){
    event.preventDefault();

    const inputValue = inputs.value.trim();

    if(inputValue !== ''){
        values.push(inputValue);

        const newMark = document.createElement("p");
        newMark.className = 'showInputs px-2 py-1';
        newMark.innerText = inputValue;

        container.appendChild(newMark);
    }
    sum += Number(inputValue);
    totalValue.textContent = sum;

    finalAverage = sum / values.length;
    average.textContent = finalAverage;

    values.sort((a,b) => a-b);
    highestValues = values.at(-1);
    highest.textContent = highestValues;

    lowestValue = values[0];
    lowest.textContent = lowestValue;

    below35 = values.filter(num => num < 35);
    passed.textContent = below35.length;

})




