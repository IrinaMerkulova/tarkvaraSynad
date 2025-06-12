const synad = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel',
    'andmebaasi skeem', 'standart', 'tsükkel', 'andmetöötlus', 'andmestruktuur',
    'arenduskeskkond', 'projektihalduse tööriist', 'kavandamine', 'iteratsioon',
    'parandus', 'parandamine', 'koskmudel', 'agiilne mudel', 'spiraalne mudel',
    'inkrementaalne mudel', 'nõudmised', 'realiseerimine', 'testimine',
    'integreerimine', 'kasutamine', 'hooldus', 'eelised', 'puudused',
    'elutsükkel', 'arendamine', 'valideerimine'
];

const venekeel = [
    'реализация', 'алгоритм', 'план', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных', 'структура данных',
    'среда разработки', 'инструмент управления проектами', 'планирование', 'итерация',
    'исправление', 'исправление', 'каскадная модель', 'гибкая модель', 'спиральная модель',
    'инкрементальная модель', 'требования', 'реализация', 'тестирование',
    'интеграция', 'использование', 'обслуживание', 'преимущества', 'недостатки',
    'жизненный цикл', 'разработка', 'валидация'
];

let aktiivneIndeks = -1;

function randomSyna() {
    aktiivneIndeks = Math.floor(Math.random() * synad.length);
    const syna = synad[aktiivneIndeks];
    document.getElementById("random-syna").innerText = syna;
    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").innerText = "";
}

function kontrolliSona() {
    const sisestus = document.getElementById("kontroll").value.trim().toLowerCase();
    if (aktiivneIndeks === -1) return;

    const oigeTolge = venekeel[aktiivneIndeks].toLowerCase();
    const vastusElem = document.getElementById("vastus");

    if (sisestus === oigeTolge) {
        vastusElem.innerText = "✅ Õige!";
        vastusElem.style.color = "green";
    } else {
        vastusElem.innerText = "❌ Vale! Õige vastus: " + oigeTolge;
        vastusElem.style.color = "red";
    }
}
