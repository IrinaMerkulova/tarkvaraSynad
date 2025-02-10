function randomSyna(){
    // esimese masiivi loomine
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
        'kavandamine', 'iteratsioon',
        'parandus', 'parandamine',
        'koskmudel', 'agiilne mudel',
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

    // random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * synad.length);

    // võtame random sõna massivist
    const syna = synad[juhuslikSyna];
    const correctTranslation = translations[juhuslikSyna];

    // lisame html-lehele
    document.getElementById("random-syna").innerHTML = syna;

    // Очищаем поле ввода и результат
    document.getElementById("kontroll").value = '';
    document.getElementById("vastus").innerHTML = '';

    // Сохраняем правильный ответ для проверки
    document.getElementById("kontroll").dataset.correctAnswer = correctTranslation;
}