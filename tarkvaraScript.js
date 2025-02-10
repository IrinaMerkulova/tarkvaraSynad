const synadET = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel', 'andmebaasi skeem',
    'standart', 'tsükkel', 'andmetöötlus', 'andmestruktuur', 'arenduskeskkond',
    'projektihalduse tööriist', 'kavandamine', 'iteratsioon', 'parandus', 'parandamine',
    'koskmudel', 'agiilne mudel', 'spiraalne mudel', 'inkrementaalne mudel', 'nõudmised',
    'realiseerimine', 'testimine', 'integreerimine', 'kasutamine', 'hooldus', 'eelised',
    'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const synadRU = [
    'выполнение', 'алгоритм', 'план', 'пользовательский интерфейс', 'модель', 'схема базы данных',
    'стандарт', 'цикл', 'обработка данных', 'структура данных', 'среда разработки',
    'инструмент управления проектами', 'проектирование', 'итерация', 'исправление', 'улучшение',
    'каскадная модель', 'гибкая модель', 'спиральная модель', 'инкрементальная модель', 'требования',
    'реализация', 'тестирование', 'интеграция', 'использование', 'обслуживание', 'преимущества',
    'недостатки', 'жизненный цикл', 'разработка', 'валидация'
];

const definitions = {
    'andmetöötlussüsteem': 'riistvarast , tarkvarast ja inimestest koosnev süsteem andmete muutmiseks kasutatavaks informatsiooniks',
    'draiver': 'utiliitprogramm, mis teeb lisaseadmed operatsioonisüsteemile kättesaadavaks ja kasutatavaks',
    'rakendustarkvara': 'programmid, millega saab inimene arvutis midagi kasulikku teha',
    'BIOS': 'osa süsteemist, mis on vajalik sisendi ja väljundi jaoks',
    'süsteemi tarkvara': 'kõik programmid, mis tagavad, et arvuti ja tema lisaseadmed suudaksid koos funtksioneerida.',
    'Operatsioonisüsteem': '(operating system software) on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise.',
    'Rakendustarkvara': '(application software) on otseselt kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara.',
    'Süsteemi konfiguratsioonifailid': '(system configuration data) sisaldavad erinevaid andmeid, mis on vajalikud arvutisüsteemi enda toimimiseks.',
    'Kasutaja andmed': '(user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks arvutisüsteemi salvestatakse.',
    'Riistvara': '(hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid).'
};

let currentWordET = '';
let currentWordRU = '';

function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synadET.length);
    currentWordET = synadET[juhuslikSyna];
    document.getElementById("random-syna-et").innerHTML = currentWordET;
    document.getElementById("kontroll-et").value = "";
    document.getElementById("vastus-et").innerText = "";
}

function randomSynaRU() {
    const juhuslikSyna = Math.floor(Math.random() * synadRU.length);
    currentWordRU = synadRU[juhuslikSyna];
    document.getElementById("random-syna-ru").innerHTML = currentWordRU;
    document.getElementById("kontroll-ru").value = "";
    document.getElementById("vastus-ru").innerText = "";
}

function kontrolliTolgeET() {
    const userInput = document.getElementById("kontroll-et").value.trim().toLowerCase();
    const correctAnswer = synadRU[synadET.indexOf(currentWordET)].toLowerCase();

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
    const correctAnswer = synadET[synadRU.indexOf(currentWordRU)].toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById("vastus-ru").innerText = "Õige! ✅";
        document.getElementById("vastus-ru").style.color = "green";
    } else {
        document.getElementById("vastus-ru").innerText = "Vale! ❌ Õige vastus: " + correctAnswer;
        document.getElementById("vastus-ru").style.color = "red";
    }
}

function showDefinition() {
    const select = document.getElementById("mõisted-select");
    const definition = definitions[select.value] || "Vali mõiste, et näha selle kirjeldust.";
    document.getElementById("mõisted-description").innerText = definition;
}
