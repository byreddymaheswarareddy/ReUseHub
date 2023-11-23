document.addEventListener('DOMContentLoaded', function() {
    const categoryContent = document.getElementById('category-content');
    
    // Categories data (example data; replace with your own)
    const categoryData = {
        mobiles: {
            title: 'Mobiles',
            content: `
                <label for="mobileBrand">Select Mobile Brand:</label>
                <select id="mobileBrand">
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="modelName">Model Name:</label>
                <input type="text" id="modelName">
                <br></br>
                <label for="condition">Condition:</label>
                <select id="mobileBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="mobileprice">Price:</label>
                <input type="text" id="mobileprice">
                <br></br>
                <label for="mobileImage1">Upload Photo 1:</label>
                <input type="file" id="mobileImage1" accept="image/*" capture="camera">
                <br></br>
                <label for="mobileImage2">Upload Photo 2:</label>
                <input type="file" id="mobileImage2" accept="image/*" capture="camera">
                <br></br>
                <label for="mobileImage3">Upload Photo 3:</label>
                <input type="file" id="mobileImage3" accept="image/*" capture="camera">
                <br></br>
                <label for="mobileImage4">Upload Photo 4:</label>
                <input type="file" id="mobileImage4" accept="image/*" capture="camera">
                <br></br>
                <div class="button-container">
                <button id="submitMobile buttonsubmit">Submit</button>
                </div>
            `
        },
        books: {
            title: 'Books',
            content: `
                <label for="bookCategory">Select Book Category:</label>
                <select id="bookCategory">
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <!-- Add more book categories as options -->
                </select>
                <br></br>
                <label for="author">Author:</label>
                <input type="text" id="author">
                <br></br>
                <label for="condition">Condition:</label>
                <select id="mobileBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="bookprice">Price:</label>
                <input type="text" id="bookprice">

                <br></br>
                <label for="bookImage1">Upload Photo 1:</label>
                <input type="file" id="bookImage1" accept="image/*" capture="camera">
                <br></br>
                <label for="bookImage2">Upload Photo 2:</label>
                <input type="file" id="bookImage2" accept="image/*" capture="camera">
                <br></br>
                <label for="bookImage3">Upload Photo 3:</label>
                <input type="file" id="bookImage3" accept="image/*" capture="camera">
                <br></br>
                <label for="bookImage4">Upload Photo 4:</label>
                <input type="file" id="bookImage4" accept="image/*" capture="camera">
                <br></br>
                <div class="button-container">
                <button id="submitBook buttonsubmit">Submit</button>
                </div>
            `
        },
        clothes: {
            title: 'Clothes',
            content: `
                <label for="clothingCategory">Select Clothing Category:</label>
                <select id="clothingCategory">
                    <option value="T-shirts">T-shirts</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Jeans">Jeans</option>
                    <!-- Add more clothing categories as options -->
                </select>
                <label for="size">Size:</label>
                <select id="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <!-- Add more sizes as options -->
                </select>
                <br></br>
                <label for="brand">Brand:</label>
                <select id="size">
                    <option value="small">Zara</option>
                    <option value="medium">Allen Solly</option>
                    <option value="large">Levi's</option>
                    <option value="small">Louis Philippe</option>
                    <option value="medium">Flying Machine</option>
                    <!-- Add more sizes as options -->
                </select>
                <br></br>
                <label for="clothesprice">Price:</label>
                <input type="text" id="clothesprice">
                <br></br>
                <label for="clothesImage1">Upload Photo 1:</label>
                <input type="file" id="clothesImage1" accept="image/*" capture="camera">
                <br></br>
                <label for="clothesImage2">Upload Photo 2:</label>
                <input type="file" id="clothesImage2" accept="image/*" capture="camera">
                <br></br>
                <label for="clothesImage3">Upload Photo 3:</label>
                <input type="file" id="clothesImage3" accept="image/*" capture="camera">
                <br></br>
                <label for="clothesImage4">Upload Photo 4:</label>
                <input type="file" id="clothesImage4" accept="image/*" capture="camera">
                <br></br>
                <div class="button-container">
                <button id="submitClothes buttonsubmit">Submit</button>
                </div>
            `
        },
        'laptops/tv': {
            title: 'Laptops/TV',
            content: `
                <label for="Laptop/Tv">Laptop/Tv:</label>
                <select id="type">
                    <option value="Laptop">Laptop</option>
                    <option value="TV">TV</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="brand">Brand:</label>
                <select id="electronics">
                    <option value="Dell">Dell</option>
                    <option value="Apple">Apple</option>
                    <option value="Hp">Hp</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="modelName">Model Name:</label>
                <input type="text" id="modelName">
                <br></br>
                <label for="condition">Condition:</label>
                <select id="conditionBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    <!-- Add more brands as options -->
                </select>
                <br></br>
                <label for="laptopprice">Price:</label>
                <input type="text" id="laptopprice">
                <br></br>
                <label for="electronicsImage1">Upload Photo 1:</label>
                <input type="file" id="electronicsImage1" accept="image/*" capture="camera">
                <br></br>
                <label for="electronicsImage2">Upload Photo 2:</label>
                <input type="file" id="electronicsImage2" accept="image/*" capture="camera">
                <br></br>
                <label for="electronicsImage3">Upload Photo 3:</label>
                <input type="file" id="electronicsImage3" accept="image/*" capture="camera">
                <br></br>
                <label for="electronicsImage4">Upload Photo 4:</label>
                <input type="file" id="electronicsImage4" accept="image/*" capture="camera">
                </br></br>
                <div class="button-container">
                <button id="submitLaptopsTV buttonsubmit">Submit</button>
                </div>
            `
        },
        others: {
            title: 'Others',
            content: `
                <h3>Other Categories</h3>
                <p>Information about other categories goes here.</p>
                <br></br>
                <label for="mobileprice">Price:</label>
                <input type="text" id="mobileprice">
                <br></br>
                <label for="otherImage1">Upload Photo 1:</label>
                <input type="file" id="otherImage1" accept="image/*" capture="camera">
                <br></br>
                <label for="otherImage2">Upload Photo 2:</label>
                <input type="file" id="otherImage2" accept="image/*" capture="camera">
                <br></br>
                <label for="otherImage3">Upload Photo 3:</label>
                <input type="file" id="otherImage3" accept="image/*" capture="camera">
                <br></br>
                <label for="otherImage4">Upload Photo 4:</label>
                <input type="file" id="otherImage4" accept="image/*" capture="camera">
                <br></br>
                <div class="button-container">
                <button id="submitOthers buttonsubmit">Submit</button>
                </div>
            `
        }
    };
    

    // Function to update category content
    function updateCategoryContent(category) {
        const data = categoryData[category];
        if (data) {
            categoryContent.innerHTML = `
                <h2>${data.title}</h2>
                ${data.content}
            `;
        } else {
            categoryContent.innerHTML = '<p>Select a category to see details.</p>';
        }
    }

    // Event listener for category clicks
    const categoryElements = document.querySelectorAll('#categories .category');
    categoryElements.forEach(function(categoryElement) {
        categoryElement.addEventListener('click', function() {
            const category = this.querySelector('p').textContent.toLowerCase();
            updateCategoryContent(category);
        });
    });

    // Event listener for photo inputs
    const photoInputs = document.querySelectorAll('input[type="file"]');
    
    photoInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            const photo = this.files[0]; // Get the selected file
            if (photo) {
                // Handle the selected photo (e.g., upload to a server, display, etc.)
                const photoName = photo.name;
                alert(`Selected Photo: ${photoName}`);
            }
        });
    });
});
