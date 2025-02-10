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


    document.getElementById("random-syna").innerHTML = `Sõna: ${syna}<br>Tõlgitud: ${translatedWord}`;

    //lisame html-lehele
    document.getElementById("kontroll").setAttribute("data-translation", translatedWord);
}


function fillTranslationTable() {
    const tableBody = document.getElementById("translation-table");

    for (let i = 0; i < synad.length; i++) {
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `${synad[i]} → ${veneSynad[i]}`;
        cell2.innerHTML = `${veneSynad[i]} → ${synad[i]}`;
    }
}

window.onload = fillTranslationTable;