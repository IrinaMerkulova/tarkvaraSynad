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

function selected(){
    const selectTag = document.getElementById("selectTag");

}