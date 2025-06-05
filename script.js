const userContainer = document.getElementById('user-container');
const reloadButton = document.getElementById('reload-button');

const fetchUserData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await res.json();
        displayUsers(users);
    } catch (error) {
        userContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
};
const displayUsers = (users) => {
    userContainer.innerHTML = ''; 
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
    });
};
fetchUserData();
reloadButton.addEventListener('click', fetchUserData);
