start = sessionStorage.getItem('start');
end = sessionStorage.getItem('end');
day = sessionStorage.getItem('day')
year = sessionStorage.getItem('year')
month = sessionStorage.getItem('month')
price = sessionStorage.getItem('price')
train_type = sessionStorage.getItem('train_type')

months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

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

const today = new Date(year, month, day)

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

next_day = tomorrow.getDate()
next_month = tomorrow.getMonth()

document.getElementById("limits").innerHTML = "Действует до 01:00 " + String(next_day) + " " + months[next_month - 1]

ticket_number = "3" + String(Math.trunc(Math.random() * (1000000000000 - 100000000000 + 1)) + 100000000000)
console.log(ticket_number)
document.getElementById('ticket-number').innerHTML = "Билет № " + ticket_number
