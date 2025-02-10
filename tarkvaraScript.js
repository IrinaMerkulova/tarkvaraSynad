const Synad=[
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
const Tolgisynad = [
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
    'водопадная модель',
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
    const juhuslikSynad = Math.floor(Math.random() * Synad.length);

    //võtame random sõna massivist
    currentWord = Synad[juhuslikSynad];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML = currentWord ;
    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").innerHTML = "";
}
function randomVene() {
    const juhuslikSynad = Math.floor(Math.random() * Synad.length);

    currentWord = Tolgisynad[juhuslikSynad];

    //lisame html-lehele
    document.getElementById("random-venesyna").innerHTML = currentWord ;
    document.getElementById("kontrollVene").value = "";
    document.getElementById("venevastus").innerHTML = "";
}

function CheckTolgi() {
    const userInput = document.getElementById('kontrollVene').value.trim();
    const index = Tolgisynad.indexOf(currentWord);

    if (index !== -1) {
        if (userInput.toLowerCase() === Synad[index].toLowerCase()) {
            document.getElementById("venevastus").innerHTML = "Õige vastus";
            document.getElementById("venevastus").style.color = "green";
        } else {
            document.getElementById("venevastus").innerHTML = "Vale vastus. õige vastus on " + Synad[index];
            document.getElementById("venevastus").style.color = "red";
        }
    }
}



function Check() {
    const userInput = document.getElementById('kontroll').value.trim();
    const index = Synad.indexOf(currentWord);

    if (index !== -1) {
        if (userInput.toLowerCase() === Tolgisynad[index].toLowerCase()) {
            document.getElementById("vastus").innerHTML = "Õige vastus";
            document.getElementById("vastus").style.color = "green";
        } else {
            document.getElementById("vastus").innerHTML = "Vale vastus. õige vastus on " + Tolgisynad[index];
            document.getElementById("vastus").style.color = "red";
        }
    }
}

