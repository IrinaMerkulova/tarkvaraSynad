document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("kontroll").addEventListener("input", kontrolliToiget);
});

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
        'projektihaldus tööriist',
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

    const synadTolge = [
        "реализация",
        "алгоритм",
        "план",
        "пользовательский интерфейс",
        "модель",
        "схема базы данных",
        "стандарт",
        "цикл",
        "обработка данных",
        "структура данных",
        "среда разработки",
        "инструмент управления проектами",
        "проектирование",
        "итерация",
        "исправление",
        "улучшение",
        "каскадная модель",
        "гибкая модель",
        "спиральная модель",
        "инкрементальная модель",
        "требования",
        "осуществление",
        "тестирование",
        "интеграция",
        "использование",
        "обслуживание",
        "преимущества",
        "недостатки",
        "жизненный цикл",
        "разработка",
        "валидация"
    ];

    //random sõna - arv
    //võtame random sõna massivist
    function randomSyna() {
        const juhuslikIndex = Math.floor(Math.random() *  synad.length);
        const syna =  synad[juhuslikIndex];
        const toigeTolge = synadTolge[juhuslikIndex];

        document.getElementById("random-syna").innerHTML = syna;
        document.getElementById("kontroll").value = "";
        document.getElementById("kontroll").setAttribute("data-correct", toigeTolge);
        document.getElementById("vastus").innerHTML = "";
    }

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}
