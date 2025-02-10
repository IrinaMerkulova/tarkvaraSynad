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
    //vene keelde tõlgitud sõnade massiivi
    const synadvene=[
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
        'инкрементная модель',
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
    //random sõna - arv
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõna massivist
    const syna=synad[juhuslikSyna];

    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;

    function checkTranslation() {
        //Kontrollida, kas sõna on genereeritud
        if (praeguneIndex === null) {
            document.getElementById("result").textContent = "Genereeri kõigepealt sõna!";
            return;
        }
        // kasutaja sisestatud tõlge
        const kasutajaInput = document.getElementById("userTranslation").value.trim().toLowerCase();
        if (kasutajaInput === "") {
            document.getElementById("result").textContent = "Palun sisestage tõlge";
            return;
        }
        //Hangi õige tõlge ja võrdle
        const correctTranslation = synadvene[praeguneIndex].toLowerCase();

        if (kasutajaInput === correctTranslation) {
            document.getElementById("result").textContent = "Nii ongi!";
        } else {
            document.getElementById("result").textContent = "Vale! Õige tõlge on: " + synadvene[praeguneIndex];
        }
    }
}
