function randomSyna(){
// esimese masiivi loomine

    const synad = [
        'teostus', // выполнение
        'algoritm', // алгоритм
        'kavand', // план, проект
        'kasutajaliides', // пользовательский интерфейс
        'mudel', // модель
        'andmebaasi skeem', // схема базы данных
        'standart', // стандарт
        'tsükkel', // цикл
        'andmetöötlus', // обработка данных
        'andmestruktuur', // структура данных
        'arenduskeskkond', // среда разработки
        'projektihalduse tööriist', // инструмент управления проектами
        'kavandamine', // проектирование, планирование
        'iteratsioon', // итерация
        'parandus', // исправление
        'parandamine', // улучшение, исправление
        'koskmudel', // каскадная модель
        'agiilne mudel', // гибкая (Agile) модель
        'spiraalne mudel', // спиральная модель
        'inkrementaalne mudel', // инкрементальная модель
        'nõudmised', // требования
        'realiseerimine', // реализация
        'testimine', // тестирование
        'integreerimine', // интеграция
        'kasutamine', // использование
        'hooldus', // обслуживание
        'eelised', // преимущества
        'puudused', // недостатки
        'elutsükkel', // жизненный цикл
        'arendamine', // разработка
        'valideerimine' // валидация
    ];

    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}
