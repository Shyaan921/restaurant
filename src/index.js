import "./style.css"
import { displayMainPara } from "../src/main"
import { displayContacts } from "../src/contact"

let content = document.querySelector('#content')
let stuff = displayMainPara()
content.appendChild(stuff[0])
content.appendChild(stuff[1])
content.appendChild(stuff[2])

let contactBtn = document.querySelector('#contacts')
let homeBtn = document.querySelector('#home')
let menuBtn = document.querySelector('#menu')

contactBtn.addEventListener('click', function() {
    content.innerHTML = "";
    stuff = displayContacts()
    content.appendChild(stuff)
})

homeBtn.addEventListener('click', function() {
    content.innerHTML = '';
    let stuff = displayMainPara()
    content.appendChild(stuff[0])
    content.appendChild(stuff[1])
    content.appendChild(stuff[2])
});




