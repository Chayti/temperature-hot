// API key: a8dbc5a35563359d2cafa48fa50e3748

const API_KEY = 'a8dbc5a35563359d2cafa48fa50e3748';
const img = document.getElementById('w-icon');
const searchText = document.getElementById('search-text');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');

const search = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayDetails(data));
}

function displayDetails(data) {
    // console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.weather[0].main);

    city.innerText = data.name;
    temp.innerText = data.main.temp;
    condition.innerText = data.weather[0].main;
    // img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}