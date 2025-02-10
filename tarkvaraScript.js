// Define arrays for Estonian words and their Russian translations
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

const RUsynad = [
    'исполнение',
    'алгоритм',
    'проекта',
    'интерфейс',
    'модели',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработки данных',
    'структуры данных',
    'развивающая среда',
    'инструмент управления проектами',
    'планирования',
    'итерация',
    'коррекции',
    'ремонта',
    'водопадная модель',
    'агильная модель',
    'спиральная модель',
    'инкрементальная модель',
    'требований',
    'реализация',
    'тестирования',
    'интеграция',
    'использования',
    'обслуживание',
    'преимущества',
    'отсутствия',
    'жизненный цикл',
    'разработки',
    'валидация'
];


let currentWordIndex = -1;

function randomSyna() {
    currentWordIndex = Math.floor(Math.random() * synad.length);

    const syna = synad[currentWordIndex];

    document.getElementById("random-syna").innerHTML = syna;

    document.getElementById("vastus").innerHTML = "";
}

function checkTranslation() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();

    if (currentWordIndex !== -1) {
        const correctTranslation = RUsynad[currentWordIndex].toLowerCase();

        if (userInput === correctTranslation) {
            document.getElementById("vastus").innerHTML = "<span style='color: green;'>Õige vastus!</span>";
        } else {
            document.getElementById("vastus").innerHTML = "<span style='color: red;'>Vale vastus. Proovi uuesti.</span>";
        }
    }
}

let RUcurrentWordIndex = -1;

function RUrandomSyna() {
    RUcurrentWordIndex = Math.floor(Math.random() * RUsynad.length);

    const RUsyna = RUsynad[RUcurrentWordIndex];

    document.getElementById("RUrandom-syna").innerHTML = RUsyna;

    document.getElementById("RUvastus").innerHTML = "";
}

function RUcheckTranslation() {
    const RUuserInput = document.getElementById("RUkontroll").value.trim().toLowerCase();

    if (currentWordIndex !== -1) {
        const RUcorrectTranslation = synad[RUcurrentWordIndex].toLowerCase();

        if (RUuserInput === RUcorrectTranslation) {
            document.getElementById("RUvastus").innerHTML = "<span style='color: green;'>Õige vastus!</span>";
        } else {
            document.getElementById("RUvastus").innerHTML = "<span style='color: red;'>Vale vastus. Proovi uuesti.</span>";
        }
    }
}
