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
    'проект',
    'интерфейс пользователя',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектом',
    'проектирование',
    'итерация',
    'исправление',
    'исправление',
    'водопадная модель',
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

const synadMap = synad.reduce((acc, word, index) => {
    acc[word] = veneSynad[index];
    return acc;
}, {});

function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    const syna = synad[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = syna;
}

function inputSyna() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const translation = synadMap[userInput.toLowerCase()];

    if (translation) {
        document.getElementById("vastus").innerHTML = `Перевод: ${translation}`;
    } else {
        document.getElementById("vastus").innerHTML = "Слово не найдено.";
    }
}

function checkTranslation() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const correctTranslation = synadMap[userInput.toLowerCase()];
    const userAnswer = document.getElementById("vastus").innerText.trim();

    if (correctTranslation) {
        if (userAnswer === `Перевод: ${correctTranslation}`) {
            alert("Правильно!");
        } else {
            alert("Неправильно! Попробуйте еще раз.");
        }
    } else {
        alert("Слово не найдено. Проверьте правильность ввода.");
    }
}

function clearInput() {
    document.getElementById("userInput").value = '';
    document.getElementById("vastus").innerHTML = '';
}
