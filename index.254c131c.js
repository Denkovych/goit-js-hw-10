refs={searchCountry:document.querySelector("#search-box"),listCountry:document.querySelector(".country-list"),infoCountry:document.querySelector(".country-info")};fetch("https://restcountries.com/v3.1/name/ukraine?fields=name,capital,population,flags,languages").then((n=>n.json())).then((n=>{const o=function(n){return`<h2 class="country">${n.name.official}</h2>\n    <img src="${n.flags.svg}" alt="flag" width = 30px>\n<p class="info-country">Capital: ${n.capital}</p>\n<p class="info-country">Population: ${n.population}</p>\n<p class="info-country">Languages: ${n.languages}</p>`}(n[0]);console.log(n[0].languages),refs.infoCountry.innerHTML=o})).catch((n=>{console.log(n)}));
//# sourceMappingURL=index.254c131c.js.map
