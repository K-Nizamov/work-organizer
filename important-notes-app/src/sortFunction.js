
            export function sortingJobs() {

                let divElementsOfCreatedJobs = document.querySelectorAll("#divContainer > div")

                let arrayOfLi = []

                for (const el of divElementsOfCreatedJobs) {
                    let jobTypeElement = el.children[1]
                    arrayOfLi.push(jobTypeElement)
                }

                if (arrayOfLi.length > 1) {
                    
                    let sortedArray = arrayOfLi.sort((a, b) => b.textContent.localeCompare(a.textContent))
                    
                    for (const el of sortedArray) {
                        let element = el.parentElement
                        document.getElementById('divContainer').appendChild(element)
                    }
                }
            }