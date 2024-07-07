document.getElementById('pay-button').addEventListener('click', async function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name_input').value.trim();
    const email = document.getElementById('email_input').value.trim();
    const phone = document.getElementById('phone_input').value.trim();
    const vin = document.getElementById('vin_input').value.trim();
    const packageElement = document.querySelector('input[name="package"]:checked');
    
    // Validate form data
    if (!name || !email || !phone || !vin || !packageElement) {
        alert("Please fill in all the required fields and select a package.");
        return;
    }

    const packageValue = packageElement.value;
    const orderDueDate = "25/10/2024"; // Example due date, you may want to calculate or set it dynamically

    // Prepare payload
    const payload = {
        orderAmount: packageValue,
        orderDueDate: orderDueDate,
        customerName: name,
        customerMobile: phone,
        customerEmail: email,
        customerAddress: vin // Assuming VIN as address, adjust as necessary
    };

    try {
        // Send request to backend
        const response = await fetch('https://paypro-a7be355c2d61.herokuapp.com/api/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log(data);

        // Redirect to payment page or show success message
        if (data[1].Click2Pay) {
            window.location.href = data[1].Click2Pay;
        } else {
            alert("Payment link could not be generated. Please try again.");
        }
    } catch (error) {
        console.error('Error creating payment:', error);
        alert("An error occurred. Please try again.");
    }
});
