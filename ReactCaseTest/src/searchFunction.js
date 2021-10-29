
    let inputOfSearchArea = document.getElementById("search");
    inputOfSearchArea.addEventListener("keyup", searchFunction)
     
    function searchFunction(e) {
    e.preventDefault()

    let filter = inputOfSearchArea.value.toUpperCase();
    let divElementsOfCreatedJobs = document.querySelectorAll("#divContainer > div")

    for (let i = 0; i < divElementsOfCreatedJobs.length; i++) {

        let liElementsOfOneDiv = divElementsOfCreatedJobs[i].children

        for (let j = 0; j < liElementsOfOneDiv.length - 2; j++) {

            let currentJobRow = liElementsOfOneDiv[j].parentElement
            let txtValue = liElementsOfOneDiv[j].textContent.toUpperCase()

            if (txtValue.includes(filter)) {
                currentJobRow.style.display = ''
            } else {
                currentJobRow.style.display = 'none'
            }
        }
        if (filter === "") {
            divElementsOfCreatedJobs[i].style.display = ""
        }
    }
}

