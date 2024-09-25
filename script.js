const MY_API_KEY = '224b9c25f8a55f9e01e72f8a4a986241';
const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${MY_API_KEY}&units=metric`;



async function getWeather(city) {
    try{
        const response = await fetch(url.replace('{city}' ,city));
        const data = await response.json();
        if (response.ok){
            const temp = document.getElementById('temp');
            const cityName = document.getElementById('city_name');
            const weatherLogo = document.getElementById('weather-logo');
            const humidity = document.getElementById('humidity');
            const wind = document.getElementById('wind');
            
            
            temp.innerHTML = `<h1>${data.main.temp}</h1`
            cityName.innerHTML =`<h2>${data.name}</h2>`
            switch (data.weather[0].main){
                case 'Rain':
                    weatherLogo.src = "images/rain.png"
                    break;
                case 'Clouds':
                    weatherLogo.src = "images/clouds.png"
                    break;
                case 'Clear':
                    weatherLogo.src = "images/clear.png"
                    break;   
                case 'Wind':
                    weatherLogo.src = "images/snow.png"
                    break;       
                case 'Drizzle':
                    weatherLogo.src = "images/drizzle.png"
                    break;
                case 'Mist':
                    weatherLogo.src = "images/mist.png"
                    break;           
                default:
                    console.log('No icon detected')
                }   
            wind.innerHTML = `<p>${data.wind.speed}</p>`
            humidity.innerHTML = `<p>${data.main.humidity}</p>`

                    

            




        }else{
            console.log("Erroe fetching weather data")
        }
    }catch(error){
        console.error("Error fetching data" , error);
    }
}

const button = document.getElementById('search_button');

button.addEventListener('click' , async() => {
    const city = document.getElementById('city').value.trim();

    if (city !== ""){
        await getWeather(city)
    }
})





