document.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.getElementById('cart');
    const cartTotalElement = document.getElementById('cartTotal');
  
    // Sample cart data (replace with your own)
    let cartItems = [
      // ... (as before)
      {
        name: 'Product 1',
        price: 25.99,
        quantity: 1,
        image: 'image1.jpg', // Replace with actual image path
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Product 2',
        price: 19.99,
        quantity: 1,
        image: 'image2.jpg', // Replace with actual image path
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    ];
  
    // Function to create an element with specified attributes and content
  function createElement(tag, classes, content) {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    if (content) {
      element.textContent = content;
    }
    return element;
  }

  // Event delegation for quantity and remove buttons
  cartContainer.addEventListener('click', function (event) {
    const target = event.target;
    const index = target.dataset.index;

    if (target.classList.contains('remove-item')) {
      if (index !== undefined) {
        cartItems.splice(index, 1);
        updateCart();
      }
    } else if (target.classList.contains('quantity-increase')) {
      if (index !== undefined) {
        cartItems[index].quantity++;
        updateCart();
      }
    } else if (target.classList.contains('quantity-decrease')) {
      if (index !== undefined && cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        updateCart();
      }
    }
  });

  // Function to update the cart display
  function updateCart() {
    cartContainer.innerHTML = ''; // Clear existing content
    let total = 0;

    cartItems.forEach((item, index) => {
      // Product Section
      const productSection = createElement('div', ['product-section', 'container-fluid', 'my-5', 'bg-black', 'text-white', 'row']);

      // Div 1: Product Images (Take up half the width on larger screens)
      const imageDiv = createElement('div', ['cart-item-image', 'mb-md-0', 'mb-3', 'col-md-6']);
      const itemImage = createElement('img', ['img-thumbnail', 'fixed-image-size']);
      itemImage.src = item.image;
      itemImage.alt = item.name;
      imageDiv.appendChild(itemImage);

      // Div 2: Product Details
      const detailsDiv = createElement('div', ['cart-item-details', 'flex-grow-1', 'col-md-6']);
      const itemName = createElement('h5', [], item.name);
      const itemDescription = createElement('p', [], item.details);

      // Quantity Display and Buttons
      const quantityDiv = createElement('div', ['quantity-control', 'mb-2']);
      const itemQuantity = createElement('p', ['mr-2'], `Quantity: ${item.quantity}`);

      const increaseButton = createElement('button', ['btn', 'btn-success', 'quantity-increase']);
      increaseButton.textContent = '+';
      increaseButton.dataset.index = index;

      const decreaseButton = createElement('button', ['btn', 'btn-danger', 'quantity-decrease']);
      decreaseButton.textContent = '-';
      decreaseButton.dataset.index = index;

      quantityDiv.appendChild(itemQuantity);
      quantityDiv.appendChild(decreaseButton);
      quantityDiv.appendChild(increaseButton);

      // Price and Total
      const itemPrice = createElement('p', [], `Price: $${item.price.toFixed(2)}`);
      const totalSection = createElement('p', [], `Total: $${(item.price * item.quantity).toFixed(2)}`);

      detailsDiv.appendChild(itemName);
      detailsDiv.appendChild(itemDescription);
      detailsDiv.appendChild(quantityDiv);
      detailsDiv.appendChild(itemPrice);
      detailsDiv.appendChild(totalSection);

      // Append Div 1 and Div 2 to Product Section
      productSection.appendChild(imageDiv);
      productSection.appendChild(detailsDiv);

      // Append Product Section to Cart Container
      cartContainer.appendChild(productSection);

      total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Initial update
  updateCart();
});