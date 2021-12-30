// load -- onload
window.addEventListener("load", function(){
// getElementById
// let fName = document.getElementById("first-name")
// let lastName = document.getElementById("last-name")
// console.log(fName)
// console.log(lastName)

//getElementsByClassName
let formControl = document.getElementsByClassName("form-control")
// console.log(formControl)
// let val = document.getElementById("first-name").className
// console.log(val)
// getElementByTagName
let input = document.getElementsByTagName("input")
//console.log(input)

//querySelector
// let firstName = document.querySelector("#first-name")
//console.log(firstName)

let div = document.querySelectorAll("div")
//console.log(div)

let fControl = document.querySelector(".form-control")
console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")
console.log(fControlAll)

//console.log(fControlAll[1])
// document.querySelector("#first-name").value = "Utku"
// onst val = firstName.value
//console.log(val)

let formItems = document.querySelector(".form-items").innerText
//console.log(formItems)
//console.log(formItems)

//let first3 = document.querySelector("#first-three").innerHTML
let first3 = document.querySelector("#first-three")
// console.log(first3)

let check = document.querySelector(".form-check-label").innerText
console.log(check)

let fItems = document.querySelector(".form-items").textContent
//console.log(fItems)

// let firstName = document.querySelectorAll(".form-control")[0]
// //console.log(firstName)

// firstName.setAttribute("id", "first-name")
// //console.log(firstName)
// firstName.setAttribute("placeholder", "First Name")
// //console.log(firstName)

// firstName.setAttribute("class-name", "name class")
// console.log(firstName)

// const classAttr = firstName.getAttribute("class")
// console.log(classAttr)
// const classNameAttr = firstName.getAttribute("class-name")
// console.log(classNameAttr)

const firstName = document.getElementById("first-name")
console.log(firstName)

firstName.className = "form-control first-name"
console.log(firstName)
// const classProp = firstName.className
// console.log(classProp)

// firstName.className = "Hasan"
// console.log(firstName)

firstName.classList.add("Hasan")
// console.log(firstName)

// firstName.classList.add("Hasan")
// console.log(firstName)

firstName.classList.remove("form-control")
// console.log(firstName)

// firstName.setAttribute("class", "Htoker")
// console.log(firstName)
// firstName.className = "Gamze"
// console.log(firstName)


//let first3 = document.querySelector("#first-three")
// first3.innerHTML = `<div>Muhlise</div>`


let newDiv = document.createElement("div")
newDiv.setAttribute("class", "col-md-12")
let newInput = document.createElement("input")
newInput.setAttribute("type", "text")
newInput.setAttribute("name", "name")
newInput.setAttribute("placeholder", "Full Name")
newInput.setAttribute("class", "form-control")

newDiv.appendChild(newInput)
// console.log(newDiv)

// first3.appendChild(newDiv)

// insertBefore()
// parentNode.insertBefore(newNode, childNode)

const parentDiv = document.getElementById("email").parentNode
console.log(parentDiv)
const emailInput = document.getElementById("email")

parentDiv.insertBefore(newDiv, emailInput)


//console.log(first3.children[0])
//console.log(first3.firstElementChild())

// let node = document.createElement("div")
// let text = document.createTextNode("Utku")
// node.appendChild(text)
// first3.appendChild(node)

let positionDiv = ["Position", "Junior Web Developer", "Senior Web Developer", "Project Manager"]
let jobList = document.getElementById("job-list")

// jobList.innerHTML = `<option>A</option><option>b</option><option>c</option><option>d</option>`

// for (let i = 0; i < positionDiv.length; i++) {
//     jobList.innerHTML += `<option>${positionDiv[i]}</option>`
// }

// for(el of positionDiv){
//     jobList.innerHTML += `<option>${el}</option>`
// }

positionDiv.forEach(el => jobList.innerHTML += `<option value='${el}'>${el}</option>`)

const button = document.getElementById("submit")

// button.style.width ="25%"
// button.style.height ="5vh"
// button.style.backgroundColor = "antiquewhite"
// button.style.borderRadius = "15px"

button.style.cssText = `
    width : 25%;
    height: 5vh;
    background-color: antiquewhite;
    border-radius: 15px
`

const lastName = document.getElementById("last-name")
const charCount = document.getElementById("char-count")
const maxLenght = lastName.getAttribute("max-length")

const showRemaninChar = () => {
    console.log(lastName.value.length)
    // const val = lastName.value
    // charCount.innerText = lastName.value.length + "/" + maxLenght
    if(lastName.value.length == 0){
        charCount.style.display = "none"
    }else{
        console.log("else")
        charCount.style.display = "inline"
        charCount.innerText = lastName.value.length + "/" + maxLenght
    }
}
 
lastName.addEventListener("keyup", showRemaninChar)

const position = document.getElementById("position")

jobList.addEventListener("change", function() {
    position.innerText = `You selected ${jobList.value}`
})


})
