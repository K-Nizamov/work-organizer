
import { updateSelectedJob } from "./updateFunction.js"

let jobTypePopReference = document.getElementById('pop-up-job-description')
let popUpReference = document.getElementById('pop-up-screen')

document.body.addEventListener('click', editFunction)


let currentDiv;
let currentJobType;
let currentJobTitle;

function editFunction(e) {
    let target = e.target
    
    if (target.textContent === 'Edit' || target.textContent === "Update") {

        if (target.textContent === 'Edit') {
            currentDiv = target.parentElement.parentElement
            currentJobType = currentDiv.querySelectorAll('li')[1]
            currentJobTitle = currentDiv.querySelectorAll('li')[0].textContent

            popUpReference.style.display = "inline-block"

            jobTypePopReference.value = currentJobType.textContent

            let popUpTitleReference = document.getElementById('pop-up-title')
            popUpTitleReference.textContent = currentJobTitle
        }

        if (e.target.textContent === "Update") {
            updateSelectedJob(currentJobType,popUpReference,currentDiv)
        }
    }
}