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

const definitions = {
    "teostus": "Teostus on protsess, kus eelnevalt koostatud kavand viidakse ellu konkreetse tarkvaraprojekti raames. See hõlmab disaini teisendamist toimivaks koodiks, süsteemi moodulite arendamist ning lõppkokkuvõttes lahenduse testimist ja juurutamist.",
    "algoritm": "Algoritm on samm-sammuline juhiste kogum, mis määratleb, kuidas lahendada konkreetne probleem või täita ülesanne. See sisaldab selgelt määratletud sisendeid, väljundeid ning loogiliste sammude jada, mida järgides saavutatakse soovitud tulemus.",
    "kavand": "Kavand on eelnevalt koostatud plaan või kontseptsioon, mis kirjeldab süsteemi arhitektuuri, struktuuri ja funktsionaalsust. See toimib alusena edasisele arendustööle ning aitab tagada, et kõik nõuded ja eesmärgid on arvesse võetud.",
    "kasutajaliides": "Kasutajaliides on süsteemi osa, millega lõppkasutaja suhtleb. See võib olla graafiline (GUI), tekstipõhine või muu interaktiivne keskkond, mis võimaldab kasutajal süsteemi sisendeid anda ja väljundeid saada, muutes süsteemi kasutamise lihtsaks ja intuitiivseks.",
    "mudel": "Mudel on abstraktsioon, mis lihtsustab keerukaid süsteeme või protsesse, esitledes nende põhielemente ja seoseid. Tarkvaraarenduses kasutatakse mudeleid süsteemi arhitektuuri, andmete struktuuri või protsesside illustreerimiseks, võimaldades paremat planeerimist ja analüüsi.",
    "andmebaasi skeem": "Andmebaasi skeem on andmebaasi struktuuriline kirjeldus, mis määratleb tabelid, väljad, seosed ja piirangud. See dokumenteerib, kuidas andmed on organiseeritud ja kuidas erinevad andmeüksused omavahel suhestuvad, tagades andmete järjepidevuse ja terviklikkuse.",
    "standart": "Standart on ühtlustatud juhis või norm, mida järgivad tarkvaraarenduse ja -halduse protsessides. See määratleb parimad praktikad, tehnilised nõuded ja protseduurid, mille eesmärk on tagada kvaliteet, ühilduvus ja turvalisus kogu süsteemi elutsükli vältel.",
    "tsükkel": "Tsükkel tähistab korduvat protsessi või etappi, kus sama tegevust viiakse läbi järjestikustes sammudes. Näiteks arendustsükkel koosneb kavandamisest, teostusest, testimisest ja hooldusest, mida korratakse, et pidevalt täiustada ja uuendada tarkvaralahendust.",
    "andmetöötlus": "Andmetöötlus on andmete manipuleerimine arvuti abil, hõlmates toorandmete kogumist, nende töötlemist, analüüsi ja vormindamist informatsiooniks, mida saab kasutada otsuste tegemiseks või kasutajale esitamiseks. See protsess muudab andmed struktureerituks ja kasulikuks.",
    "andmestruktuur": "Andmestruktuur on organiseeritud andmete kogum, millel on kindel vorm ja struktuur, et võimaldada andmetele tõhusat juurdepääsu ja haldamist. Näiteks massiivid, lingitud loendid, puud ja graafid on erinevad andmestruktuurid, mida kasutatakse andmete salvestamiseks ja töötlemiseks.",
    "arenduskeskkond": "Arenduskeskkond on tarkvara ja tööriistade komplekt, mida kasutatakse rakenduste loomisel, testimisel ja juurutamisel. See hõlmab integreeritud arenduskeskkondi (IDE), kompilaatoreid, silureid ja muid abivahendeid, mis toetavad tarkvaraarenduse protsessi kogu elutsükli vältel.",
    "projektihalduse tööriist": "Projektihalduse tööriist on tarkvararakendus, mis aitab organiseerida, planeerida ja jälgida projekti edenemist. See võimaldab ülesannete jagamist, ajakava koostamist, ressursihalduse jälgimist ja meeskonna koostöö koordineerimist, et projekt saaks edukalt lõpule viidud.",
    "kavandamine": "Kavandamine on etapp, kus määratletakse süsteemi arhitektuur, funktsionaalsed nõuded ja disainielemendid enne arenduse alustamist. See protsess loob selge visiooni lahendusest ning loob aluse edasisele teostusele ja kvaliteedikontrollile.",
    "iteratsioon": "Iteratsioon on arendusprotsessi korduv tsükkel, mille käigus luuakse ja täiustatakse tarkvara järk-järgult. Iga iteratsioon annab võimaluse testida, hinnata ja parandada lahendust, tuginedes kasutajate ja arendajate tagasisidele.",
    "parandus": "Parandus viitab konkreetsete vigade või probleemide tuvastamisele ja nende lahendamisele tarkvaras. See hõlmab koodi või süsteemi komponentide muutmist, et taastada või parandada süsteemi nõuetekohast toimimist.",
    "parandamine": "Parandamine on protsess, mille käigus tehakse kindlaks ja kõrvaldatakse tarkvaras või süsteemis esinevad vead ning puudused. Eesmärgiks on parandada süsteemi töökindlust ja tagada, et see vastaks nõuetele ja kasutajate ootustele.",
    "koskmudel": "Koskmudel (tavaliselt viitab see traditsioonilisele, lineaarsele tarkvaraarenduse mudelile, mida mõnikord nimetatakse ka 'vesiputousmudeliks') kirjeldab arendusprotsessi, kus etapid nagu nõuete kogumine, disain, teostus, testimine ja juurutamine toimuvad järjestikustes ja kindlas järjekorras, ilma tagasiside või iteratsioonide võimaluseta.",
    "agiilne mudel": "Agiilne mudel on tarkvaraarenduse lähenemine, mis rõhutab paindlikkust, iteratiivsust ja pidevat tagasisidet. Selle mudeli korral arendatakse tarkvara lühikestes tsüklites, võimaldades kiiret reageerimist muutuvatele nõuetele ja kasutajate vajadustele.",
    "spiraalne mudel": "Spiraalne mudel on arendusprotsessi lähenemine, mis ühendab iteratiivse arenduse ja riskijuhtimise. Projekt liigub läbi mitme spiraalse tsükli, milles iga tsükli käigus teostatakse põhjalik planeerimine, riskianalüüs, teostus ja tagasiside, võimaldades järkjärgulist täiustamist ja probleemide ennetamist.",
    "inkrementaalne mudel": "Inkrementaalne mudel tähendab tarkvara arendamist samm-sammult, kus süsteem ehitatakse osade kaupa. Iga inkrement lisab uusi funktsioone või täiustab juba olemasolevaid, võimaldades kasutajatel varajast juurdepääsu osalistele lahendustele ja järkjärgulist süsteemi täiustamist.",
    "nõudmised": "Nõudmised on kirjeldused, mis määratlevad tarkvara või süsteemi funktsionaalsed ja mittefunktsionaalsed omadused. Need hõlmavad kasutajate vajadusi, süsteemi eesmärke ning tehnilisi ja turvanõudeid, mille alusel arendatakse ja testitakse lahendust.",
    "realiseerimine": "Realiseerimine on protsess, mille käigus kavandatud lahendus viiakse ellu. See hõlmab koodi kirjutamist, süsteemi moodulite integratsiooni ning kogu arendustsükli lõpuleviimist, et saavutada töökindel ja funktsionaalne tarkvaralahendus.",
    "testimine": "Testimine on süsteemi või tarkvara kontrollimise protsess, mille käigus hinnatakse, kas see vastab eelnevalt määratletud nõuetele ja töötab ootuspäraselt. Testimine võib hõlmata erinevaid meetodeid, nagu üksuse-, integratsiooni- ja süsteemitestid, et tagada toodangu kvaliteet ja töökindlus.",
    "integreerimine": "Integreerimine on erinevate tarkvarakomponentide või moodulite ühendamise protsess, mille käigus luuakse ühtne ja koordineeritud süsteem. Selle eesmärk on tagada, et eraldi arendatud osad töötavad koos harmooniliselt ja vastavad kogu süsteemi funktsionaalsetele nõuetele.",
    "kasutamine": "Kasutamine tähendab tarkvara või süsteemi reaalses keskkonnas rakendamist lõppkasutaja poolt. See hõlmab süsteemi käivitamist, selle funktsioonide rakendamist ning tulemuste hindamist vastavalt kasutaja vajadustele ja ootustele.",
    "hooldus": "Hooldus on tarkvara või süsteemi pikaajaline toetamine ja uuendamine, et säilitada selle töökindlus, turvalisus ja vastavus muutuvatele nõuetele. Hooldustööde hulka kuuluvad vigade parandamine, funktsionaalsuse täiustamine ja turvauuendused.",
    "eelised": "Eelised on positiivsed omadused või kasud, mida süsteem, tarkvara või arendusmudel pakub. Need võivad hõlmata paremat jõudlust, kasutajasõbralikkust, paindlikkust, skaleeritavust ja kuluefektiivsust, mis toetavad organisatsiooni eesmärke.",
    "puudused": "Puudused on negatiivsed omadused või piirangud, mis võivad mõjutada süsteemi või tarkvara toimivust, kasutatavust või turvalisust. Need võivad tuleneda disaini, teostuse või rakendamise etappidest ja nõuda hilisemat parendamist.",
    "elutsükkel": "Elutsükkel viitab tarkvara või süsteemi kogu arendusprotsessile alates kavandamisest ja teostusest kuni juurutamise, kasutamise ja hoolduseni. See kontseptsioon aitab struktureerida arendustööd ning tagada süsteemi järjepidev toimimine ja kvaliteet kogu oma eksisteerimise vältel.",
    "arendamine": "Arendamine on protsess, mille käigus luuakse, täiustatakse ja uuendatakse tarkvara või süsteemi. See hõlmab kavandamist, teostust, testimist, integreerimist ja hooldust, mille eesmärk on pakkuda kvaliteetset ja funktsionaalset lahendust kasutajate vajadustele.",
    "valideerimine": "Valideerimine on protsess, mille käigus kontrollitakse, kas loodud tarkvara või süsteem vastab kasutaja vajadustele ja ettenähtud nõuetele. See on kvaliteedi tagamise meetod, mis kinnitab, et arendusprotsessi käigus saavutatud lahendus on õige, sobiv ja kasutuskõlblik."
};

function naitaDefinitsioon() {
    const dropdown = document.getElementById('wordDropdown');
    const selectedWord = dropdown.value;
    const display = document.getElementById('definitionDisplay');
    if (selectedWord === "") {
        display.innerHTML = "Vali sõna";
    } else {
        display.innerHTML = definitions[selectedWord];
    }
}
