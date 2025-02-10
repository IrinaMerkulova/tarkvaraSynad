document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("kontroll").addEventListener("input", kontrolliToiget);
});

function randomSyna(){
    const synad={
        'teostus': 'реализация',
        'algoritm': 'алгоритм',
        'kavand': 'план',
        'kasutajaliides': 'пользовательский интерфейс',
        'mudel': 'модель',
        'andmebaasi skeem': 'схема базы данных',
        'standart': 'стандарт',
        'tsükkel': 'цикл',
        'andmetöötlus': 'обработка данных',
        'andmestruktuur': 'структура данных',
        'arenduskeskkond': 'среда разработки',
        'projektihalduse tööriist': 'инструмент управления проектами',
        'kavandamine': 'проектирование',
        'iteratsioon': 'итерация',
        'parandus': 'исправление',
        'parandamine': 'улучшение',
        'koskmudel': 'каскадная модель',
        'agiilne mudel': 'гибкая модель',
        'spiraalne mudel': 'спиральная модель',
        'inkrementaalne mudel': 'инкрементальная модель',
        'nõudmised': 'требования',
        'realiseerimine': 'осуществление',
        'testimine': 'тестирование',
        'integreerimine': 'интеграция',
        'kasutamine': 'использование',
        'hooldus': 'обслуживание',
        'eelised': 'преимущества',
        'puudused': 'недостатки',
        'elutsükkel': 'жизненный цикл',
        'arendamine': 'разработка',
        'valideerimine': 'валидация'
    };

    const synaKeys = Object.keys(synad);
    const juhuslikSyna = Math.floor(Math.random() * synaKeys.length);
    const syna = synaKeys[juhuslikSyna];

    document.getElementById("random-syna").innerHTML = syna;
    document.getElementById("kontroll").setAttribute("data-correct", synad[syna]);
}
function kontrolliToigett(){
    const kasutajaSisestus = document.getElementById("kontroll").value.trim().toLowerCase();
    const oigeVastus = document.getElementById("kontroll").getAttribute("data-correct").toLowerCase();
    const vastusElement = document.getElementById("vastus");

    if (kasutajaSisestus === oigeVastus) {
        vastusElement.innerHTML = "\u2705 Õige!";
        vastusElement.style.color = "green";
    } else {
        vastusElement.innerHTML = "\u274C Vale! Õige vastus: " + oigeVastus;
        vastusElement.style.color = "red";
    }
}


