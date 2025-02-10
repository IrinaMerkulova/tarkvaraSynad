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

function randomSyna() {

    //random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * synad.length);

    //võtame random sõna massivist
    const syna = synad[juhuslikSyna];
}
    function randomSynaRus() {
        const juhuslikSyna = Math.floor(Math.random() * veneSynad.length); // Случайное слово из массива

        const syna = veneSynad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
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