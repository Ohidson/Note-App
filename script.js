const noteContainer = document.querySelector(".note-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNote(){
  noteContainer.innerHTML = localStorage.getItem("notes");
}
showNote();

function updateStorge(){
  localStorage.setItem("notes", noteContainer.innerHTML)
}

createButton.addEventListener('click', ()=>{
  let inputBox = document.createElement('p');
  const img = document.createElement('img');
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true")
  img.src = "./images/delete.jpeg";
  noteContainer.appendChild(inputBox).appendChild(img)
})

noteContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove();
    updateStorge();
  } else if(e.target.tagName === 'P'){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorge();
      }
    })
  }
})
