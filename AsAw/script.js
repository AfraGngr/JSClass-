// ASYNCHRONOUS

// AJAX -> Asynchronous JavaScript and XML
// API -> Application Programming Interface

const countriesContainer = document.querySelector(".countries");
// function getCountries(country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     //console.log(this.responseText)
//     //const data = JSON.parse(this.responseText)[0]
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const content = `
//     <div class="card country" style="width: 18rem;">
//         <img class="country-image card-img-top" src="${data.flag}">
//         <div class="country-data card-body">
//             <h5 class="country-name card-title">${data.name}</h3>
//             <h5 class="country-region card-title">${data.region}</h5>
//             <p class="country-row card-text">${data.population}</p>
//             <p class="country-row card-text">${data.languages[0].name}</p>
//             <p class="country-row card-text">${data.currencies[0].name}</p>
//         </div>
//     </div>
//     `;

//     countriesContainer.insertAdjacentHTML("beforeend", content);
//     countriesContainer.style.opacity = 1
//   });
// }

// getCountries("portugal")

function renderCountry(data){
    const content = `
    <div class="card country" style="width: 18rem;">
        <img class="country-image card-img-top" src="${data.flag}">
        <div class="country-data card-body">
            <h5 class="country-name card-title">${data.name}</h3>
            <h5 class="country-region card-title">${data.region}</h5>
            <p class="country-row card-text">${data.population}</p>
            <p class="country-row card-text">${data.languages[0].name}</p>
            <p class="country-row card-text">${data.currencies[0].name}</p>
        </div>
    </div>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", content);
    countriesContainer.style.opacity = 1
}


// Callback Hell 

// function getCountriesAndNeighbours(country){
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();
  
//     request.addEventListener("load", function (){
//       const [data] = JSON.parse(this.responseText);
//       renderCountry(data)
//       console.log(data)
    
//       const [neighbours]= data.borders
//       // console.log(neighbours)

//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v2/alpha/${neighbours}`);
//       request2.send();

//      request2.addEventListener("load", function () {
//          // console.log(this.responseText)
//          const data2 = JSON.parse(this.responseText)
//          renderCountry(data2)
//     });
// })
// }

// getCountriesAndNeighbours("portugal")

// const req = fetch("https://restcountries.com/v2/name/portugal")
// console.log(req)

// // Promise Lifecycle Events
// // pending 
// // settled -> fulfilled , rejected
// // consuming promise 


// // CONSUME 
function getCountryData(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
        //console.log(res)
        if(!res.ok) throw new Error(`Country not found ${res.status}`)
        return res.json()
    })   
    .then(response => {
        //console.log(response)
        renderCountry(response[0])
        const neighbour = response[0].borders
        console.log(neighbour)
        for(let i = 0; i < neighbour.length; i++){
            fetch(`https://restcountries.com/v2/alpha/${neighbour[i]}`)
        }
        return 
    })
    .then(data =>{
        console.log("aaaaa", data)
        return data.json()
    })
    .then(neighbour => {
        console.log("22222", neighbour)
        renderCountry(neighbour)}
    ).catch(err => console.log(err.message))
}

getCountryData("turkey")
// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => getCountryData("portugal"))


// js behind the scenes
// single thread -> one job at a time 


// const name = "Kemal"

// const first = () => {
//     let a = 1
//     const b = second()

//     a = a + b
//     return a
// }

// const second = () => {
//     const c = 2
//     return c
// }

// const x = first()

// console.log("start")
// setTimeout(() => console.log("0 sec"), 0)
// Promise.resolve("Promise 1").then(res => console.log(res))
// Promise.resolve("Promise 2").then(res => {
//     for (let i = 0; i < 1000000000; i++){}
//     console.log(res)
// })
// console.log("end")



// ASYNC-AWAIT

// async function getData(){

// }

// const getCountry = async function(){
//     const res = await fetch(`https://restcountries.com/v2/name/germany`)
//     const data = await res.json()
//     renderCountry(data[0])
//     return 'You get germany'
// }

// // getCountry()
// // console.log("first")

// // console.log("1")
// // getCountry()
// // console.log("3")

// // const prom = fetch(`https://restcountries.com/v2/name/germany`)
// // console.log(prom)

// console.log("1")
// // const country = getCountry()
// // console.log(country)
// getCountry().then(res => console.log(res))
// console.log("3")


// Promise is a container for future use


// function getCountryData(country){
//     fetch(`https://restcountries.com/v2/nme/${country}`)
//     .then(res => res.json())   
//     .then(response => renderCountry(response[0]))
// }

// const a = 3
// a = 8

// try{
//     const x = 3
//     x = 5
// }catch(err){
//     console.log(err.message)
// }


// TRY CATCH

// const renderError = function(msg){
//     countriesContainer.insertAdjacentText("beforeend", msg)
//     countriesContainer.style.opacity = 1
// }

// const getCountry = async function(){
//     try{
//         const res = await fetch(`https://restcountries.com/v2/nme/germany`); 
//         if(!res.ok) throw new Error(`Something went wrong. ${res.status} Not found`);
//         const data = await res.json()
//         renderCountry(data[0])
//         return 'You get germany'
//     }catch(err){
//         renderError(err.message)
//         console.log(err.message)
//         throw err
//     }
// }

// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => getCountry())

// getCountry()
// .then(res => console.log("1", res))
// .catch(err => console.log("2", err))