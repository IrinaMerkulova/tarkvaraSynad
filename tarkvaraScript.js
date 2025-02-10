const synad = {
    'teostus': 'выполнение',
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
    'realiseerimine': 'реализация',
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

let currentWord = '';

function randomSyna() {
    const keys = Object.keys(synad);
    const juhuslikSyna = Math.floor(Math.random() * keys.length);
    currentWord = keys[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = currentWord;
    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").innerText = "";
}

function kontrolliTolge() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
    const correctAnswer = synad[currentWord].toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById("vastus").innerText = "Õige! ✅";
        document.getElementById("vastus").style.color = "green";
    } else {
        document.getElementById("vastus").innerText = "Vale! ❌ Õige vastus: " + synad[currentWord];
        document.getElementById("vastus").style.color = "red";
