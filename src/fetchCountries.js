 export default function fetchCountries(name){
   return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response =>{
       
        console.log(response.json())
    })
   
}