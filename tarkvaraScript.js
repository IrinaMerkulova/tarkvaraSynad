// Massiivid sõnade jaoks (eesti ja vene keeles)
const synad = [
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel', 
    'andmebaasi skeem', 'standard', 'tsükkel', 'andmetöötlus', 
    'andmestruktuur', 'arenduskeskkond', 'projektihalduse tööriist', 
    'kavandamine', 'iteratsioon', 'parandus', 'koskmudel', 'agiilne mudel', 
    'spiraalne mudel', 'inkrementaalne mudel', 'nõudmised', 'realiseerimine', 
    'testimine', 'integreerimine', 'kasutamine', 'hooldus', 'eelised', 
    'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const venemaaSynad = [
    'реализация', 'алгоритм', 'дизайн', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных',
    'структура данных', 'среда разработки', 'инструмент управления проектами',
    'проектирование', 'итерация', 'исправление', 'каскадная модель', 'гибкая модель',
    'спиральная модель', 'инкрементальная модель', 'требования', 'реализация',
    'тестирование', 'интеграция', 'использование', 'обслуживание', 'преимущества',
    'недостатки', 'жизненный цикл', 'разработка', 'валидация'
];

// Globaalsed muutujad praeguse sõna indeksi hoidmiseks
let praeguneSynaIndex = -1;
let praeguneVeneSynaIndex = -1;

// Funktsioon juhusliku eestikeelse sõna kuvamiseks
function randomSyna() {
    praeguneSynaIndex = Math.floor(Math.random() * synad.length);
    document.getElementById("random-syna").innerHTML = synad[praeguneSynaIndex];
    document.getElementById("kontroll").value = ''; // Tühjenda sisendväli
    document.getElementById("vastus1").innerHTML = ''; // Tühjenda vastuse ala
    document.getElementById("vastus1").className = 'vastus'; // Eemalda klass
}

// Funktsioon eestikeelse sõna tõlke kontrollimiseks
function kontrolliTolget() {
    if (praeguneSynaIndex === -1) return; // Ära kontrolli, kui sõna pole valitud

    const kasutajaSisestus = document.getElementById('kontroll').value.trim().toLowerCase();
    const oigeVastus = venemaaSynad[praeguneSynaIndex].toLowerCase();
    const vastusDiv = document.getElementById('vastus1');

    if (kasutajaSisestus === oigeVastus) {
        vastusDiv.innerHTML = "Õige!";
        vastusDiv.className = 'vastus oige';
    } else {
        vastusDiv.innerHTML = "Vale, proovi uuesti.";
        vastusDiv.className = 'vastus vale';
    }
}

// Funktsioon juhusliku venekeelse sõna kuvamiseks
function randomVeneSyna() {
    praeguneVeneSynaIndex = Math.floor(Math.random() * venemaaSynad.length);
    document.getElementById("random-vene-syna").innerHTML = venemaaSynad[praeguneVeneSynaIndex];
    document.getElementById("kontroll-vene").value = ''; // Tühjenda sisendväli
    document.getElementById("vastus2").innerHTML = ''; // Tühjenda vastuse ala
    document.getElementById("vastus2").className = 'vastus'; // Eemalda klass
}

// Funktsioon venekeelse sõna tõlke kontrollimiseks
function kontrolliVeneTolget() {
    if (praeguneVeneSynaIndex === -1) return;

    const kasutajaSisestus = document.getElementById('kontroll-vene').value.trim().toLowerCase();
    const oigeVastus = synad[praeguneVeneSynaIndex].toLowerCase();
    const vastusDiv = document.getElementById('vastus2');

    if (kasutajaSisestus === oigeVastus) {
        vastusDiv.innerHTML = "Õige!";
        vastusDiv.className = 'vastus oige';
    } else {
        vastusDiv.innerHTML = "Vale, proovi uuesti.";
        vastusDiv.className = 'vastus vale';
    }
}


// Objekt terminite ja nende kirjeldustega
const terminid = {
    "Andmebaas": "Organiseeritud andmete kogum, mida hallatakse ja millele pääseb juurde elektrooniliselt arvutisüsteemist.",
    "Andmebaasi skeem": "Andmebaasi struktuuri formaalne kirjeldus, mis defineerib, kuidas andmed on organiseeritud ja omavahel seotud.",
    "Päring": "Formaalne taotlus andmete saamiseks või muutmiseks andmebaasisüsteemist, tavaliselt esitatakse päringukeeles nagu SQL.",
    "Prototüüp": "Tarkvara või süsteemi varajane näidis, mudel või väljalase, mis on ehitatud kontseptsiooni testimiseks või protsessi käigus õppimiseks.",
    "Kasutajaliides (UI)": "Vahend, mille kaudu kasutaja suhtleb arvuti, tarkvara või seadmega. See hõlmab graafilisi elemente, nuppe ja menüüsid.",
    "Tarkvaraarenduse elutsükkel (SDLC)": "Protsess, mida kasutatakse tarkvaratööstuses kvaliteetse tarkvara kavandamiseks, arendamiseks ja testimiseks.",
    "Agiilne arendus": "Tarkvaraarenduse metoodika, mis põhineb iteratiivsel ja inkrementaalsel arendusel, kus nõuded ja lahendused arenevad koostöös isekorralduvate meeskondadega.",
    "Koskmudel": "Järjestikune arendusmudel, kus arendusprotsess voolab nagu kosk allapoole läbi faaside: nõuete analüüs, disain, implementatsioon, testimine, integreerimine ja hooldus.",
    "Versioonihaldus": "Süsteem, mis salvestab tarkvarakoodi muudatusi ajas, võimaldades arendajatel jälgida ajalugu ja teha koostööd. (nt. Git)",
    "API (Rakendusliides)": "Reeglite ja protokollide kogum, mis võimaldab erinevatel tarkvararakendustel omavahel suhelda ja andmeid vahetada."
};

// Funktsioon, mis täidab dropdowni terminitega
function taidaTerminiteDropdown() {
    const select = document.getElementById('termini-valik');
    for (const termin in terminid) {
        const option = document.createElement('option');
        option.value = termin;
        option.textContent = termin;
        select.appendChild(option);
    }
}

// Funktsioon, mis kuvab valitud termini kirjelduse
function naitaKirjeldust() {
    const select = document.getElementById('termini-valik');
    const valitudTermin = select.value;
    const kirjeldusDiv = document.getElementById('termini-kirjeldus');

    if (valitudTermin && terminid[valitudTermin]) {
        kirjeldusDiv.innerHTML = `<strong>${valitudTermin}:</strong> ${terminid[valitudTermin]}`;
    } else {
        kirjeldusDiv.innerHTML = ""; // Tühjenda, kui valitud on default väärtus
    }
}

// Käivita funktsioonid lehe laadimisel
window.onload = function() {
    taidaTerminiteDropdown();
};