
import './css/styles.css';
//import {fetchCountries} from './fetchCountries.js';

refs={
    searchCountry : document.querySelector('#search-box'),
    listCountry: document.querySelector('.country-list'),
    infoCountry: document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;
let name = 'ukraine';

fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response =>{
       
    return response.json();
    })
    
    .then(country=>{
   const markup = makeMarkupCountry(country[0]);
   console.log(country[0].languages)
   refs.infoCountry.innerHTML = markup;
    })
    .catch(error=>{
        console.log(error);
    })

    
function makeMarkupCountry(country){
   
    return  `<h2 class="country">${country.name.official}</h2>
    <img src="${country.flags.svg}" alt="flag" width = 30px>
<p class="info-country">Capital: ${country.capital}</p>
<p class="info-country">Population: ${country.population}</p>
<p class="info-country">Languages: ${country.languages}</p>`
}