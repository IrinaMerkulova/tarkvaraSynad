const synad = [
    {
        et: 'teostus',
        ru: 'исполнение',
        kirjeldus: 'Protsess, kus tarkvara viiakse ellu.'
    },
    {
        et: 'algoritm',
        ru: 'алгоритм',
        kirjeldus: 'Samm-sammuline juhis probleemi lahendamiseks.'
    },
    {
        et: 'kavand',
        ru: 'план',
        kirjeldus: 'Tarkvara kujundus enne arendamist.'
    },
    {
        et: 'kasutajaliides',
        ru: 'пользовательский интерфейс',
        kirjeldus: 'Interaktsioon kasutaja ja süsteemi vahel.'
    },
    {
        et: 'mudel',
        ru: 'модель',
        kirjeldus: 'Abstraktsioon, mis kirjeldab süsteemi omadusi.'
    },
    {
        et: 'andmebaasi skeem',
        ru: 'схема базы данных',
        kirjeldus: 'Struktuur, mis määrab andmete organiseerimise.'
    },
    {
        et: 'standart',
        ru: 'стандарт',
        kirjeldus: 'Reeglid ja juhised tarkvara arendamiseks.'
    },
    {
        et: 'tsükkel',
        ru: 'цикл',
        kirjeldus: 'Protsessi korduv osa.'
    },
    {
        et: 'andmetöötlus',
        ru: 'обработка данных',
        kirjeldus: 'Andmete kogumine, salvestamine ja analüüs.'
    },
    {
        et: 'andmestruktuur',
        ru: 'структура данных',
        kirjeldus: 'Organiseeritud viis andmete talletamiseks.'
    },
    {
        et: 'arenduskeskkond',
        ru: 'среда разработки',
        kirjeldus: 'Tööriistad tarkvara loomiseks ja testimiseks.'
    },
    {
        et: 'projektihalduse tööriist',
        ru: 'инструмент управления проектом',
        kirjeldus: 'Tööriist projektide planeerimiseks ja jälgimiseks.'
    },
    {
        et: 'kavandamine',
        ru: 'планирование',
        kirjeldus: 'Tarkvara arenduse eesmärkide ja strateegiate määramine.'
    },
    {
        et: 'iteratsioon',
        ru: 'итерация',
        kirjeldus: 'Lõpliku lahenduse järk-järguline arendamine.'
    },
    {
        et: 'parandus',
        ru: 'исправление',
        kirjeldus: 'Vigade leidmine ja kõrvaldamine tarkvaras.'
    },
    {
        et: 'parandamine',
        ru: 'ремонт',
        kirjeldus: 'Süsteemi või komponendi korrastamine.'
    },
    {
        et: 'koskmudel',
        ru: 'костяк',
        kirjeldus: 'Põhilised funktsioonid, mis moodustavad süsteemi aluse.'
    },
    {
        et: 'agiilne mudel',
        ru: 'гибкая модель',
        kirjeldus: 'Jätkuv arendusmeetod, mis võimaldab kiiresti kohanduda.'
    },
    {
        et: 'spiraalne mudel',
        ru: 'спиральная модель',
        kirjeldus: 'Arendusprotsess, mis toimub spiraalsete tsüklitega.'
    },
    {
        et: 'inkrementaalne mudel',
        ru: 'инкрементальная модель',
        kirjeldus: 'Süsteemi arendamine järk-järguliselt.'
    },
    {
        et: 'nõudmised',
        ru: 'требования',
        kirjeldus: 'Süsteemi vajalikud omadused ja funktsioonid.'
    },
    {
        et: 'realiseerimine',
        ru: 'реализация',
        kirjeldus: 'Tarkvara arenduse tehniline teostamine.'
    },
    {
        et: 'testimine',
        ru: 'тестирование',
        kirjeldus: 'Süsteemi kvaliteedi kontrollimine ja veakindlus.'
    },
    {
        et: 'integreerimine',
        ru: 'интеграция',
        kirjeldus: 'Erinevate komponentide ühendamine ühtseks süsteemiks.'
    },
    {
        et: 'kasutamine',
        ru: 'использование',
        kirjeldus: 'Süsteemi praktiline rakendamine.'
    },
    {
        et: 'hooldus',
        ru: 'обслуживание',
        kirjeldus: 'Süsteemi pideva töökindluse tagamine.'
    },
    {
        et: 'eelised',
        ru: 'преимущества',
        kirjeldus: 'Süsteemi positiivsed omadused ja võimalused.'
    },
    {
        et: 'puudused',
        ru: 'недостатки',
        kirjeldus: 'Süsteemi piirangud ja probleemid.'
    },
    {
        et: 'elutsükkel',
        ru: 'жизненный цикл',
        kirjeldus: 'Süsteemi arengu ja kasutamise pidev tsükkel.'
    },
    {
        et: 'arendamine',
        ru: 'разработка',
        kirjeldus: 'Tarkvara loomise ja täiustamise protsess.'
    },
    {
        et: 'valideerimine',
        ru: 'валидация',
        kirjeldus: 'Süsteemi korrektsuse kontrollimine ja kinnitamine.'
    }
];
let praeguneKeel = 'et';

// Initsialiseerimine dokumendi laadimisel
document.addEventListener("DOMContentLoaded", function() {
    randomSyna();
    looDropdown();
    document.getElementById("kontroll").addEventListener("input", kontrolliSona);
});

function KeeleVahetamine() {
    praeguneKeel = praeguneKeel === 'et' ? 'ru' : 'et';
    randomSyna();
    document.getElementById("language-indicator").textContent =
        praeguneKeel === 'et' ? 'Eesti keeles' : 'На русском';
}

// Funktsioon juhusliku eesti keele sõna genereerimiseks ja kuvamiseks
function randomSyna() {
    const juhuslikIndex = Math.floor(Math.random() * synad.length);
    document.getElementById("random-syna").innerText =
        synad[juhuslikIndex][praeguneKeel];
}

// Funktsioon, mis kontrollib kasutaja sisendit õige tõlke suhtes.
function kontrolliSona() {
    const sisestatud = document.getElementById("kontroll").value.toLowerCase();
    const praeguneSona = document.getElementById("random-syna").textContent;
    const praeguneObj = synad.find(s => s[praeguneKeel] === praeguneSona);

    // Kontrollida, kas sisend vastab tõlkele
    const onÕige = sisestatud === praeguneObj[praeguneKeel === 'et' ? 'ru' : 'et'].toLowerCase();
    const vastusElement = document.getElementById("vastus");

    if (onÕige) {
        vastusElement.textContent = "Õige!";
        vastusElement.className = "correct";
        randomSyna();
        document.getElementById("kontroll").value = "";
    } else {
        vastusElement.textContent = "Vale!";
        vastusElement.className = "incorrect";
    }
}

function looDropdown() {
    const select = document.getElementById("synad-dropdown");

    // Tühjenda olemasolevad valikud
    select.innerHTML = '';

    // Lisa vaikimisi valik
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Vali sõna...";
    select.appendChild(defaultOption);

    // Lisa kõik sõnad
    synad.forEach(s => {
        const option = document.createElement("option");
        option.value = s.et;
        option.text = s.et;
        select.appendChild(option);
    });

    // Lisa muudatuse sündmuse kuulaja
    select.onchange = function() {
        const valitudSona = this.value;
        const kirjeldusDiv = document.getElementById("kirjeldus");
        const sonaObjekt = synad.find(s => s.et === valitudSona);

        if (sonaObjekt) {
            kirjeldusDiv.innerHTML = `
                <div class="description-box">
                    <h3>Eesti: ${sonaObjekt.et}</h3>
                    <p>Vene: ${sonaObjekt.ru}</p>
                    <p>Kirjeldus: ${sonaObjekt.kirjeldus}</p>
                </div>
            `;
        } else {
            kirjeldusDiv.innerHTML = '';
        }
    };
}