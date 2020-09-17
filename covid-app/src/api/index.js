import axios from 'axios';
import CountryPicker from '../components/CountryPicker/CountryPicker';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let modifiedUrl = url;
    if(country){
        modifiedUrl = `${url}/countries/${country}`
    }
    try{
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(modifiedUrl);        
        return { confirmed, deaths, recovered, lastUpdate };

    } catch(error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async() => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}