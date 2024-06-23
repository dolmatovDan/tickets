let stations = ["Санкт-Петербург (Балтийский вокзал)", "Кавголово", "Девяткино", "Броневая"];
let sortedStations = stations.sort();
let input = document.getElementById("start");
input.addEventListener("keyup", (e) => {
    removeElements();
    let counter = 0;
    for (let station of sortedStations) {
        if (station.toLocaleLowerCase().startsWith(input.value.toLowerCase())
        && input.value != "") {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + station + "')");

            let word = "<b>" + station.substr(0, input.value.length) + "</b>";
            word += station.substr(input.value.length);
            
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
            counter += 1;
        }
        if (counter >= 5) {
            break;
        }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

function initValues() {
    document.getElementById('start').value = localStorage.getItem('start');
    document.getElementById('end').value = localStorage.getItem('end');

    today = new Date();
    document.getElementById('day').value = today.getDate();
    document.getElementById('month').value = today.getMonth() + 1;
    document.getElementById('year').value = today.getFullYear();

    document.getElementById('price').value = localStorage.getItem('price');

    if (localStorage.getItem('train_type') == "Ласточка") {
        document.getElementById('train_type').value = "Option 2";    
    } else {
        document.getElementById('train_type').value = "Option 1";
    }
}

function main() {
    initValues();

    const element = document.getElementById('data-button');
    
    element.addEventListener("click", function() {
        start = document.getElementById('start').value
        localStorage.setItem('start', start)
    
        end = document.getElementById('end').value
        localStorage.setItem('end', end)
    
        day = document.getElementById('day').value
        localStorage.setItem('day', day)
    
        month = document.getElementById('month').value
        localStorage.setItem('month', month)
    
        year = document.getElementById('year').value
        localStorage.setItem('year', year)
    
        price = document.getElementById('price').value
        localStorage.setItem('price', price)
    
        option = document.getElementById('train_type')
        train_type = option.options[option.selectedIndex].text
    
        localStorage.setItem('train_type', train_type)
    });
}

main()
