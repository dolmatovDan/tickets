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
