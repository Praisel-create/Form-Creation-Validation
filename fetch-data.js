async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);

        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        const users = await response.json();
    } catch (error) {
        dataContainer.textContent = '';
        console.error("Failed to load user data.");
    }
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul'); //create ul element
        users.array.forEach(user => {
            const listItem = document.createElement('li'); //create li element
            listItem.textContent = user.name;
            userList.append(listItem);
        });
        dataContainer.append(userList);
    }

document.addEventListener(DOMContentLoaded, function(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetchUserData(apiUrl);
});