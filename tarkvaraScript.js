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

    const ruSynad=[
        'исполнение',
        'алгоритм',
        'проекта',
        'интерфейс',
        'модели',
        'схема базы данных',
        'стандарт',
        'цикл',
        'обработки данных',
        'структуры данных',
        'развивающая среда',
        'инструмент управления проектами',
        'планирования',
        'итерация',
        'коррекции',
        'ремонта',
        'водопадная модель',
        'агильная модель',
        'спиральная модель',
        'инкрементальная модель',
        'требований',
        'реализация',
        'тестирования',
        'интеграция',
        'использования',
        'обслуживание',
        'преимущества',
        'дефекты',
        'жизненный цикл',
        'разработки',
        'валидация'

    ];
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}
