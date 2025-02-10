const synadET = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel',
    'andmebaasi skeem', 'standart', 'tsükkel', 'andmetöötlus', 'andmestruktuur',
    'arenduskeskkond', 'projektihalduse tööriist', 'kavandamine', 'iteratsioon', 'parandus',
    'parandamine', 'koskmudel', 'agiilne mudel', 'spiraalne mudel', 'inkrementaalne mudel',
    'nõudmised', 'realiseerimine', 'testimine', 'integreerimine', 'kasutamine',
    'hooldus', 'eelised', 'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const synadRU = [
    'выполнение', 'алгоритм', 'план', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных', 'структура данных',
    'среда разработки', 'инструмент управления проектами', 'проектирование', 'итерация', 'исправление',
    'улучшение', 'каскадная модель', 'гибкая модель', 'спиральная модель', 'инкрементальная модель',
    'требования', 'реализация', 'тестирование', 'интеграция', 'использование',
    'обслуживание', 'преимущества', 'недостатки', 'жизненный цикл', 'разработка', 'валидация'
];

let currentWordET = '';
let currentWordRU = '';

function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synadET.length);
    currentWordET = synadET[juhuslikSyna];
    document.getElementById("random-syna-et").innerHTML = currentWordET;
    document.getElementById("kontroll-et").value = "";
    document.getElementById("vastus-et").innerText = "";
}

function randomSynaRU() {
    const juhuslikSyna = Math.floor(Math.random() * synadRU.length);
    currentWordRU = synadRU[juhuslikSyna];
    document.getElementById("random-syna-ru").innerHTML = currentWordRU;
    document.getElementById("kontroll-ru").value = "";
    document.getElementById("vastus-ru").innerText = "";
}

function kontrolliTolgeET() {
    const userInput = document.getElementById("kontroll-et").value.trim().toLowerCase();
    const correctAnswer = synadRU[synadET.indexOf(currentWordET)].toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById("vastus-et").innerText = "Õige! ✅";
        document.getElementById("vastus-et").style.color = "green";
    } else {
        document.getElementById("vastus-et").innerText = "Vale! ❌ Õige vastus: " + correctAnswer;
        document.getElementById("vastus-et").style.color = "red";
    }
}

function kontrolliTolgeRU() {
    const userInput = document.getElementById("kontroll-ru").value.trim().toLowerCase();
    const correctAnswer = synadET[synadRU.indexOf(currentWordRU)].toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById("vastus-ru").innerText = "Õige! ✅";
        document.getElementById("vastus-ru").style.color = "green";
    } else {
        document.getElementById("vastus-ru").innerText = "Vale! ❌ Õige vastus: " + correctAnswer;
        document.getElementById("vastus-ru").style.color = "red";
    }
}
