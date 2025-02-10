const synad = {
    'teostus': "исполнение",
    'algoritm': "алгоритм",
    'kavand': "набросок",
    'kasutajaliides': "интерфейс пользователя",
    'mudel': "модель",
    'andmebaasi skeem': "схема базы данных",
    'standart': "стандарт",
    'tsükkel': "цикл",
    'andmetöötlus': "обработка данных",
    'andmestruktuur': "структура данных",
    'arenduskeskkond': "среда разработки",
    'projektihalduse tööriist': "инструмент управления проектом",
    'kavandamine': "",
    'iteratsioon': "итерация",
    'parandus': "правка",
    'parandamine': "исправление",
    'koskmudel': "",
    'agiilne mudel': "агильная модель",
    'spiraalne mudel': "спиральная модель",
    'inkrementaalne mudel': "инкриментальная модель",
    'nõudmised': "требования",
    'realiseerimine': "реализация",
    'testimine': "тестирование",
    'integreerimine': "интеграция",
    'kasutamine': "использование",
    'hooldus': "управление",
    'eelised': "преимущество",
    'puudused': "от",
    'elutsükkel': "бесконечный цикл",
    'arendamine': "развитие",
    'valideerimine': "валидация"
};
const currentSynad = {
    vene:{
        currentSyna:"",
        tolge:""
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