const accesoriosSinStock = document.getElementById("dom");
const accesorios = ["aromatizer", ", valve-caps", ", vacuum-cleaner"];

accesorios.forEach((item) => {
    const li = document.createElement ("dom");
    li.textContent = item;
    accesoriosSinStock.appendChild(li);
});