document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const registrationDetails = document.getElementById('registrationDetails');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate that all fields are filled 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventDate = document.getElementById('eventDate').value;
        const mealPreferences = document.querySelectorAll('input[name="meal"]:checked');
        
        if (!name || !email || !eventDate || mealPreferences.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        // Store meal preferences
        const mealPreferencesArray = Array.from(mealPreferences).map(input => input.value);

        // Display registration details
        registrationDetails.innerHTML = `
            <h2>Registration Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Meal Preferences:</strong> ${mealPreferencesArray.join(', ')}</p>
        `;
    });
});