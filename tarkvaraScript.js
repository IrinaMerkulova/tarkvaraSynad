// Funktsioon tõlke kontrollimiseks
function kontrolliSyna() {
    const kasutajaSona = document.getElementById("kontroll").value.trim().toLowerCase(); // Kasutaja sisestatud sõna
    const syna = document.getElementById("random-syna").innerHTML; // Juhuslik sõna
    const juhuslikSyna = synad.indexOf(syna); // Leiame juhusliku sõna indeksi

    const õigeVastus = veneSynad[juhuslikSyna]; // Õige tõlge vene keeles

    // Kui kasutaja sisestatud sõna on õige, kuvatakse vastus
    if (kasutajaSona === õigeVastus.toLowerCase()) {
        document.getElementById("vastus").innerHTML = "Õige vastus!"; // Õige vastus
    } else {
        document.getElementById("vastus").innerHTML = `Vale vastus! Õige vastus on: ${õigeVastus}`; // Vale vastus
    }
}

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
// teine masiivi loomine
    const veneSynad= [
        'проектирование',
        'алгоритм',
        'дизайн',
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
        'починка',
        'модель COS',
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
        'валидация'
    ];

    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}
