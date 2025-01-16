// Funkcja zmieniająca tło bloku prawego
function zmienTlo(event) {
    const kolor = event.target.style.backgroundColor;
    document.getElementById('prawy').style.backgroundColor = kolor;
}

// Funkcja zmieniająca kolor czcionki bloku prawego
function zmienKolorCzcionki(event) {
    const kolor = event.target.value;
    document.getElementById('prawy').style.color = kolor;
}

// Funkcja zmieniająca rozmiar czcionki bloku prawego
function zmienRozmiarCzcionki(event) {
    const rozmiar = event.target.value;
    document.getElementById('prawy').style.fontSize = rozmiar;
}

// Funkcja przełączająca obramowanie obrazu
function przelaczObramowanie() {
    const obraz = document.getElementById('zdjecie');
    if (document.getElementById('ramka').checked) {
        obraz.style.border = '1px solid white';
    } else {
        obraz.style.border = 'none';
    }
}

// Funkcja zmieniająca typ punktora listy
function zmienTypPunktora(event) {
    const typ = event.target.value;
    document.getElementById('listaElementow').style.listStyleType = typ;
}

// Dodanie nasłuchiwaczy zdarzeń do przycisków zmieniających tło
document.querySelectorAll('.kolor').forEach(button => {
    button.addEventListener('click', zmienTlo);
});

// Dodanie nasłuchiwacza zdarzeń do listy rozwijalnej zmieniającej kolor czcionki
document.getElementById('kolorCzcionki').addEventListener('change', zmienKolorCzcionki);

// Dodanie nasłuchiwacza zdarzeń do pola edycyjnego zmieniającego rozmiar czcionki
document.getElementById('rozmiarCzcionki').addEventListener('keyup', zmienRozmiarCzcionki);

// Dodanie nasłuchiwacza zdarzeń do pola checkbox przełączającego obramowanie obrazu
document.getElementById('ramka').addEventListener('change', przelaczObramowanie);

// Dodanie nasłuchiwaczy zdarzeń do pól radio zmieniających typ punktora listy
document.querySelectorAll('.typPunktora').forEach(radio => {
    radio.addEventListener('change', zmienTypPunktora);
});