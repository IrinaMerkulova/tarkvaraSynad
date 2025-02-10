function randomSyna(){
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

    const juhuslikSyna = Math.floor(Math.random() * synad.length);

    const syna = synad[juhuslikSyna];
    const correctTranslation = translations[juhuslikSyna];

    document.getElementById("random-syna").innerHTML = syna;

    document.getElementById("kontroll").value = '';
    document.getElementById("vastus").innerHTML = '';

    document.getElementById("kontroll").dataset.correctAnswer = correctTranslation;
}

function checkAnswer(){
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