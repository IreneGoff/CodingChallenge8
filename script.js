document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const registrationDetails = document.getElementById('registrationDetails');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate that all fields are filled out
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventDate = document.getElementById('eventDate').value;
        const mealPreferences = document.querySelectorAll('input[name="meal"]:checked');
        
        if (!name || !email || !eventDate || mealPreferences.length === 0) {
            alert('Please fill out all fields.');
            return;
        }