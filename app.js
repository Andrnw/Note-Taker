const btn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
    const title = document.getElementById('title').value;
    

    const note = {
        title,
        txt,
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
    };

    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
    showNote();
}


const showNote = () => {
    const cardBody = document.getElementById('notesCard');
    
        cardBody.innerHTML = "";

        for(let i = 0; i < notes.length; i++){
            cardBody.innerHTML += `
            <div class = "card" style = "1px solid; margin-bottom:10px">
            <h5 class = "card-title" style = "color:#008000">${notes[i].title}</h5>
            <p class = "card-text">${notes[i].txt}</p>
            <div class = "buttons">
            <a class = "deleteButton" style = "color:#FF0000;border:1px solid red; width:50px" onclick = deleteButton(${notes[i].id})>Delete</a>
            <a class = "editButton" style = "color:#FF0000; border:1px solid red; width:50px" onclick = editButton(${notes[i].id})>Edit</a>
            <a class = "saveB" style = "color:#FF0000; border:1px solid red; width:50px; display:none" onclick = saveButton(${notes[i].id})>Save</a>
            </div>
            </div>
            `;

            
        }


}
showNote();

const editButton = (id) => {
    for(let i = 0 ; i < notes.length; i++){
        if(notes[i].id === id){
            const para = document.querySelector(".card-text");
            const editb = document.querySelector('.editButton');
            const saveB = document.querySelector('.saveB');
            para.contentEditable = "true";
            editb.style.display = "none";
            saveB.style.display = "block";
        }
    }
}

const saveButton = (id) => {
    for(let i = 0 ; i < notes.length; i++){
        if(notes[i].id === id){
            const para = document.querySelector(".card-text");
            const editb = document.querySelector('.editButton');
            const saveB = document.querySelector('.saveB');
            para.contentEditable = "false";
            editb.style.display = "block";
            saveB.style.display = "none";
        }
    }
}
const deleteButton = (id) => {
    for(let i = 0; i < notes.length; i++){
        if(notes[i].id === id){
            notes.splice(i,1);
        }
    }

    showNote();
    localStorage.setItem('notes',JSON.stringify(notes));
}

btn.addEventListener('click', () => {
    addNote();
})