let fahrenheit = document.querySelector("#gauge-f");
let fahrenheitLabel = document.querySelector(".fahrenheit-input");
fahrenheit.addEventListener("input", changeCelsius);

let celsius = document.querySelector("#gauge-c");
let celsiusLabel = document.querySelector(".celsius-input");
celsius.addEventListener("input", changeFahrenheit);

document
    .querySelector(".fahrenheit-input")
    .addEventListener("input", updateFahrenheit);
document
    .querySelector(".celsius-input")
    .addEventListener("input", updateCelsius);

// Convert Celsius to Fahrenheit and update the Fahrenheit Range Value
function changeFahrenheit() {
    fahrenheit.value = celsius.value * 9 / 5 + 32;
    updateLabels();
    updateBackground();
}

function changeCelsius() {
    celsius.value = ((fahrenheit.value - 32) * 5) / 9;
    updateLabels();
    updateBackground();
}

function updateLabels() {
    fahrenheitLabel.value = `${fahrenheit.value}`;
    celsiusLabel.value = `${celsius.value}`;
}

function updateFahrenheit() {
    fahrenheit.value = document.querySelector(".fahrenheit-input").value;
    changeCelsius();
}

function updateCelsius() {
    celsius.value = document.querySelector(".celsius-input").value;
    changeFahrenheit();
}

function updateBackground() {
    const source = document.querySelector("#videoPlayer");
    const nice = "assets/videos/nice.mp4";
    const cold = "assets/videos/cold.mp4";
    const hot = "assets/videos/hot.mp4";

    if (fahrenheitLabel.value < 50 &&
        !(source.src.includes('cold.mp4'))) {
        source.setAttribute("src", cold);
    } else if (
        fahrenheitLabel.value >= 50 &&
        fahrenheitLabel.value <= 100 &&
        !source.src.includes("nice.mp4")
    ) {
        source.setAttribute("src", nice);
    } else if (fahrenheitLabel.value > 100
        && !source.src.includes("hot.mp4")) {
        source.setAttribute("src", hot);
    }
}