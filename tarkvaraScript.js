const synad = [
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

const ruSynad = [
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
    'отсутствия',
    'жизненный цикл',
    'разработки',
    'валидация'
];


let currentWordIndex = -1;

function randomSyna() {
    currentWordIndex = Math.floor(Math.random() * synad.length);

    const syna = synad[currentWordIndex];

    document.getElementById("random-syna").innerHTML = syna;

    document.getElementById("vastus").innerHTML = "";
}

function ee_randomSyna() {
    currentWordIndex = Math.floor(Math.random() * ruSynad.length);

    const ruSyna = ruSynad[currentWordIndex];

    document.getElementById("ee_random-syna").innerHTML = ruSyna;

    document.getElementById("ee_vastus").innerHTML = "";
}

function checkTranslation() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();

    if (currentWordIndex !== -1) {
        const correctTranslation = ruSynad[currentWordIndex].toLowerCase();

        if (userInput === correctTranslation) {
            document.getElementById("vastus").innerHTML = "<span style='color: green;'>Õige vastus!</span>";
        } else {
            document.getElementById("vastus").innerHTML = "<span style='color: red;'>Vale vastus. Proovi uuesti.</span>";
        }
    }
}

function ee_checkTranslation() {
    const userInput = document.getElementById("ee_kontroll").value.trim().toLowerCase();

    if (currentWordIndex !== -1) {
        const correctTranslation = synad[currentWordIndex].toLowerCase();

        if (userInput === correctTranslation) {
            document.getElementById("ee_vastus").innerHTML = "<span style='color: green;'>Õige vastus!</span>";
        } else {
            document.getElementById("ee_vastus").innerHTML = "<span style='color: red;'>Vale vastus. Proovi uuesti.</span>";
        }
    }
}
function showDescription() {
    var descriptions = {
        "andmetöötlussüsteem": "riistvarast, tarkvarast ja inimestest koosnev süsteem andmete muutmiseks kasutatavaks informatsiooniks",
        "draiver": "utiliitprogramm, mis teeb lisaseadmed operatsioonisüsteemile kättesaadavaks ja kasutatavaks",
        "rakendustarkvara": "programmid, millega saab inimene arvutis midagi kasulikku teha ",
        "BIOS": "osa süsteemist, mis on vajalik sisendi ja väljundi jaoks",
        "systarkvara": "kõik programmid, mis tagavad, et arvuti ja tema lisaseadmed suudaksid koos funktsioneerida",
        "Riistvara" : " (hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). Antud kontekstis peetakse silmas ennekõike arvuti riistvara. Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel. ",
        "Püsivara" : "(firmware) - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ja andmekogum (programm ja vastav andmestik). Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks. ",
        "Operatsioonisüsteem" : "(operating system software) on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, kasutades selleks käsukeelt või graafilist kasutajaliidest. Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne. ",
        "Rakendustarkvara" : "(application software) on otseselt kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara. Kõige olulisema erinevusena tulekski pidada meeles, et erinevalt süsteemitarkvarast on rakendustarkvara otseselt suunatud just kasutaja eesmärkide täitmisele.",
        "Süsteemikonfiguratsioonifailid" :"(system configuration data) sisaldavad erinevaid andmeid, mis on vajalikud arvutisüsteemi enda toimimiseks. Sellised andmed on nii operatsioonisüsteemil kui ka rakendustarkvaral. ",
        "Kasutajaandmed" :"(user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks arvutisüsteemi salvestatakse. "
    };

    var selectedWord = document.getElementById("words").value;
    document.getElementById("description").innerText = descriptions[selectedWord];
}
