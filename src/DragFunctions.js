const newDrag = (event) =>{
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let newChild = document.getElementById(data)
    let childrenArray = Array.from(newChild.children)
    let childCheck = false
    for (let i = 0; i < childrenArray.length; i++) {
        if (childrenArray[i] === ev.target) {
            childCheck = true
        }
    }
    if (!childCheck) {
        ev.target.appendChild(newChild);
    }
}

const letDrop = event => {
    allowDrop(event)
}

const newDrop = event => {
    drop(event)
}
export { newDrag, letDrop, newDrop }

