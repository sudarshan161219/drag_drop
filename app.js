const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener("dragstart", dargStart)
fill.addEventListener("dragend", dargEnd)


for (const empty of empties) {
   empty.addEventListener('dragover', dargOver)
   empty.addEventListener('dragenter', dargEnter)
   empty.addEventListener('dragleave', dargLeave)
   empty.addEventListener('drop', dargDrop)
    
}


function dargStart() {
    this.className += ' hold'
    setTimeout(() =>  this.className = 'invisible', 0)
   
}

function dargEnd() {
  this.className = 'fill'
}

function dargOver(e) {
    e.preventDefault()
    // empties.classList.add('hovered')
}

function dargEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dargLeave() {
    this.className = 'empty'
    
}

function dargDrop() {
    this.className = 'empty'
    this.append(fill)
}