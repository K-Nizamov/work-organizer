
import { createElements } from "./createElementsTemplate.js"
import { sortingJobs } from "./sortFunction.js"
import { changeColor } from "./backgroundColorChanging.js"
import {selectedTypeOfJob} from "./selectJobType.js"

let jobTitleReference = document.getElementById('inputField')
let jobTypeReference = document.querySelector('#jobDescription')
let createBtnReference = document.getElementById("createBtn")
let divContainerReference = document.getElementById('divContainer')

createBtnReference.addEventListener('click', createContent)
function createContent(e) {
    
    let jobTitle = jobTitleReference.value;
    
    let selectedType = selectedTypeOfJob(jobTypeReference)
    
    let pattern = /^[a-zA-Z\d]+$/

    if (jobTitle !== "" && selectedType !== "" && jobTitle.length <= 70 && jobTitle.match(pattern)) {

        let divElement = createElements('div', 'class', 'li-wrapper')
        let titleElement = createElements('li', 'class', 'li-style', jobTitle)
        let jobTypeElement = createElements('li', 'class', 'li-style', selectedType)
        let buttonsElement = createElements('li', 'class', 'li-style')
        let editBtn = createElements('button','class', 'record-section-btn','Edit')
        let deleteBtn = createElements('button','class', 'record-section-btn','Delete')

        divElement.appendChild(titleElement)
        divElement.appendChild(jobTypeElement)
        buttonsElement.appendChild(editBtn)
        buttonsElement.appendChild(deleteBtn)
        divElement.appendChild(buttonsElement)
        divContainerReference.appendChild(divElement)

        changeColor(divElement,selectedType)
        sortingJobs()
    }
    jobTitleReference.value = ""
    jobTypeReference.value = ""
}