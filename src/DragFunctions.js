const newDrag = (event) =>{
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

const letDrop = event => {
    allowDrop(event)
}

const newDrop = event => {
    drop(event)
}
export { newDrag, letDrop, newDrop }

