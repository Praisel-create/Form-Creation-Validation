async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);

        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul'); //create ul element
        users.array.forEach(user => {
            const listItem = document.createElement('li'); //create li element
            listItem.textContent = user.name;
            userList.append(listItem);
        });
        dataContainer.append(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        console.error("Failed to load user data.");
    }
}

document.addEventListener(DOMContentLoaded, function(){
    fetchUserData();
});