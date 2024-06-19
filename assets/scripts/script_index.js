const element = document.getElementById('data-button');

element.addEventListener("click", function() {
    start = document.getElementById('start').value
    sessionStorage.setItem('start', start)

    end = document.getElementById('end').value
    sessionStorage.setItem('end', end)

    day = document.getElementById('day').value
    sessionStorage.setItem('day', day)

    month = document.getElementById('month').value
    sessionStorage.setItem('month', month)

    year = document.getElementById('year').value
    sessionStorage.setItem('year', year)

    price = document.getElementById('price').value
    sessionStorage.setItem('price', price)

    option = document.getElementById('train_type')
    train_type = option.options[option.selectedIndex].text

    sessionStorage.setItem('train_type', train_type)
});