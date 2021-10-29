
import { selectedTypeOfJob } from "./selectJobType.js"
import { sortingJobs } from "./sortFunction.js"
import { changeColor } from "./backgroundColorChanging.js"

let jobTypePopReference = document.getElementById('pop-up-job-description')

    export function updateSelectedJob(currentJob,popUpScreenReference,divElement) {
        let selected = selectedTypeOfJob(jobTypePopReference)

        if (selected !== "") {
            currentJob.textContent = selected
            popUpScreenReference.style.display = "none"
        }
        changeColor(divElement, selected)
        sortingJobs()
    }