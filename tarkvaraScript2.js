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
    if(keel === "vene") arraySynad = Object.keys(synad);
    else arraySynad = Object.values(synad);
    //random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * arraySynad.length);
    currentSynad[keel]["currentSyna"] = arraySynad[juhuslikSyna];

    if(keel === "eesti"){
        const keys = Object.keys(synad);
        for(let i = 0; i < keys.length; i++){
            if(synad[keys[i]] === currentSynad[keel]["currentSyna"]){
                currentSynad[keel]["tolge"] = keys[i]
            }
        }
    }
    else{
        currentSynad[keel]["tolge"] = synad[currentSynad[keel]["currentSyna"]];
    }
    document.getElementById(`${keel}-syna`).innerHTML = `Juhuslik ${keel === "eesti" ? "vene" : "eesti"} sõna: <strong>${currentSynad[keel]["currentSyna"]}</strong>`;
}
function checkSyna(keel){
    const vastusContainer = document.getElementById(`${keel}-vastus`);
    const input = document.getElementById(`${keel}-kontroll`);
    const isCorrect = currentSynad[keel].tolge === input.value;
    vastusContainer.innerText = isCorrect ? "Õige!" : "Vale";
    vastusContainer.style.color = isCorrect ? "green" : "red";

}