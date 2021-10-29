export function changeColor(currentEl, selectedType) {

    if (selectedType === 'Urgent') {
        currentEl.style.background = "red"
    }
    if (selectedType === 'Regular') {
        currentEl.style.background = "yellow"
    }
    if (selectedType === 'Trivial') {
        currentEl.style.background = "blue"
    }

}