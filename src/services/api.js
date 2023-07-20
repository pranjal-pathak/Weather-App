import axios, { AxiosError } from "axios";

const API_KEY = '5748ae12548c99289b681615b22f8f65';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(city) =>{
    try{
        let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    }
    catch(error)
    {
    alert('Please eneter a valid city name'); 
}
        
}
