months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

function initDate(year, month, day) {
    const today = new Date(year, month - 1, day)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    next_day = tomorrow.getDate()
    next_month = tomorrow.getMonth()
    
    document.getElementById("limits").innerHTML = "Действует до 01:00 " + String(next_day) + " " + months[next_month]
}

function initTrainData(start, end, day, month, train_type) {
    document.getElementById('path').innerHTML = start + " — " + end
    document.getElementById('date').innerHTML = day + " " + months[month - 1];
    document.getElementById('price').innerHTML = price + " ₽";
    
    if (train_type == "Электричка") {
        document.getElementById('ticket_type').innerHTML = "Билет на электричку стандарт (обычный пригородный поезд)";
        document.getElementById('train_image').src = "assets/img/train1.png";
    } else {
        document.getElementById('ticket_type').innerHTML = "Билет на электричку «Ласточка»";
        document.getElementById('train_image').src = "assets/img/train2.png";
    }
    ticket_number = "3" + String(Math.trunc(Math.random() * (1000000000000 - 100000000000 + 1)) + 100000000000)
    document.getElementById('ticket-number').innerHTML = "Билет № " + ticket_number
}

function main() {
    start = localStorage.getItem('start');
    end = localStorage.getItem('end');
    day = localStorage.getItem('day')
    year = localStorage.getItem('year')
    month = localStorage.getItem('month')
    price = localStorage.getItem('price')
    train_type = localStorage.getItem('train_type')
    
    initTrainData(start, end, day, month, train_type);
    initDate(year, month, day)

    barcode_button = document.getElementById('barcode-button')
    barcode_button.addEventListener("click", () => {
        barcode_button.classList.add("clicked");
        setTimeout(() => {
            barcode_button.classList.remove("clicked");
        }, 500);
    });
}

main()
