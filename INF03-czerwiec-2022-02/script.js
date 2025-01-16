let przyciskOblicz = document.getElementById("oblicz");

przyciskOblicz.addEventListener("click", () => {
    const rodzaj = parseInt(document.getElementById("rodzaj").value);
    const ile = parseFloat(document.getElementById("ile").value);
    const wynik = document.getElementById("wynik");
    let cena = 0;

    if (rodzaj == 1) {
        cena = ile * 4;
    } else if (rodzaj == 2) {
        cena = ile * 3.5;
    } else {
        cena = 0;
    }

    wynik.innerHTML = `koszt paliwa: ${cena} zł`;
});