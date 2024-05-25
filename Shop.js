document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const menuCards = document.querySelectorAll('.menu-card');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    var buttons = document.getElementsByClassName("filter-button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].style.backgroundColor = ""; 
                buttons[j].style.color = ""; 
                buttons[j].style.fontWeight = "";
            }
            this.style.backgroundColor = "#BF9444"; 
            this.style.color = "white";
            this.style.fontWeight = "bold"; 
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            menuCards.forEach(card => {
                const tags = card.getAttribute('data-tags').split(' ');
                if (filterValue === 'all' || tags.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    function updateAddToCartButtons() {
        addToCartButtons.forEach(button => {
            button.textContent = 'Add to Cart';
        });
    }

    function changeButtonText(button) {
        button.textContent = 'Added to Cart';
        // Store the state in local storage
        localStorage.setItem(button.dataset.itemName);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            changeButtonText(this); // Change button text
            addToCart(this.dataset.itemName, this.dataset.itemImage, parseFloat(this.dataset.itemPrice)); // Add to cart
        });

        // Check local storage for button state on page load
        const state = localStorage.getItem(button.dataset.itemName);
        if (state === 'Added') {
            changeButtonText(button); // Change button text if state is 'Added'
        }
    });

    // Listen for cart change event
    window.addEventListener('cartChange', function () {
        // Call a function to update the "Add to Cart" buttons
        updateAddToCartButtons();
    });

    function addToCart(name, image, price) {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        var existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            // If the item exists, update its quantity
            existingItem.quantity++;
        } else {
            // If the item doesn't exist, add it to the cart
            cartItems.push({
                name: name,
                image: image,
                price: price,
                quantity: 1
            });
        }

        // Save the updated cart items to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Trigger the cart change event
        window.dispatchEvent(new Event('cartChange'));

    }
});
