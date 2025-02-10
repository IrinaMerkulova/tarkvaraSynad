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
    const Venesynad = [
        'выполнение',
        'алгоритм',
        'черновик',
        'пользовательский интерфейс',
        'модель', 'схема базы данных',
        'стандартный',
        'цикл',
        'обработка данных',
        'структура данных',
        'среда разработки',
        'инструмент управления проектами',
        'проектирование',
        'итерация',
        'исправление',
        'улучшение',
        'модель водопада',
        'агильная модель',
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
    let currentWord = "";

    function randomSyna() {
    // esimese masiivi loomine


        //random sõna - arv
        const juhuslikSyna = Math.floor(Math.random() * synad.length);

        //võtame random sõna massivist
        currentWord = synad[juhuslikSyna];

        //lisame html-lehele
        document.getElementById("random-syna").innerHTML = currentWord ;
        document.getElementById("kontroll").value = "";
        document.getElementById("vastus").innerHTML = "";
    }
    function randomVeneSyna() {
        const juhuslikSyna = Math.floor(Math.random() * synad.length);

        currentWord = Venesynad[juhuslikSyna];

        //lisame html-lehele
        document.getElementById("random-venesyna").innerHTML = currentWord ;
        document.getElementById("kontrollVene").value = "";
        document.getElementById("venevastus").innerHTML = "";
    }

    function check() {
        const userInput = document.getElementById('kontroll').value.trim();
        const index = synad.indexOf(currentWord);

        if (index !== -1) {
            if (userInput.toLowerCase() === Venesynad[index].toLowerCase()) {
                document.getElementById("vastus").innerHTML = "Õige vastus";
                document.getElementById("vastus").style.color = "green";
            } else {
                document.getElementById("vastus").innerHTML = "Vale vastus. õige vastus on " + Venesynad[index];
                document.getElementById("vastus").style.color = "red";
            }
        }
    }
    function checkVene() {
        const userInput = document.getElementById('kontrollVene').value.trim();
        const index = Venesynad.indexOf(currentWord);

        if (index !== -1) {
            if (userInput.toLowerCase() === synad[index].toLowerCase()) {
                document.getElementById("venevastus").innerHTML = "Õige vastus";
                document.getElementById("venevastus").style.color = "green";
            } else {
                document.getElementById("venevastus").innerHTML = "Vale vastus. õige vastus on " + synad[index];
                document.getElementById("venevastus").style.color = "red";
            }
        }
    }
    function avaTermin(){
        const KoikTerminid = [
            "Andmetöötlus (data processing) on andmete manipuleerimine arvuti abil. See tegevus sisaldab toorandmete teisendamist masin-loetavale kujule, nende liikumist läbi protsessori (CPU) ja mälu väljundseadmetesse ning väljundi vormindamist ja teisendamist sobivale kujule. Üldisemalt nimetatakse andmetöötluseks alati arvutil toimuvat protsessi, kui see sisaldab nimetatud tegevusi. Andmetöötlust võib käsitleda ka kitsamalt kui mõne organisatsiooni või äri tegevuseks vajalike andmete töötlemist (nt statistiline andmetöötlus)",
            "Andmetöötlussüsteem (data processing system) koosneb üldisemalt riistvarast, tarkvarast ja inimestest. Andmetöötlussüsteem on süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone, eesmärgiga muuta need informatsiooniks, kasutajale vajalikule väljundandmete kujule. Viimane võib olla nii heli, video, graafika, arvude kui ka teksti kujul",
            "Riistvara (hardware) on üldisem mõiste tähistamaks igasuguseid tehnoloogilisi seadmeid (tooteid). Antud kontekstis peetakse silmas ennekõike arvuti riistvara. Viimase moodustavad kõik arvuti füüsilised komponendid: kuvar, protsessor, mälu, kettaseadmed, modem, printer, klaviatuur, hiir jms (vt moodul C). Arvutiriistvara on vajalik nii andmete sisestamisel, töötlemisel, salvestamisel kui ka töötlemise tulemuste esitamisel.",
            "Püsivara (firmware) - talitluslikult põhimälust sõltumatul viisil püsimällu (ROM) salvestatud käsu- ja andmekogum (programm ja vastav andmestik). Püsivara on reeglina seotud mõne riistvara komponendiga ning tihti ei ole teda võimalik muuta riistvara komponenti asendamata või vähemalt ei saa seda muuta iga seadme kasutaja. BIOS (basic input/output system) on üks püsivara näiteid. BIOS on kirjutatud arvuti ROM-i ja sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks.",
            "Operatsioonisüsteem (operating system software) on tähtsaim süsteemitarkvara hulka kuuluv programm, mis juhib arvuti tööd, haldab riistvararessursse, suhtleb perifeerseadmetega ja tagab rakendusprogrammide töötamise. Kasutajatel on võimalik suhelda vahetult operatsioonisüsteemiga, kasutades selleks käsukeelt või graafilist kasutajaliidest. Operatsioonisüsteemi ülesannete hulka kuulub ressursside jaotamine erinevate rakenduste vahel, mälu ühiskasutuse juhtimine, sisend- ja väljundseadmetega suhtlemine, kasutajate haldus jne.",
            "Rakendustarkvara (application software) on otseselt kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara. Kõige olulisema erinevusena tulekski pidada meeles, et erinevalt süsteemitarkvarast on rakendustarkvara otseselt suunatud just kasutaja eesmärkide täitmisele.",
            "Süsteemi konfiguratsioonifailid (system configuration data) sisaldavad erinevaid andmeid, mis on vajalikud arvutisüsteemi enda toimimiseks. Sellised andmed on nii operatsioonisüsteemil kui ka rakendustarkvaral..",
            "BIOS'i (sisend- ja väljundsüsteem) peamiseks funktsiooniks on arvuti ettevalmistamine selleks, et teisi tarkvaraprogramme, mida hoitakse meediaseadmetel (kõvakettad, CD plaadid ja disketid), saaks laadida, käivitada ja nendega töötada ehk on vahelüliks riistvara ja tarkvara vahel. Arvuti laadimisel käivitatakse kõigepealt BIOS. Arvuti võib olla ilma operatsioonisüsteemita, aga ilma BIOS'ta ei saa ükski arvuti töödata. Ilma BIOS'ta ei saa arvutit avada. ",
            "Rakendustarkvaraks nimetatakse teatud kindlat programmi või nende kogumit, mille paigaldamisel tekivad lisaks mitmed uued funktsioonid või võimalused ning see omakorda aitab tõsta arvutikasutaja töö efektiivsust. Näiteks rakendustarkvara kogum MS Office sisaldab programme Word (tekstitöötlus), Excel (tabelarvutus), Powerpoint (slaidiesitlus).",
            "Kasutaja andmed (user-defined data) on spetsiifilised rakendusele, mida kasutaja jaoks arvutisüsteemi salvestatakse."
        ];
        const termIndex = [
            "Andmetöötlus",
            "Andmetöötlussüsteem",
            "Riistvara",
            "Püsivara",
            "Operatsioonisüsteem",
            "Rakendustarkvara",
            "Süsteemi_konfiguratsioonifailid",
            "Bios",
            "rakendustarkvara",
            "Kasutaja_andmed"
        ];
        let terms = document.getElementById("terminid").value;
        let index = termIndex.indexOf(terms);
        if (index !== -1) {
            document.getElementById("terminiText").innerHTML = KoikTerminid[index];
        }

    }
