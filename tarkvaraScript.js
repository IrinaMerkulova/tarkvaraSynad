// esimese masiivi loomine
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

// vene keelde tõlgitud sõnade massiivi
const synadvene = [
    'реализация',
    'алгоритм',
    'Проект',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'исправление',
    'космодель',
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

let praeguneEestiIndeks = null;
let praeguseVeneIndex = null;

// Juhusliku eestikeelse sõna genereerimine
function randomEesti() {
    praeguneEestiIndeks = Math.floor(Math.random() * synad.length);
    document.getElementById("eesti-syna").textContent = synad[praeguneEestiIndeks];
    document.getElementById("eesti-input").value = "";
    document.getElementById("eesti-tulemus").textContent = "";
}

// Tõlke kontrollimine eesti keelest vene keelde
function KontrolligeEestiKeele() {
    if (praeguneEestiIndeks === null) return;

    const kasutajaInput = document.getElementById("eesti-input").value.trim().toLowerCase();
    const korrektneTolge = synadvene[praeguneEestiIndeks].toLowerCase();

    if (kasutajaInput === "") {
        document.getElementById("eesti-tulemus").textContent = "";
        return;
    }

    if (kasutajaInput === korrektneTolge) {
        document.getElementById("eesti-tulemus").textContent = "Õige!";
        document.getElementById("eesti-tulemus").className = "correct";
    } else {
        document.getElementById("eesti-tulemus").textContent = "Viga";
        document.getElementById("eesti-tulemus").className = "incorrect";
    }
}

// Juhuslik vene keele sõnade genereerimine
function randomVene() {
    praeguseVeneIndex = Math.floor(Math.random() * synadvene.length);
    document.getElementById("vene-syna").textContent = synadvene[praeguseVeneIndex];
    document.getElementById("vene-input").value = "";
    document.getElementById("vene-tulemus").textContent = "";
}

// Tõlke kontrollimine vene keelest eesti keelde
function KontrolligeVeneKeele() {
    if (praeguseVeneIndex === null) return;

    const kasutajaInput = document.getElementById("vene-input").value.trim().toLowerCase();
    const korrektneTolge = synad[praeguseVeneIndex].toLowerCase();

    if (kasutajaInput === "") {
        document.getElementById("vene-tulemus").textContent = "";
        return;
    }

    if (kasutajaInput === korrektneTolge) {
        document.getElementById("vene-tulemus").textContent = "Õige!";
        document.getElementById("vene-tulemus").className = "correct";
    } else {
        document.getElementById("vene-tulemus").textContent = "Viga";
        document.getElementById("vene-tulemus").className = "incorrect";
    }
}
// selgitused iga sõna kohta
const selgitused = {
    'pusivara': '(firmware) - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ' +
        'ja andmekogum (programm ja vastav andmestik). ' +
        'Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik ' +
        'muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. ' +
        'BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja ' +
        'sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks. ',
    'riistvara': '(hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). ' +
        'Antud kontekstis peetakse silmas ennekõike arvuti riistvara. ' +
        'Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, ' +
        'modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete ' +
        'sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel. ',
    'draiver': 'Utiliitprogramm, mis teeb lisaseadmed operatsioonisüsteemile kättesaadavaks ja kasutatavaks.',
    'bios': 'Osa süsteemist, mis on vajalik sisendi ja väljundi jaoks.',
    'andmetootlussusteem': '(data processing system) koosneb üldisemalt riistvarast, tarkvarast ja inimestest. ' +
        'Andmetöötlussüsteem on süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone, ' +
        'eesmärgiga muuta need informatsiooniks, kasutajale vajalikule väljundandmete kujule. ' +
        'Viimane võib olla nii heli, video, graafika, arvude kui ka teksti kujul. ',
    'rakendustarkvara': '(application software) on otseselt kasutaja eesmärkide täitmiseks loodud ' +
        'ja installeeritud tarkvara. Kõige olulisema erinevusena tulekski pidada meeles, ' +
        'et erinevalt süsteemitarkvarast on rakendustarkvara otseselt suunatud just kasutaja ' +
        'eesmärkide täitmisele. ',
    'susteemi_tarkvara': 'Kõik programmid, mis tagavad, et arvuti ja tema lisaseadmed suudaksid ' +
        'koos funktsioneerida.',
    'andmetootlus': '(data processing) on andmete manipuleerimine arvuti abil. See tegevus sisaldab toorandmete ' +
        'teisendamist masin-loetavale kujule, nende liikumist läbi protsessori (CPU) ja mälu väljundseadmetesse ' +
        'ning väljundi vormindamist ja teisendamist sobivale kujule. Üldisemalt nimetatakse andmetöötluseks alati arvutil toimuvat protsessi, ' +
        'kui see sisaldab nimetatud tegevusi. Andmetöötlust võib käsitleda ka kitsamalt kui mõne organisatsiooni või ' +
        'äri tegevuseks vajalike andmete töötlemist (nt statistiline andmetöötlus). ',
    'operatsioonisusteem': '(operating system software) on tähtsaim süsteemitarkvara' +
        'hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, ' +
        'suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. ' +
        'Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, ' +
        'kasutades selleks käsukeelt või graafilist kasutajaliidest. ' +
        'Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, ' +
        'mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne. ' +
        'Tuntumad personaalarvutite operatsioonisüsteemid jagunevad kolme suurde gruppi: Windowsi erinevad versioonid, ' +
        'Mac OS ja UNIXi-laadsed operatsioonisüsteemid ',
    'susteemi_konfiguratsioonifailid': '(system configuration data) sisaldavad erinevaid andmeid, mis ' +
        'on vajalikud arvutisüsteemi enda toimimiseks. ' +
        'Sellised andmed on nii operatsioonisüsteemil kui ka rakendustarkvaral',
    'kasutaja_andmed': '(user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks ' +
        'arvutisüsteemi salvestatakse. '
};

// Funktsioon valitud sõnal põhineva selgituse kuvamiseks
function naitaselgitus() {
    const ValitudSona = document.getElementById('synaddropdownlist').value;
    const selgitusTekst = document.getElementById('selgitusTekst');

    if (ValitudSona) {
        selgitusTekst.textContent = selgitused[ValitudSona] || 'Selgitus puudub.';
    } else {
        selgitusTekst.textContent = '';
    }
}
