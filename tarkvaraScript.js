

const synad = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel', 'andmebaasi skeem',
    'standart', 'tsükkel', 'andmetöötlus', 'andmestruktuur', 'arenduskeskkond', 'projektihalduse tööriist',
    'kavandamine', 'iteratsioon', 'parandus', 'parandamine', 'koskmudel', 'agiilne mudel',
    'spiraalne mudel', 'inkrementaalne mudel', 'nõudmised', 'realiseerimine', 'testimine',
    'integreerimine', 'kasutamine', 'hooldus', 'eelised', 'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const veneSynad = [
    'реализация', 'алгоритм', 'проектирование', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных', 'структура данных',
    'среда разработки', 'инструмент управления проектом', 'проектирование', 'итерация',
    'коррекция', 'исправление', 'модель водопада', 'агильная модель', 'спиральная модель',
    'инкрементальная модель', 'требования', 'реализация', 'тестирование', 'интеграция',
    'использование', 'обслуживание', 'преимущества', 'недостатки', 'жизненный цикл',
    'разработка', 'валидация'
];

// Массивы для отслеживания использованных слов
let usedSynad = [];
let usedVeneSynad = [];

// Функция для получения случайного слова, которое ещё не использовалось
function getRandomWord(usedWords, wordList) {
    let randomIndex;
    let word;

    do {
        randomIndex = Math.floor(Math.random() * wordList.length);
        word = wordList[randomIndex];
    } while (usedWords.includes(word)); // Убедиться, что слово не было использовано

    usedWords.push(word); // Добавить слово в список использованных
    return randomIndex;
}

// Функция для создания случайных слов и проверки перевода с эстонского на русский
function randomSynaForRow(rowIndex, direction) {
    let syna, translatedWord;

    if (direction === 'et-ru') {
        const randomIndex = getRandomWord(usedSynad, synad);
        syna = synad[randomIndex];
        translatedWord = veneSynad[randomIndex];
    } else {
        const randomIndex = getRandomWord(usedVeneSynad, veneSynad);
        syna = veneSynad[randomIndex];
        translatedWord = synad[randomIndex];
    }

    const inputElement = document.getElementById(`input-${rowIndex}-${direction}`);
    const buttonElement = document.getElementById(`button-${rowIndex}-${direction}`);
    const responseElement = document.getElementById(`response-${rowIndex}-${direction}`);

    inputElement.value = '';
    inputElement.setAttribute('data-translation', translatedWord);

    responseElement.innerHTML = ''; // Очистить предыдущее сообщение

    // Отображаем слово для перевода в поле ввода
    inputElement.placeholder = syna;

    buttonElement.onclick = () => checkTranslation(rowIndex, direction);
}

// Функция проверки перевода
function checkTranslation(rowIndex, direction) {
    const userInput = document.getElementById(`input-${rowIndex}-${direction}`).value.trim().toLowerCase();
    const correctTranslation = document.getElementById(`input-${rowIndex}-${direction}`).getAttribute('data-translation').toLowerCase();
    const responseElement = document.getElementById(`response-${rowIndex}-${direction}`);

    if (userInput === correctTranslation) {
        responseElement.innerHTML = "<span style='color: green;'>Õige tõlge!</span>";
        addNewRow(); // Добавить новый ряд после правильного ответа
    } else {
        responseElement.innerHTML = "<span style='color: red;'>Vale tõlge!</span>";
    }
}

// Функция добавления новой строки в таблицу
function addNewRow() {
    const tableBody = document.getElementById("translation-table");

    // Очистка списка использованных слов, если все слова уже использованы
    if (usedSynad.length === synad.length && usedVeneSynad.length === veneSynad.length) {
        usedSynad = [];
        usedVeneSynad = [];
    }

    const row = tableBody.insertRow();

    // Ячейка с переводом с эстонского на русский
    const cell1 = row.insertCell(0);
    cell1.innerHTML = `
        <input type="text" id="input-${usedSynad.length}-et-ru" placeholder="Kirjuta tõlge (et → ru)">
        <button id="button-${usedSynad.length}-et-ru">Näita sõna</button>
        <div id="response-${usedSynad.length}-et-ru"></div>
    `;

    // Ячейка с переводом с русского на эстонский
    const cell2 = row.insertCell(1);
    cell2.innerHTML = `
        <input type="text" id="input-${usedVeneSynad.length}-ru-et" placeholder="Kirjuta tõlge (ru → et)">
        <button id="button-${usedVeneSynad.length}-ru-et">Näita sõna</button>
        <div id="response-${usedVeneSynad.length}-ru-et"></div>
    `;

    // Инициализация случайных слов для обеих направлений
    randomSynaForRow(usedSynad.length, 'et-ru');
    randomSynaForRow(usedVeneSynad.length, 'ru-et');
}

// вызываем функцию для заполнения таблицы при загрузке страницы
window.onload = addNewRow;
