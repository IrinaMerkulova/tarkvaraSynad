function randomSyna(){
// esimese masiivi loomine

    const synad=[
        { eesti: 'teostus', vene: 'исполнение' },
        { eesti: 'algoritm', vene: 'алгоритм' },
        { eesti: 'kavand', vene: 'дизайн' },
        { eesti: 'kasutajaliides', vene: 'пользовательский интерфейс' },
        { eesti: 'mudel', vene: 'модель' },
        { eesti: 'andmebaasi skeem', vene: 'схема базы данных' },
        { eesti: 'standart', vene: 'стандарт' },
        { eesti: 'tsükkel', vene: 'цикл' },
        { eesti: 'andmetöötlus', vene: 'обработка данных' },
        { eesti: 'andmestruktuur', vene: 'структура данных' },
        { eesti: 'arenduskeskkond', vene: 'среда разработки' },
        { eesti: 'projektihalduse tööriist', vene: 'инструмент управления проектом' },
        { eesti: 'kavandamine', vene: 'планирование' },
        { eesti: 'iteratsioon', vene: 'итерация' },
        { eesti: 'parandus', vene: 'улучшение' },
        { eesti: 'parandamine', vene: 'улучшение' },
        { eesti: 'koskmudel', vene: 'космомодель' },
        { eesti: 'agiilne mudel', vene: 'гибкая модель' },
        { eesti: 'spiraalne mudel', vene: 'спиральная модель' },
        { eesti: 'inkrementaalne mudel', vene: 'инкрементальная модель' },
        { eesti: 'nõudmised', vene: 'требования' },
        { eesti: 'realiseerimine', vene: 'реализация' },
        { eesti: 'testimine', vene: 'тестирование' },
        { eesti: 'integreerimine', vene: 'интеграция' },
        { eesti: 'kasutamine', vene: 'использование' },
        { eesti: 'hooldus', vene: 'обслуживание' },
        { eesti: 'eelised', vene: 'преимущества' },
        { eesti: 'puudused', vene: 'недостатки' },
        { eesti: 'elutsükkel', vene: 'жизненный цикл' },
        { eesti: 'arendamine', vene: 'разработка' },
        { eesti: 'valideerimine', vene: 'проверка' }

    ];
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}
