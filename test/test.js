function showBuyForm() {
    const buyFormContainer = document.getElementById('buyFormContainer');
    buyFormContainer.classList.remove('d-none');
    // Optionally, you can add other classes or styles here.
    // buyFormContainer.classList.add('other-class');
}


function confirmOrder() {
    // Validate form data (you can use a validation library or custom validation)

    // Simulate payment process (this is just an example, replace it with a real payment gateway integration)
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (paymentMethod) {
        const selectedPaymentMethod = paymentMethod.value;
        // Implement payment logic based on the selected method
        alert(`Payment Method: ${selectedPaymentMethod}\nOrder Successfully Confirmed!`);
        // Redirect to home.html
        window.location.href = '../home/home.html';
    } else {
        alert('Please select a payment method.');
    }
}
