const addButton = document.querySelector(".add-button")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")



addButton.addEventListener("click",addListElement)
input.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        addListElement()
        input.value = ""
    }
})

// const addListElement = () => {
//     const val = input.value

//     if(val.trim() !== ""){
//         const listElement = document.createElement("li")
//         const content = document.createElement("span")
//         content.setAttribute("class", "list-element")
//         content.textContent = val
//         const deleteButton = document.createElement("span")
//         deleteButton.setAttribute("class", "delete-button")
//         deleteButton.textContent = "delete"
    
//         listElement.appendChild(content)
//         listElement.appendChild(deleteButton)
    
//         ul.appendChild(listElement)
    
//         const deleteButtons = document.querySelectorAll(".delete-button")
    
//         Array.from(deleteButtons).forEach(function (btn){
//             btn.addEventListener("click", function (e) {
//                 console.log(e)
//                 const li = e.target.parentElement
//                 li.remove()
//             })
//         })
//     }
//     else{
//         alert("Please enter a valid value")
//     }
//     input.value = ""
// }

function addListElement(){
    console.log("abab")
}