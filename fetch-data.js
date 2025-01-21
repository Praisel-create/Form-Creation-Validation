async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        // Clear the container before displaying data
        dataContainer.innerHTML = '';

        // Create and populate the user list
        const userList = document.createElement('<ul>'); // Create a <ul> element
        users.forEach(user => {
            const listItem = document.createElement('<li>'); // Create <li> for each user
            listItem.textContent = user.name; // Set the user's name as text
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by clearing the container and displaying an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error("Error:", error.message);
    }
}

// Add an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    fetchUserData();
});