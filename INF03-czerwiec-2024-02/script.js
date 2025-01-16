const odpowiedzi = [
    "Świetnie!",
    "Kto gra główną rolę?",
    "Lubisz filmy Tego reżysera?",
    "Będę 10 minut wcześniej",
    "Może kupimy sobie popcorn?",
    "Ja wolę Colę",
    "Zaproszę jeszcze Grześka",
    "Tydzień temu też byłem w kinie na Diunie",
    "Ja funduję bilety"
];

function wyslanieWiadomosci() {
    const wprowadzanieWiadomosci = document.getElementById('wprowadzanieWiadomosci');
    const zawartoscWiadomosci = wprowadzanieWiadomosci.value;
    const czat = document.getElementById('czat');
    const nowaWiadomosc = document.createElement('div');
    nowaWiadomosc.classList.add('wiadomosc', 'jolanta');
    nowaWiadomosc.innerHTML = `<img src="Jolka.jpg" alt="Jolanta Nowak"><p> ${zawartoscWiadomosci} </p>`;
    czat.appendChild(nowaWiadomosc);
    nowaWiadomosc.scrollIntoView();
    wprowadzanieWiadomosci.value = '';
}

function generowanieLosowejWiadomosci() {
    const losowyIndex = Math.floor(Math.random() * odpowiedzi.length);
    const textOdpowiedzi = odpowiedzi[losowyIndex];
    const czat = document.getElementById('czat');
    const nowaWiadomosc = document.createElement('div');
    nowaWiadomosc.classList.add('wiadomosc', 'krzysztof');
    nowaWiadomosc.innerHTML = `<img src="Krzysiek.jpg" alt="Krzysztof Łukasiński"><p> ${textOdpowiedzi} </p>`;
    czat.appendChild(nowaWiadomosc);
    nowaWiadomosc.scrollIntoView();
}

document.getElementById('wyslijWiadomosc').addEventListener('click', wyslanieWiadomosci);
document.getElementById('generowanieWiadomosci').addEventListener('click', generowanieLosowejWiadomosci);