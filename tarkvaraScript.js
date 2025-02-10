
let valitudIndex = null;

function randomSyna(){
// esimese masiivi loomine

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

    const venesynad=[
        'исполнение',
        'алгоритм',
        'дизайн',
        'пользовательский интерфейс',
        'модель',
        'схема базы данных',
        'стандарт',
        'цикл',
        'обработка данных',
        'структура данных',
        'среда разработки',
        'инструмент управления проектом',
        'планирование',
        'итерация',
        'улучшение',
        'улучшение',
        'каскадная модель',
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
        'проверка'
    ];
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}

function kontrolliVastus() {
    if (valitudIndex === null) {
        document.getElementById("vastus").textContent = "Palun vali kõigepealt sõna!";
        document.getElementById("vastus").style.color = "black";
        return;
    }

    let kasutajaVastus = document.getElementById("kontroll").value.trim().toLowerCase();
    let õigeVastus = venesynad[valitudIndex].toLowerCase();

    let vastusElement = document.getElementById("vastus");

    if (kasutajaVastus === õigeVastus) {
        vastusElement.textContent = "Õige ";
        vastusElement.style.color = "green";
    } else {
        vastusElement.textContent = "Vale, proovi uuesti!";
        vastusElement.style.color = "red";
    }
}
