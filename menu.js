document.addEventListener("DOMContentLoaded", function() {
    var mainDishToggle = document.querySelector('.switch input[type="checkbox"]');
    var mainDish = document.getElementById('mainDish');
    var sideDish = document.getElementById('sideDish');
    
    mainDishToggle.addEventListener('change', function() {
        if (mainDishToggle.checked) {
            mainDish.style.display = 'none';
            sideDish.style.display = 'block';
        } else {
            mainDish.style.display = 'block';
            sideDish.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var dessertDrinkToggle = document.querySelector('.switch-2 input[type="checkbox"]');
    var desserts = document.getElementById('desserts');
    var drinks = document.getElementById('drinks');
    
    dessertDrinkToggle.addEventListener('change', function() {
        if (dessertDrinkToggle.checked) {
            desserts.style.display = 'none';
            drinks.style.display = 'block';
        } else {
            desserts.style.display = 'block';
            drinks.style.display = 'none';
        }
    });
});
