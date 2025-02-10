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
    'kavandamine': "планирование",
    'iteratsioon': "итерация",
    'parandus': "правка",
    'parandamine': "исправление",
    'koskmudel': "модель коскада",
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
    'puudused': "отсутствие",
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