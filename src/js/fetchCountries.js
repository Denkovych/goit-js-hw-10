export default function fetchCountries(name){
    fetch(`https://restcountries.com/v3.1/name/{name}`)
    .then(response =>{
        console.log(response.json())
    }).catch(console =>{
        console.log('error')
    })
}