import { error } from 'console';
import https from 'https';
import readline from 'readline/promises';

const ApiKey = "98e9a3120288ab9bbff00521fb516087";
const BaseUrl = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const getWeather = async (city) => {
    const url = `${BaseUrl}?q=${city}&appid=${ApiKey}&units=metric`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`City not found. Please check the city name and try again.`);
        }
        const weatherData = await response.json();
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);

    }catch(error){
        console.log(error);
    }
}

const city = await rl.question("enter city name: ");
await getWeather(city);
rl.close();