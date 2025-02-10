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

// teine masiivi loomine
const veneSynad=[
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
    'проектирование',
    'итерация',
    'исправление',
    'ремонт',
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
    'валидизация'
]

function randomSyna(){

    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}

function checkSyna(){
    let kontroll = document.getElementById('kontroll');
    let vastus = document.getElementById('vastus');
    vastus.innerHTML = "Vale";

    for (let i = 0; i < synad.length; i++) {
        if (kontroll.value === veneSynad[i]) {
            vastus.innerHTML = "Õige";
            break;
        }
    }
}

function randomSynaEesti(){

    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*veneSynad.length);

    //võtame random sõna massivist
    const syna=veneSynad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-synaEesti").innerHTML=syna;
}

function checkSynaEesti(){
    let kontroll = document.getElementById('kontrollEesti');
    let vastus = document.getElementById('vastusEesti');
    vastus.innerHTML = "Vale";

    for (let i = 0; i < veneSynad.length; i++) {
        if (kontroll.value === synad[i]) {
            vastus.innerHTML = "Õige";
            break;
        }
    }
}