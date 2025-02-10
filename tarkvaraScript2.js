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
    if(keel === "vene") arraySynad = synad;
    else arraySynad = synad2;
    //random sõna - arv
    const juhuslikSyna = Math.floor(Math.random() * arraySynad.length);
    currentSynad[keel]["currentSyna"] = arraySynad[juhuslikSyna];
    console.log(currentSynad[keel]["currentSyna"], keel);
    if(keel === "eesti"){
        const keys = Object.keys(synad);

        console.log("eeei")
        for(let i = 0; i < keys.length; i++){
            if(synad[keys[i]] === currentSynad[keel]["currentSyna"]){
                currentSynad[keel]["tolge"] = keys[i]
            }
        }
    }
    else{
        currentSynad[keel]["tolge"] = synad[currentSynad[keel]["currentSyna"]];
    }
    //võtame random sõna massivist

    //lisame html-lehele
    document.getElementById(`${keel}-syna`).innerHTML = currentSynad[keel]["currentSyna"];
}
function checkSyna(keel){
    const vastusContainer = document.getElementById(`${keel}-vastus`);
    const input = document.getElementById(`${keel}-kontroll`);
    vastusContainer.innerText = currentSynad[keel].tolge === input.value ? "õige" : "vale";
}