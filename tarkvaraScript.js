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
    const tolgitudSynad=[
        'реализация',
        'алгоритм',
        'проект',
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
        'исправление',
        'исправление',
        'водопадная модель',
        'агильная модель',
        'спиральная модель',
        'инкрементная модель',
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
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna = synad[juhuslikSyna];
    tolgitudSyna = tolgitudSynad[juhuslikSyna]; // Запоминаем правильный перевод

    // Добавляем выбранное слово на страницу HTML
    document.getElementById("eestikeelneSyna").innerHTML = syna;
    document.getElementById("venekeelneSyna").innerHTML = tolgitudSynad[juhuslikSyna];
}

function synadeTolge() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase(); // Ввод пользователя
    const answerDiv = document.getElementById("vastus");

    // Проверяем, правильный ли перевод
    if (userInput === tolgitudSyna.toLowerCase()) {
        answerDiv.innerHTML = "Õige tõlge!";
        answerDiv.style.color = "green";
    } else {
        answerDiv.innerHTML = "Vale tõlge, proovige uuesti!";
        answerDiv.style.color = "red";
    }
}

// Добавляем событие для проверки на ввод текста
document.getElementById("kontroll").addEventListener('input', synadeTolge);
