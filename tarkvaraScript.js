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

let currentWordET = '';
let currentWordRU = '';

function randomSyna() {
    const keys = Object.keys(synad);
    const juhuslikSyna = Math.floor(Math.random() * keys.length);
    currentWordET = keys[juhuslikSyna];
    document.getElementById("random-syna-et").innerHTML = currentWordET;
    document.getElementById("kontroll-et").value = "";
    document.getElementById("vastus-et").innerText = "";
}

function randomSynaRU() {
    const values = Object.values(synad);
    const juhuslikSyna = Math.floor(Math.random() * values.length);
    currentWordRU = values[juhuslikSyna];
    document.getElementById("random-syna-ru").innerHTML = currentWordRU;
    document.getElementById("kontroll-ru").value = "";
    document.getElementById("vastus-ru").innerText = "";
}

function kontrolliTolgeET() {
    const userInput = document.getElementById("kontroll-et").value.trim().toLowerCase();
    const correctAnswer = synad[currentWordET].toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById("vastus-et").innerText = "Õige! ✅";
        document.getElementById("vastus-et").style.color = "green";
    } else {
        document.getElementById("vastus-et").innerText = "Vale! ❌ Õige vastus: " + correctAnswer;
        document.getElementById("vastus-et").style.color = "red";
    }
}

function kontrolliTolgeRU() {
    const userInput = document.getElementById("kontroll-ru").value.trim().toLowerCase();
    const correctAnswer = Object.keys(synad).find(key => synad[key].toLowerCase() === currentWordRU.toLowerCase());

    if (userInput === correctAnswer) {
        document.getElementById("vastus-ru").innerText = "Õige! ✅";
        document.getElementById("vastus-ru").style.color = "green";
    } else {
        document.getElementById("vastus-ru").innerText = "Vale! ❌ Õige vastus: " + correctAnswer;
        document.getElementById("vastus-ru").style.color = "red";
    }
}

