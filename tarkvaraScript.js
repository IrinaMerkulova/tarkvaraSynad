const synad=[
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
const Venesynad = [
    'выполнение',
    'алгоритм',
    'черновик',
    'пользовательский интерфейс',
    'модель', 'схема базы данных',
    'стандартный',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'проектирование',
    'итерация',
    'исправление',
    'улучшение',
    'космодел',
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
let currentWord = "";

function randomSyna() {
// esimese masiivi loomine


    //random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * synad.length);

    //võtame random sõna massivist
    currentWord = synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML = currentWord ;
    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").innerHTML = "";
}
function check() {
    const userInput = document.getElementById('kontroll').value.trim();
    const index = synad.indexOf(currentWord);

    if (index !== -1) {
        if (userInput.toLowerCase() === Venesynad[index].toLowerCase()) {
            document.getElementById("vastus").innerHTML = "Õige vastus";
            document.getElementById("vastus").style.color = "green";
        } else {
            document.getElementById("vastus").innerHTML = "Vale vastus. õige vastus on " + Venesynad[index];
            document.getElementById("vastus").style.color = "red";
        }
    }
}

