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
const synad2 = [
    "исполнение",
    "алгоритм",
    "набросок",
    "интерфейс пользователя",
    "модель",
    "схема базы данных",
    "стандарт",
    "цикл",
   "обработка данных",
    "структура данных",
     "среда разработки",
    "инструмент управления проектом",
    "планирование",
    "итерация",
    "правка",
    "исправление",
    "модель коскада",
    "агильная модель",
    "спиральная модель",
    "инкриментальная модель",
    "требования",
    "реализация",
    "тестирование",
    "интеграция",
   "использование",
    "управление",
    "преимущество",
    "от",
    "бесконечный цикл",
    "развитие",
    "валидация"
];
const currentSynad = {
    vene:{
        currentSynaIndex:"",
        tolgeIndex:""
    },
    eesti:{
        currentSyna:"",
        tolge:""
    }
}

function randomSyna(keel){
    let arraySynad;

    // esimese masiivi loomine
    if(keel === "eesti") arraySynad = synad2;
    else arraySynad = synad;
    //random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * arraySynad.length);
    currentSynad[keel]["currentSyna"] = arraySynad[juhuslikSyna];
    currentSynad[keel]["tolge"] = keel === "eesti" ? synad[juhuslikSyna] : synad2[juhuslikSyna]

    console.log(currentSynad);
    document.getElementById(`${keel}-syna`).innerHTML = `Juhuslik ${keel === "eesti" ? "vene" : "eesti"} sõna: <strong>${currentSynad[keel]["currentSyna"]}</strong>`;
}
function checkSyna(keel){
    const vastusContainer = document.getElementById(`${keel}-vastus`);
    const input = document.getElementById(`${keel}-kontroll`);
    if(input.value === ""){
        vastusContainer.innerText = "";
        return;
    }
    let access = true;
    if(currentSynad[keel].tolge !== input.value){
        for(let i = 0; i < input.value.length; i++){
            if(input.value[i] === currentSynad[keel].tolge[i]){
                continue;
            }
            else{
                access = false;
                break;
            }
        }
    }
    else {
        vastusContainer.innerText = "Õige!";
        vastusContainer.style.color = "green";
        return;
    }
    vastusContainer.innerText = access ? "" : "Vale";
    vastusContainer.style.color = access ? "" : "red";
}

// -----------------------------------------------------------------------------
const selectTag = document.getElementById("select-tag");
const descriptionContainer = document.getElementById("description");
const wordsDescription = {
    "Andmetöötlus": "Andmetöötlus (data processing) on andmete manipuleerimine arvuti abil. See tegevus sisaldab toorandmete teisendamist masin-loetavale kujule, nende liikumist läbi protsessori (CPU) ja mälu väljundseadmetesse ning väljundi vormindamist ja teisendamist sobivale kujule. Üldisemalt nimetatakse andmetöötluseks alati arvutil toimuvat protsessi, kui see sisaldab nimetatud tegevusi. Andmetöötlust võib käsitleda ka kitsamalt kui mõne organisatsiooni või äri tegevuseks vajalike andmete töötlemist (nt statistiline andmetöötlus).",
    "Andmetöötlussüsteem": "Andmetöötlussüsteem (data processing system) koosneb üldisemalt riistvarast, tarkvarast ja inimestest. Andmetöötlussüsteem on süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone, eesmärgiga muuta need informatsiooniks, kasutajale vajalikule väljundandmete kujule. Viimane võib olla nii heli, video, graafika, arvude kui ka teksti kujul.",
    "Riistvara": "Riistvara (hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). Antud kontekstis peetakse silmas ennekõike arvuti riistvara. Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel.",
    "Püsivara": "Püsivara (firmware) - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ja andmekogum (programm ja vastav andmestik). Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks.",
    "Operatsioonisüsteem": "Operatsioonisüsteem (operating system software) on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, kasutades selleks käsukeelt või graafilist kasutajaliidest. Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne.",
    "Rakendustarkvara":"Rakendustarkvara (application software) on otseselt kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara. Kõige olulisema erinevusena tulekski pidada meeles, et erinevalt süsteemitarkvarast on rakendustarkvara otseselt suunatud just kasutaja eesmärkide täitmisele.",
    "Süsteemi konfiguratsioonifailid": "Süsteemi konfiguratsioonifailid (system configuration data) sisaldavad erinevaid andmeid, mis on vajalikud arvutisüsteemi enda toimimiseks. Sellised andmed on nii operatsioonisüsteemil kui ka rakendustarkvaral..",
    "Kasutaja andmed": "Kasutaja andmed (user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks arvutisüsteemi salvestatakse."
}

for(let i = 0; i < Object.keys(wordsDescription).length; i++){
    let option = document.createElement("option");
    option.value = Object.keys(wordsDescription)[i];
    option.innerHTML = Object.keys(wordsDescription)[i];
    selectTag.appendChild(option);
}

function selected(event){
    descriptionContainer.innerText = wordsDescription[selectTag.value];
}
