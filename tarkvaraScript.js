let correctEestiTranslation, correctVenekeelneTranslation;

const synad = [ // Эстонские слова
    'teostus', 'algoritm', 'kavand', 'kasutajaliides', 'mudel', 'andmebaasi skeem',
    'standart', 'tsükkel', 'andmetöötlus', 'andmestruktuur', 'arenduskeskkond',
    'projektihalduse tööriist', 'kavandamine', 'iteratsioon', 'parandus', 'parandamine',
    'koskmudel', 'agiilne mudel', 'spiraalne mudel', 'inkrementaalne mudel', 'nõudmised',
    'realiseerimine', 'testimine', 'integreerimine', 'kasutamine', 'hooldus', 'eelised',
    'puudused', 'elutsükkel', 'arendamine', 'valideerimine'
];

const tolgitudSynad = [ // Русские слова
    'реализация', 'алгоритм', 'проект', 'пользовательский интерфейс', 'модель',
    'схема базы данных', 'стандарт', 'цикл', 'обработка данных', 'структура данных',
    'среда разработки', 'инструмент управления проектом', 'планирование', 'итерация',
    'исправление', 'водопадная модель', 'агильная модель', 'спиральная модель',
    'инкрементная модель', 'требования', 'реализация', 'тестирование', 'интеграция',
    'использование', 'обслуживание', 'преимущества', 'недостатки', 'жизненный цикл',
    'разработка', 'валидация'
];

function generateEestiSyna() {
    const randomEestiIndex = Math.floor(Math.random() * synad.length);
    let randomVenekeelneIndex = Math.floor(Math.random() * tolgitudSynad.length);

    // Убедимся, что слово не будет одинаковым на обоих языках
    while (randomVenekeelneIndex === randomEestiIndex) {
        randomVenekeelneIndex = Math.floor(Math.random() * tolgitudSynad.length);
    }

    // Сохраняем правильный перевод
    correctEestiTranslation = tolgitudSynad[randomEestiIndex];

    // Добавляем случайное эстонское слово на страницу
    document.getElementById("eestikeelneSyna").innerHTML = synad[randomEestiIndex];
    document.getElementById("kontrollEesti").value = ''; // Очищаем поле ввода
}

function generateVenekeelneSyna() {
    const randomEestiIndex = Math.floor(Math.random() * synad.length);
    let randomVenekeelneIndex = Math.floor(Math.random() * tolgitudSynad.length);

    // Убедимся, что слово не будет одинаковым на обоих языках
    while (randomVenekeelneIndex === randomEestiIndex) {
        randomVenekeelneIndex = Math.floor(Math.random() * tolgitudSynad.length);
    }

    // Сохраняем правильный перевод
    correctVenekeelneTranslation = synad[randomVenekeelneIndex];

    // Добавляем случайное русское слово на страницу
    document.getElementById("venekeelneSyna").innerHTML = tolgitudSynad[randomVenekeelneIndex];
    document.getElementById("kontrollVenekeelne").value = ''; // Очищаем поле ввода
}

function checkEestiTranslation() {
    const userInputEesti = document.getElementById("kontrollEesti").value.trim().toLowerCase();
    const answerDiv = document.getElementById("vastus");

    if (userInputEesti === correctEestiTranslation.toLowerCase()) {
        answerDiv.innerHTML = "Õige tõlge!";
        answerDiv.style.color = "green";
    } else {
        answerDiv.innerHTML = "Vale tõlge, proovige uuesti!";
        answerDiv.style.color = "red";
    }
}

function checkVenekeelneTranslation() {
    const userInputVenekeelne = document.getElementById("kontrollVenekeelne").value.trim().toLowerCase();
    const answerDiv = document.getElementById("vastus");

    if (userInputVenekeelne === correctVenekeelneTranslation.toLowerCase()) {
        answerDiv.innerHTML = "Õige tõlge!";
        answerDiv.style.color = "green";
    } else {
        answerDiv.innerHTML = "Vale tõlge, proovige uuesti!";
        answerDiv.style.color = "red";
    }
}

// Функция для отображения описания выбранного слова
function showDescription() {
    const wordSelect = document.getElementById("wordSelect");
    const selectedWord = wordSelect.value;
    const descriptionDiv = document.getElementById("wordDescription");

    let description = "";

    switch(selectedWord) {
        case "Andmetöötlus":
            description = "(data processing) on andmete manipuleerimine arvuti abil. See tegevus sisaldab toorandmete teisendamist masin-loetavale kujule, nende liikumist läbi protsessori (CPU) ja mälu väljundseadmetesse ning väljundi vormindamist ja teisendamist sobivale kujule. Üldisemalt nimetatakse andmetöötluseks alati arvutil toimuvat protsessi, kui see sisaldab nimetatud tegevusi. Andmetöötlust võib käsitleda ka kitsamalt kui mõne organisatsiooni või äri tegevuseks vajalike andmete töötlemist (nt statistiline andmetöötlus)";
            break;
        case "Andmetöötlussüsteem":
            description = "(data processing system) koosneb üldisemalt riistvarast, tarkvarast ja inimestest. Andmetöötlussüsteem on süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone, eesmärgiga muuta need informatsiooniks, kasutajale vajalikule väljundandmete kujule. Viimane võib olla nii heli, video, graafika, arvude kui ka teksti kujul. ";
            break;
        case "Riistvara":
            description = "(hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). Antud kontekstis peetakse silmas ennekõike arvuti riistvara. Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel. ";
            break;
        case "Püsivara":
            description = "(firmware) - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ja andmekogum (programm ja vastav andmestik). Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks. ";
            break;
        case "Operatsioonisüsteem":
            description = "(operating system software) on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, kasutades selleks käsukeelt või graafilist kasutajaliidest. Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne. ";
            break;
        case "Rakendustarkvara":
            description = "(application software) on otseselt kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara. Kõige olulisema erinevusena tulekski pidada meeles, et erinevalt süsteemitarkvarast on rakendustarkvara otseselt suunatud just kasutaja eesmärkide täitmisele. ";
            break;
        case "Süsteemi konfiguratsioonifailid":
            description = "(system configuration data) sisaldavad erinevaid andmeid, mis on vajalikud arvutisüsteemi enda toimimiseks. Sellised andmed on nii operatsioonisüsteemil kui ka rakendustarkvaral.";
            break;
        case "Kasutaja andmed":
            description = "(user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks arvutisüsteemi salvestatakse. ";
            break;
        case "BIOS":
            description = "osa süsteemist, mis on vajalik sisendi ja väljundi jaoks.";
            break;
        case "Draiver":
            description = "utiliitprogramm, mis teeb lisaseadmed operatsioonisüsteemile kättesaadavaks ja kasutatavaks.";
            break;
        default:
            description = "Valige sõna, et näha kirjeldust.";
    }

    descriptionDiv.innerHTML = description;
}


// Инициализация случайного слова при загрузке страницы
generateEestiSyna();
generateVenekeelneSyna();
