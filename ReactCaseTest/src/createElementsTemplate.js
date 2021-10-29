
    export function createElements (type,attribute,attributeValue,elementTextContent){
        let el = document.createElement(type)
        el.setAttribute(attribute, attributeValue)
        let text = elementTextContent

        if(typeof elementTextContent !== "undefined"){
            el.textContent = elementTextContent
        }
        return el
    }