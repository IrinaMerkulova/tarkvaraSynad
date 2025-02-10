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
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}

const sonastik = {
    'teostus': 'реализация',
    'algoritm': 'алгоритм',
    'kavand': 'проект',
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
    'parandamine': 'исправление',
    'koskmudel': 'каскадная модель',
    'agiilne mudel': 'гибкая модель (agile)',
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

function kontrollSyna() {
    const sona = document.getElementById("random-syna").innerHTML;
    const kasutajaSisend = document.getElementById("kontroll").value.trim().toLowerCase();
    const oigeTolk = sonastik[sona].toLowerCase();

    if (kasutajaSisend === oigeTolk) {
        document.getElementById("vastus").innerHTML = "Õige!";
        document.getElementById("vastus").style.color = "green";
    } else {
        document.getElementById("vastus").innerHTML = "Vale!";
        document.getElementById("vastus").style.color = "red";
    }
}

function getRandomKey() {
    let keys = Object.keys(sonastik);
    return keys[Math.floor(Math.random() * keys.length)];
}

function uuendaTabel() {
    let veneSona = getRandomKey();
    let estSona;

    do {
        estSona = getRandomKey();
    } while (estSona === veneSona);

    document.getElementById("est-word").textContent = veneSona;
    document.getElementById("rus-word").textContent = sonastik[estSona];
}

function kontrollEst() {
    let sisend = document.getElementById("est-input").value.trim().toLowerCase();
    let oigeVastus = sonastik[document.getElementById("est-word").textContent].toLowerCase();
    let tulemus = document.getElementById("vastus-est");

    tulemus.textContent = sisend === oigeVastus ? "Õige!" : "Vale!";
    tulemus.style.color = sisend === oigeVastus ? "green" : "red";
}

function kontrollRus() {
    let sisend = document.getElementById("rus-input").value.trim().toLowerCase();
    let oigeVastus = Object.keys(sonastik).find(key => sonastik[key] === document.getElementById("rus-word").textContent);
    let tulemus = document.getElementById("vastus-rus");

    tulemus.textContent = sisend === oigeVastus ? "Õige!" : "Vale!";
    tulemus.style.color = sisend === oigeVastus ? "green" : "red";
}
