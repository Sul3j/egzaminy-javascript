console.log("dziala")

function zastosujEfekt() {
    const zdjecie = document.getElementById('pszczola');
    const efekty = document.querySelectorAll('.efekt');
    efekty.forEach((e) => {
        if (e.checked) {
            zdjecie.style.filter = e.value;
        }
    })
}

function kolor() {
    const zdjecie = document.getElementById('pomarancza');
    zdjecie.style.filter = "none";
}

function czarnoBialy() {
    const zdjecie = document.getElementById('pomarancza');
    zdjecie.style.filter = "grayscale(100%)";
}

function zastosujPrzezroczystosc() {
    const zdjecie = document.getElementById('owoce');
    const wartosc = document.getElementById('przezroczystosc');
    zdjecie.style.filter = `opacity(${wartosc.value}%)`
}

function zastosujJasnosc() {
    const zdjecie = document.getElementById('zolw');
    const wartosc = document.getElementById('jasnosc');
    zdjecie.style.filter = `brightness(${wartosc.value}%)`;
}