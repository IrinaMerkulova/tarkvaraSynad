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

const translations = [
    'выполнение',
    'алгоритм',
    'дизайн',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандартный',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда развития',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'коррекция',
    'коррекция',
    'модель водопада',
    'гибкая модель',
    'спиральная модель',
    'инкрементальная модель',
    'претензии',
    'реализация',
    'тестирование',
    'интеграция',
    'использовать',
    'обслуживание',
    'преимущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'проверка'
];

let currentIndex = 0;
let reverseIndex = 0;

function randomSyna() {
    currentIndex = Math.floor(Math.random() * synad.length);
    const syna = synad[currentIndex];
    const correctTranslation = translations[currentIndex];
    document.getElementById("random-syna").innerHTML = syna;
    document.getElementById("kontroll").value = '';
    document.getElementById("vastus").innerHTML = '';
    document.getElementById("kontroll").dataset.correctAnswer = correctTranslation;
}

function randomSynaReverse() {
    reverseIndex = Math.floor(Math.random() * translations.length);
    const translation = translations[reverseIndex];
    const correctEstonian = synad[reverseIndex];
    document.getElementById("random-syna-reverse").innerHTML = translation;
    document.getElementById("kontroll-reverse").value = '';
    document.getElementById("vastus-reverse").innerHTML = '';
    document.getElementById("kontroll-reverse").dataset.correctAnswer = correctEstonian;
}

function checkAnswer() {
    const input = document.getElementById("kontroll").value.toLowerCase().trim();
    const correctAnswer = document.getElementById("kontroll").dataset.correctAnswer.toLowerCase();
    const feedback = document.getElementById("vastus");
    if (input === correctAnswer) {
        feedback.innerHTML = "Õige vastus!";
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "Vale vastus!";
        feedback.className = "incorrect";
    }
}

function checkAnswerReverse() {
    const input = document.getElementById("kontroll-reverse").value.toLowerCase().trim();
    const correctAnswer = document.getElementById("kontroll-reverse").dataset.correctAnswer.toLowerCase();
    const feedback = document.getElementById("vastus-reverse");
    if (input === correctAnswer) {
        feedback.innerHTML = "Õige vastus!";
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "Vale vastus!";
        feedback.className = "incorrect";
    }
}
