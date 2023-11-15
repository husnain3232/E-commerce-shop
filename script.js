let cart = [];
        let total = 0;

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            total += price;
            updateCart();
        }

        function updateCart() {
            const cartItemsElement = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');

            // Clear the cart display
            cartItemsElement.innerHTML = '';

            // Populate the cart display
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - $${item.price}`;
                cartItemsElement.appendChild(listItem);
            });

            // Update the total
            cartTotalElement.textContent = total;
        }