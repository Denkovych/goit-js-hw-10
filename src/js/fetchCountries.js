export default function fetchCountries(name){
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response =>{
        if (!response.ok) {
            throw new Error(response.status);}
        console.log(response.json())
    }).catch(console =>{
        
    })
}