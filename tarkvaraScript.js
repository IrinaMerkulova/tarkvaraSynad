// Эстонские и русские слова
const synad = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel',
    'andmebaasi skeem', 'standart', 'tsükkel', 'andmetöötlus',
    'andmestruktuur', 'arenduskeskkond', 'projektihalduse tööriist',
    'kavandamine', 'iteratsioon', 'parandus', 'parandamine',
    'koskmudel', 'agiilne mudel', 'spiraalne mudel', 'inkrementaalne mudel',
    'nõudmised', 'realiseerimine', 'testimine', 'integreerimine', 'kasutamine',
    'hooldus', 'eelised', 'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const veneSynad = [
    'проектирование', 'алгоритм', 'дизайн', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных', 'структура данных',
    'среда разработки', 'инструмент управления проектом', 'проектирование', 'итерация',
    'исправление', 'починка', 'модель COS', 'гибкая модель', 'спиральная модель',
    'инкрементальная модель', 'требования', 'реализация', 'тестирование', 'интеграция',
    'использование', 'обслуживание', 'преимущества', 'недостатки', 'жизненный цикл',
    'разработка', 'валидация'
];

// Функция для выбора случайного слова на заданном языке
function randomSyna(language = 'et') {
    const words = language === 'et' ? synad : veneSynad;
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];

    document.getElementById("random-syna").innerText = selectedWord;
    return selectedWord;
}

// Функция для проверки правильности перевода
function kontrolliSyna(language = 'et') {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
    const currentWord = document.getElementById("random-syna").innerText;

    let correctAnswer = '';

    if (language === 'et') {
        // Эстонский -> Русский
        correctAnswer = veneSynad[synad.indexOf(currentWord)];
    } else {
        // Русский -> Эстонский
        correctAnswer = synad[veneSynad.indexOf(currentWord)];
    }

    const resultMessage = userInput === correctAnswer.toLowerCase()
        ? "Õige vastus!"
        : `Vale vastus! Õige vastus on: ${correctAnswer}`;

    document.getElementById("vastus").innerText = resultMessage;
}

// Функция для отображения описания выбранного слова
function showDescription() {
    const descriptions = {
        "andmetöötlussüsteem": "riistvarast, tarkvarast ja inimestest koosnev süsteem andmete muutmiseks kasutatavaks informatsiooniks",
        "draiver": "utiliitprogramm, mis teeb lisaseadmed operatsioonisüsteemile kättesaadavaks ja kasutatavaks",
        "rakendustarkvara": "programmid, millega saab inimene arvutis midagi kasulikku teha",
        "BIOS": "osa süsteemist, mis on vajalik sisendi ja väljundi jaoks",
        "systarkvara": "kõik programmid, mis tagavad, et arvuti ja tema lisaseadmed suudaksid koos funktsioneerida",
        "Riistvara": "on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid, nagu arvuti komponendid.",
        "Püsivara": "talitluslikult põhimälust sõltumatul viisil püsimällu salvestatud käsu- ja andmekogum.",
        "Operatsioonisüsteem": "tähtsaim süsteemitarkvara, mis juhib arvuti tööd ja haldab riistvararessursse.",
        "Rakendustarkvara": "otseselt kasutaja eesmärkide täitmiseks loodud tarkvara.",
        "Süsteemikonfiguratsioonifailid": "andmed, mis on vajalikud arvutisüsteemi toimimiseks.",
        "Kasutajaandmed": "spetsiifilised rakendusele, mida kasutaja jaoks salvestatakse."
    };

    const selectedWord = document.getElementById("words").value;
    document.getElementById("description").innerText = descriptions[selectedWord] || "Kirjeldus puudub.";
}

// Запуск случайного слова на эстонском языке при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    randomSyna(); // по умолчанию показываем случайное слово на эстонском
});
