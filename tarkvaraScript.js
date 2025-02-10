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

const veneSynad = [
    'реализация',
    'алгоритм',
    'проектирование',
    'пользовательский интерфейс',
    'модель', 'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектом',
    'проектирование',
    'итерация',
    'коррекция',
    'исправление',
    'модель водопада',
    'агильная модель',
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

// Функция отображения случайного слова
function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    const syna = synad[juhuslikSyna];
    const translationIndex = synad.indexOf(syna);
    const translatedWord = veneSynad[translationIndex];

    document.getElementById("random-syna").innerHTML = `Sõna: ${syna}`;
    document.getElementById("kontroll").setAttribute("data-translation", translatedWord);
}

// Функция проверки введенного перевода
function checkTranslation() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
    const correctTranslation = document.getElementById("kontroll").getAttribute("data-translation").toLowerCase();
    const responseElement = document.getElementById("vastus");

    if (userInput === correctTranslation) {
        responseElement.innerHTML = "<span style='color: green;'>Õige tõlge!</span>";
    } else {
        responseElement.innerHTML = "<span style='color: red;'>Vale tõlge!</span>";
    }
}

// Функция заполнения таблицы переводов
function fillTranslationTable() {
    const tableBody = document.getElementById("translation-table");

    for (let i = 0; i < synad.length; i++) {
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `${synad[i]} → ${veneSynad[i]}`;
        cell2.innerHTML = `${veneSynad[i]} → ${synad[i]}`;
    }
}

// вызываем функцию для заполнения таблицы при загрузке страницы
window.onload = fillTranslationTable;