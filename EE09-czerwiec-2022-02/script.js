const generuj = document.getElementById('generuj');

generuj.addEventListener('click', () => {
    const wartosc_h = document.getElementById('wartosc').value;
    const komorki = document.querySelectorAll('.komorka');
    const nasycenie = [100, 80, 60, 40, 20];

    komorki.forEach((komorka, index) => {
        const wartosc_s = nasycenie[index];
        komorka.style.backgroundColor = `hsl(${wartosc_h}, ${wartosc_s}%, 50%)`;
    });
});