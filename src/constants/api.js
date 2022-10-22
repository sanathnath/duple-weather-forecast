const apiKey = "9b9d020fda6189eb11a1c3b54f276778";

export const getWeatherApi = (query)=>{
    return `http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${query}`
}