async function getStations() {
    const response = await fetch("/assets/data/stations.txt");
    const data = await response.text();
    const stations = [];
    const arr = data.split('\n');
    for (let s in arr) {
      const city = arr[s].split(":::")[0].trim();
      stations.push(city);
    }
    return stations;
}

let start_input = document.getElementById("start");
function displayStartNames(value) {
    start_input.value = value;
    removeElements();
}

async function setAutoStartCompletes() {
    let stations = await getStations();
    let sortedStations = stations.sort();
    start_input.addEventListener("keyup", (e) => {
        removeElements();
        let counter = 0;
        for (let station of sortedStations) {
            if (station.toLocaleLowerCase().startsWith(start_input.value.toLowerCase())
            && start_input.value.length > 2) {
                let listItem = document.createElement("li");
                listItem.classList.add("list-items");
                listItem.style.cursor = "pointer";
                listItem.setAttribute("onclick", "displayStartNames('" + station + "')");

                let word = "<b>" + station.substr(0, start_input.value.length) + "</b>";
                word += station.substr(start_input.value.length);
                
                listItem.innerHTML = word;
                document.querySelector("#start_list").appendChild(listItem);
                counter += 1;
            }
            if (counter >= 7) {
                break;
            }
        }
    });
}

let end_input = document.getElementById("end");
function displayEndNames(value) {
    end_input.value = value;
    removeElements();
}

async function setAutoEndCompletes() {
    let stations = await getStations();
    let sortedStations = stations.sort();
    end_input.addEventListener("keyup", (e) => {
        removeElements();
        let counter = 0;
        for (let station of sortedStations) {
            if (station.toLocaleLowerCase().startsWith(end_input.value.toLowerCase())
            && end_input.value.length > 2) {
                let listItem = document.createElement("li");
                listItem.classList.add("list-items");
                listItem.style.cursor = "pointer";
                listItem.setAttribute("onclick", "displayEndNames('" + station + "')");

                let word = "<b>" + station.substr(0, end_input.value.length) + "</b>";
                word += station.substr(end_input.value.length);
                
                listItem.innerHTML = word;
                document.querySelector("#end_list").appendChild(listItem);
                counter += 1;
            }
            if (counter >= 7) {
                break;
            }
        }
    });
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
    setAutoStartCompletes();
    setAutoEndCompletes();
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
