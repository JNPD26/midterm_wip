let availableKeywords = [
    'Black-knobbed map turtle',
    'Diamondback terrapins',
    'Black pond turtle',
    'Mississippi map turtle',
    'Nicaraguan slider',
    'Pig-nosed turtle',
    'Northern red-bellied cooter',
    'Rio Grande cooter',
    'Chinese pond turtle',
    'Yellow-spotted Amazon river turtle',
    'Sulcata tortoise',
    'Leopard tortoise',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

// ---------------------------------------------------------------
let allTurtle = [{
    name: 'Black-knobbed map turtle',
    price: '3500'
}, {
    name: 'Diamondback terrapins',
    price: '8000'
}]

const containerAllproduct = document.getElementById("container");
let resultcard = [];

document.getElementById("inputBoxSearch").onclick = function () { inputBoxSearch() };

function inputBoxSearch() {
    document.getElementById("input-box").value;
}

function showTurtle(allTurtle) {
    const card = allTurtle.map((i) => {
        console.log(card);
        return <div>{i.value}+{i.name}</div>
    })
}

showTurtle(allTurtle);
// if()

