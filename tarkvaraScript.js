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

const ruSynad = [
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
