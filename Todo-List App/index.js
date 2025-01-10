const inputText = document.querySelector('#input')
const listContainer = document.querySelector('#list-container')
const button = document.querySelector('#button')

button.addEventListener('click',()=>{
    if (inputText==='') {
        alert("Please enter a text")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputText.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML ='\u00d7'//for creating x symbol
        li.appendChild(span)
    }
    inputText.value =''
})

listContainer.addEventListener('click',(e)=>{
    if (e.target.tagName ==='LI') {
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        //remove parent element like deleting whole li element
    }
},false)
