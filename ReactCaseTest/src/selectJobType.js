export function selectedTypeOfJob(menuReference) {

    let jobTypeSelectIndex = menuReference.options.selectedIndex

    let selectedType = menuReference[jobTypeSelectIndex].value;

    return selectedType
}