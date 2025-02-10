document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("kontroll").addEventListener("input", kontrolliToiget);
    populateDropdown();
});

const synad = [
    "teostus", "algoritm", "kavand", "kasutajaliides", "mudel",
    "andmebaasi skeem", "standart", "tsükkel", "andmetöötlus", "andmestruktuur"
];

const synadTolge = [
    "реализация", "алгоритм", "план", "пользовательский интерфейс", "модель",
    "схема базы данных", "стандарт", "цикл", "обработка данных", "структура данных"
];

const wordDescriptions = {
    "Andmetöötlus": "Andmete manipuleerimine arvuti abil, sisaldades nende teisendamist ja töötlemist.",
    "Andmetöötlussüsteem": "Süsteem, mis teeb sisendandmetega mitmesuguseid matemaatilisi operatsioone.",
    "Riistvara": "Kõik arvuti füüsilised komponendid nagu kuvar, protsessor, mälu, klaviatuur jne.",
    "Püsivara": "Püsimällu salvestatud käsu- ja andmekogum, mis on seotud riistvara komponendiga.",
    "BIOS": "Püsivara, mis sisaldab instruktsioone klaviatuuri sisendi ja ekraaniväljundi tarbeks.",
    "Operatsioonisüsteem": "Programm, mis juhib arvuti tööd ja haldab riistvararessursse.",
    "Rakendustarkvara": "Kasutaja eesmärkide täitmiseks loodud ja installeeritud tarkvara.",
    "Süsteemi konfiguratsioonifailid": "Andmed, mis on vajalikud arvutisüsteemi enda toimimiseks.",
    "Kasutaja andmed": "Rakendustele spetsiifilised andmed, mida kasutaja arvutisüsteemi salvestab."
};

function randomSyna() {
    const juhuslikIndex = Math.floor(Math.random() * synad.length);
    const syna = synad[juhuslikIndex];
    const toigeTolge = synadTolge[juhuslikIndex];

    document.getElementById("random-syna").innerHTML = syna;
    document.getElementById("kontroll").value = "";
    document.getElementById("kontroll").setAttribute("data-correct", toigeTolge);
    document.getElementById("vastus").innerHTML = "";
}

function kontrolliToiget() {
    const kasutajaSisestus = document.getElementById("kontroll").value.trim().toLowerCase();
    const oigeVastus = document.getElementById("kontroll").getAttribute("data-correct").toLowerCase();
    const vastusElement = document.getElementById("vastus");

    if (kasutajaSisestus === oigeVastus) {
        vastusElement.innerHTML = " Õige!";
        vastusElement.style.color = "green";
    } else {
        vastusElement.innerHTML = " Vale!";
        vastusElement.style.color = "red";
    }
}

function populateDropdown() {
    const dropdown = document.getElementById("wordSelect");
    for (const word in wordDescriptions) {
        let option = document.createElement("option");
        option.value = word;
        option.textContent = word;
        dropdown.appendChild(option);
    }
}

function showDescription() {
    const selectedWord = document.getElementById("wordSelect").value;
    const descriptionElement = document.getElementById("description");
    if (selectedWord) {
        descriptionElement.textContent = wordDescriptions[selectedWord];
    } else {
        descriptionElement.textContent = "";
    }
}
