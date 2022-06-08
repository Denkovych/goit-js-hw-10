
import './css/styles.css';
//import {fetchCountries} from './fetchCountries.js';
import countryCard from '../src/country-card.hbs';
refs={
    searchCountry : document.querySelector('#search-box'),
    listCountry: document.querySelector('.country-list'),
    infoCountry: document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;
let name = 'ukr';

fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response =>{
       
    return response.json();
    })
    
    .then(country=>{
    console.log(country[0]);
    })
    .catch(error=>{
        console.log(error);
    })