// console.log("Hey")
// let referenceToPElement = document.querySelector("p")
// //referenceToPElement.innerHTML = "I changed it!"
// //console.log(referenceToPElement)

// for (let i = 0; i < referenceToPElement.length; i++) {
// referenceToPElement[i].innerHTML = "This is <p> number " + (i + 1)
// }

let buttonElement = document.querySelector("#my-btn")
buttonElement.addEventListener("click", () => {
    alert("Button Clicked! Yay!")
})