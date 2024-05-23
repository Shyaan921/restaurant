const displayContacts = function() {
    let div = document.createElement('div')
    let contactOne = document.createElement('div')
    let contactTwo = document.createElement('div')
    let paraNameOne = document.createElement('p')
    let paraContactOne = document.createElement('p')
    let paraNameTwo = document.createElement('p')
    let paraContactTwo = document.createElement('p')

    div.classList = 'container'
    contactOne.classList = 'card'
    contactTwo.classList = 'card'

    paraNameOne.innerText = "Mr. Meow"
    paraContactOne.innerText = '789-513-463'

    paraNameTwo.innerText = 'Ms. Billi'
    paraContactTwo.innerHTML = '546-568-455'

    contactOne.appendChild(paraNameOne)
    contactOne.appendChild(paraContactOne)
    contactTwo.appendChild(paraNameTwo)
    contactTwo.appendChild(paraContactTwo)

    div.appendChild(contactOne)
    div.appendChild(contactTwo)

    return div
}

export { displayContacts };