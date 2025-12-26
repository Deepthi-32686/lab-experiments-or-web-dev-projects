document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const outputDiv = document.getElementById('output');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const userName = userForm.elements.user_name.value;
        const userMood = userForm.elements.mood.value;

        if (userName) {
            outputDiv.textContent = `Hello, ${userName}! You are feeling ${userMood}.`;
        } else {
            outputDiv.textContent = `Please enter your name.`;
        }
    });
});