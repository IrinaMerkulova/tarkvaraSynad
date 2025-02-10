let valitudIndex = null;
let valitudIndexRu = null;

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

    const venesynad=[
        'исполнение',
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
        'планирование',
        'итерация',
        'улучшение',
        'улучшение',
        'каскадная модель',
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
        'проверка'
    ];

    const wordDescriptions = {
        'Andmetöötlus' : 'on andmete manipuleerimine arvuti abil. See tegevus sisaldab toorandmete teisendamist masin-loetavale kujule, nende liikumist läbi protsessori ja mälu väljundseadmetesse ning väljundi vormindamist ja teisendamist sobivale kujule. Üldisemalt nimetatakse andmetöötluseks alati arvutil toimuvat protsessi, kui see sisaldab nimetatud tegevusi. Andmetöötlust võib käsitleda ka kitsamalt kui mõne organisatsiooni või äri tegevuseks vajalike andmete töötlemist.',
        'Andmetöötlussüsteem' : '(data processing system) koosneb üldisemalt riistvarast, tarkvarast ja inimestest. Andmetöötlussüsteem on süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone, eesmärgiga muuta need informatsiooniks, kasutajale vajalikule väljundandmete kujule. Viimane võib olla nii heli, video, graafika, arvude kui ka teksti kujul.',
        'Riistvara' : 'on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). Antud kontekstis peetakse silmas ennekõike arvuti riistvara. Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel.',
        'Püsivara' : ' - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ja andmekogum (programm ja vastav andmestik). Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks.',
        'Operatsioonisüsteem' : 'on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, kasutades selleks käsukeelt või graafilist kasutajaliidest. Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne.'
    }

function randomSyna() {
    valitudIndex = Math.floor(Math.random() * synad.length);
    document.getElementById("random-syna").textContent = synad[valitudIndex];

    document.getElementById("kontroll").value = "";
    document.getElementById("vastus").textContent = "";
}

function kontrolliVastus() {
    if (valitudIndex === null) {
        document.getElementById("vastus").textContent = "Palun vali kõigepealt sõna!";
        document.getElementById("vastus").style.color = "black";
        return;
    }

    let kasutajaVastus = document.getElementById("kontroll").value.trim().toLowerCase();
    let õigeVastus = venesynad[valitudIndex].toLowerCase();

    let vastusElement = document.getElementById("vastus");

    if (kasutajaVastus === õigeVastus) {
        vastusElement.textContent = "Õige ";
        vastusElement.style.color = "green";
    } else {
        vastusElement.textContent = "Vale, proovi uuesti!";
        vastusElement.style.color = "red";
    }
}

function randomSynaRu() {
    valitudIndexRu = Math.floor(Math.random() * venesynad.length);
    let sõna = venesynad[valitudIndexRu];

    document.getElementById("random-syna-ru").textContent = sõna;

    document.getElementById("kontrollru").value = "";
    document.getElementById("vastusru").textContent = "";
}

function kontrolliVastusRu() {
    if (valitudIndexRu === null) {
        document.getElementById("vastusru").textContent = "Palun vali kõigepealt sõna!";
        document.getElementById("vastusru").style.color = "black";
        return;
    }

    const kasutajaVastus = document.getElementById("kontrollru").value.trim().toLowerCase();
    const õigeVastus = synad[valitudIndexRu].toLowerCase();

    let vastusElement = document.getElementById("vastusru");

    if (kasutajaVastus === õigeVastus) {
        vastusElement.textContent = "Õige!";
        vastusElement.style.color = "green";
    } else {
        vastusElement.textContent = "Vale, proovi uuesti!";
        vastusElement.style.color = "red";
    }
}

function updateWordSelect() {
    const wordSelect = document.getElementById("word-select");

    wordSelect.innerHTML = '<option value="">Выберите слово</option>';

    for (let word in wordDescriptions) {
        let option = document.createElement("option");
        option.value = word;
        option.textContent = word;
        wordSelect.appendChild(option);
    }
}

function showWordDescription() {
    const selectedWord = document.getElementById("word-select").value;
    const descriptionDiv = document.getElementById("word-description");

    if (selectedWord) {
        descriptionDiv.textContent = wordDescriptions[selectedWord];
    } else {
        descriptionDiv.textContent = "";
    }
}

updateWordSelect();

