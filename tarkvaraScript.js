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

    const veneSynad = [
        'реализация',
        'алгоритм',
        'проектирование',
        'пользовательский интерфейс',
        'модель', 'схема базы данных',
        'стандарт',
        'цикл',
        'обработка данных',
        'структура данных',
        'среда разработки',
        'инструмент управления проектом',
        'проектирование',
        'итерация',
        'коррекция',
        'исправление',
        'модель водопада',
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
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    const translationIndex = synad.indexOf(syna);
    const translatedWords = veneSynad[translationIndex];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}


function checkTranslation() {
    const userInput = document.getElementById('kontroll').value;
    const correctTranslation = document.getElementById('kontroll').getAttribute('data-translation');

    const responseElement = document.getElementById('vastus');


    if (userInput.trim().toLowerCase() === correctTranslation.toLowerCase()) {
        responseElement.innerHTML = "Õige!";
        responseElement.style.color = "green";
    } else {
        responseElement.innerHTML = "Vale!";
        responseElement.style.color = "red";
    }
}