const textbox = document.getElementById("textbox");
const mybutton = document.getElementById("mybutton");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value);

    if (toFahrenheit.checked) {
        let fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
    } 
    else if (toCelsius.checked) {
        let celsius = (temp - 32) * 5 / 9;
        result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C`;
    } 
    else {
        result.textContent = "Select a conversion option.";
    }
}
