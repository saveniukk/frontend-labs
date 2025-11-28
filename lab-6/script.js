function fetchUserData() {
    const apiUrl = 'https://randomuser.me/api';
    
    const fetchButton = document.getElementById('fetchButton');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const userInfo = document.getElementById('userInfo');
    
    errorMessage.style.display = 'none';
    userInfo.style.display = 'none';
    loadingMessage.style.display = 'block';
    fetchButton.disabled = true;
    fetchButton.textContent = 'Завантаження...';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка! статус: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data.results || data.results.length === 0) {
                throw new Error('Дані користувача не знайдено');
            }
            
            const user = data.results[0];
            
            displayUserInfo(user);
            
            loadingMessage.style.display = 'none';
            userInfo.style.display = 'block';
            fetchButton.disabled = false;
            fetchButton.textContent = 'Отримати дані користувача';
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
            loadingMessage.style.display = 'none';
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Помилка: ${error.message}`;
            fetchButton.disabled = false;
            fetchButton.textContent = 'Отримати дані користувача';
        });
}

function displayUserInfo(user) {
    const userPicture = document.getElementById('userPicture');
    userPicture.src = user.picture.large;
    userPicture.alt = `Фото ${user.name.first} ${user.name.last}`;
    
    const userName = document.getElementById('userName');
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    userName.textContent = fullName;
    
    const userCity = document.getElementById('userCity');
    userCity.textContent = user.location.city;
    
    const userCountry = document.getElementById('userCountry');
    userCountry.textContent = user.location.country;
    
    const userPostcode = document.getElementById('userPostcode');
    userPostcode.textContent = user.location.postcode;
}

document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    
    fetchButton.addEventListener('click', function() {
        fetchUserData();
    });
});

