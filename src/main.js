const displayMainPara = function() {
    let para = document.createElement('p');
    para.innerHTML = "lorem ipsum smeo dkq djhwbif fnsoiu fhsbd fhiueh fsofurfb vmxnbv vbiwyrvw fiodfs  shdbfisg gksudhfi"

    let heading = document.createElement('h1')
    heading.innerText = "Welcome to meow meow meow"

    let image = document.createElement('img')
    image.src = '../src/chad-montano-eeqbbemH9-c-unsplash.jpg'

    return [image, heading, para]
};

export { displayMainPara };