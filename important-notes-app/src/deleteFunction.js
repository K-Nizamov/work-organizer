
let divContainerReference = document.getElementById('divContainer')
divContainerReference.addEventListener("click", deleteContent)

     function deleteContent(e) {

    if (e.target.textContent === 'Delete') {

        let currentDiv = e.currentTarget.firstElementChild
        
        divContainerReference.removeChild(currentDiv)
    }
}
