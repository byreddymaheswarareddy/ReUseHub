// // Sample JavaScript to toggle the login status
// document.addEventListener('DOMContentLoaded', function() {
//     // Check if the user is logged in (you should implement this logic)
//     const userIsLoggedIn = true; // Change this based on your actual logic

//     const loginSection = document.getElementById('login-section');
//     const userStatus = document.getElementById('user-status');

//     if (userIsLoggedIn) {
//         // User is logged in, display profile picture
//         const profilePic = document.createElement('img');
//         profilePic.src = 'path/to/your-profile-pic.jpg'; // Replace with the actual path to the user's profile picture
//         profilePic.alt = 'Profile Picture';
//         profilePic.className = 'profile-pic'; // Apply the CSS class for the circular profile picture
//         userStatus.innerHTML = ''; // Clear the "Login" link
//         userStatus.appendChild(profilePic); // Add the profile picture
//     } else {
//         // User is not logged in, display the login link
//         const loginLink = document.createElement('a');
//         loginLink.href = 'login-page.html'; // Replace with the actual login page URL
//         loginLink.textContent = 'Login';
//         userStatus.innerHTML = ''; // Clear any existing content
//         userStatus.appendChild(loginLink); // Add the "Login" link
//     }
// });

// testimonials slider

document.addEventListener('DOMContentLoaded', function() {
    // Function to add testimonials dynamically
    function addTestimonial(author, content, imageSrc) {
        const testimonialContainer = document.getElementById('testimonials-container');
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('col-md-6', 'mb-4');

        testimonialDiv.innerHTML = `
            <div class="card">
                <img src="${imageSrc}" class="card-img-top" alt="${author}">
                <div class="card-body">
                    <p class="card-text">${content}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${author}</small>
                </div>
            </div>
        `;

        testimonialContainer.appendChild(testimonialDiv);
    }

    // Sample testimonials with images (you can replace with your own data)
    const testimonials = [
        { author: 'John Doe', content: 'Great service! I highly recommend it.', imageSrc: 'john-doe.jpg' },
        { author: 'Jane Smith', content: 'Excellent products and fast delivery.', imageSrc: 'jane-smith.jpg' },
    ];

    // Add the sample testimonials
    testimonials.forEach(testimonial => {
        addTestimonial(testimonial.author, testimonial.content, testimonial.imageSrc);
    });
});

// product slider
document.addEventListener('DOMContentLoaded', function() {
    // Sample product data (you can replace this with your own product data)
    const products = [
        { name: 'Product 1', description: 'Description for Product 1', price: '$19.99', image: 'product1.jpg' },
        { name: 'Product 2', description: 'Description for Product 2', price: '$29.99', image: 'product2.jpg' },
        { name: 'Product 3', description: 'Description for Product 3', price: '$39.99', image: 'product3.jpg' },
        { name: 'Product 1', description: 'Description for Product 1', price: '$19.99', image: 'product1.jpg' },
        { name: 'Product 2', description: 'Description for Product 2', price: '$29.99', image: 'product2.jpg' },
        { name: 'Product 3', description: 'Description for Product 3', price: '$39.99', image: 'product3.jpg' },
        { name: 'Product 1', description: 'Description for Product 1', price: '$19.99', image: 'product1.jpg' },
        { name: 'Product 2', description: 'Description for Product 2', price: '$29.99', image: 'product2.jpg' },
        { name: 'Product 3', description: 'Description for Product 3', price: '$39.99', image: 'product3.jpg' },
        { name: 'Product 1', description: 'Description for Product 1', price: '$19.99', image: 'product1.jpg' },
        { name: 'Product 2', description: 'Description for Product 2', price: '$29.99', image: 'product2.jpg' },
        { name: 'Product 3', description: 'Description for Product 3', price: '$39.99', image: 'product3.jpg' },
    ];

    // Reference to the container where product cards will be added
    const productContainer = document.querySelector('.row');

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'mb-5');

        card.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <a href="../cart/cart.html" class="btn btn-primary">Buy</a>
                    <a href="../product-details/product-details.html" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    }

    // Loop through the product data and create product cards
    products.forEach(product => {
        createProductCard(product);
    });
});


