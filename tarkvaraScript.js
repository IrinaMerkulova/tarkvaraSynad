// esimese masiivi loomine
const synad = [
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihalduse tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'parandamine',
    'koskmudel',
    'agiilne mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'integreerimine',
    'kasutamine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'
];

// vene keelde tõlgitud sõnade massiivi
const synadvene = [
    'реализация',
    'алгоритм',
    'Проект',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'исправление',
    'космодель',
    'гибкая модель',
    'спиральная модель',
    'инкрементальная модель',
    'требования',
    'реализация',
    'тестирование',
    'интеграция',
    'использование',
    'обслуживание',
    'преимущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'валидация'
];
let praeguneEestiIndeks = null;
let praeguseVeneIndex = null;

// Juhusliku eestikeelse sõna genereerimine
function randomEesti() {
    praeguneEestiIndeks = Math.floor(Math.random() * synad.length);
    document.getElementById("eesti-syna").textContent = synad[praeguneEestiIndeks];
    document.getElementById("eesti-input").value = "";
    document.getElementById("eesti-tulemus").textContent = "";
}

// Tõlke kontrollimine eesti keelest vene keelde
function KontrolligeEestiKeele() {
    if (praeguneEestiIndeks === null) return;

    const kasutajaInput = document.getElementById("eesti-input").value.trim().toLowerCase();
    const korrektneTolge = synadvene[praeguneEestiIndeks].toLowerCase();

    if (kasutajaInput === "") {
        document.getElementById("eesti-tulemus").textContent = "";
        return;
    }

    if (kasutajaInput === korrektneTolge) {
        document.getElementById("eesti-tulemus").textContent = "Õige!";
        document.getElementById("eesti-tulemus").className = "correct";
    } else {
        document.getElementById("eesti-tulemus").textContent = "Vale! Õige tõlge: " + korrektneTolge;
        document.getElementById("eesti-tulemus").className = "incorrect";
    }
}

// Juhuslik vene keele sõnade genereerimine
function randomVene() {
    praeguseVeneIndex = Math.floor(Math.random() * synadvene.length);
    document.getElementById("vene-syna").textContent = synadvene[praeguseVeneIndex];
    document.getElementById("vene-input").value = "";
    document.getElementById("vene-tulemus").textContent = "";
}

// Tõlke kontrollimine vene keelest eesti keelde
function KontrolligeVeneKeele() {
    if (praeguseVeneIndex === null) return;

    const kasutajaInput = document.getElementById("vene-input").value.trim().toLowerCase();
    const korrektneTolge = synad[praeguseVeneIndex].toLowerCase();

    if (kasutajaInput === "") {
        document.getElementById("vene-tulemus").textContent = "";
        return;
    }

    if (kasutajaInput === korrektneTolge) {
        document.getElementById("vene-tulemus").textContent = "Õige!";
        document.getElementById("vene-tulemus").className = "correct";
    } else {
        document.getElementById("vene-tulemus").textContent = "Vale! Õige tõlge: " + korrektneTolge;
        document.getElementById("vene-tulemus").className = "incorrect";
    }
}