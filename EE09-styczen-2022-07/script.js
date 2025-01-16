// Funkcja obsługująca kliknięcie na zdjęciach w bloku lewym
function obslugaKliknieciaZdjecia(event) {
    const glownyObraz = document.querySelector('#glowny img');
    glownyObraz.src = event.target.src;
    glownyObraz.alt = event.target.alt;
}

// Funkcja przełączająca ikonę
function przelaczIkone() {
    const ikona = document.querySelector('#prawy img');
    if (ikona.src.includes('icon-off.png')) {
        ikona.src = 'icon-on.png';
    } else {
        ikona.src = 'icon-off.png';
    }
}

// Dodanie nasłuchiwaczy zdarzeń do zdjęć w bloku lewym
document.querySelectorAll('#lewy img').forEach(img => {
    img.addEventListener('click', obslugaKliknieciaZdjecia);
});

// Dodanie nasłuchiwacza zdarzeń do ikony w bloku prawym
document.querySelector('#prawy img').addEventListener('click', przelaczIkone);