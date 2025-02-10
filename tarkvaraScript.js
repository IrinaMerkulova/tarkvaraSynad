
let valitudIndex = null;

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

function randomSyna() {
    valitudIndex = Math.floor(Math.random() * synad.length);
    document.getElementById("random-syna").textContent = synad[valitudIndex];

    // Очищаем поле ввода и сообщение
    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").textContent = "";
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


