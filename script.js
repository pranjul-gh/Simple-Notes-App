const addbtn = document.querySelector("#addBtn")
const main = document.querySelector('#main')

const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea")
    const data = []
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    // console.log(data)
    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
    localStorage.setItem("notes",JSON.stringify(data))
}   }

addbtn.addEventListener('click', function(){
    addNote()
})  

const addNote = (text="")=>{
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="trash fa-solid fa-trash"></i>
    <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea>${text}</textarea>
    `
    
    note.querySelector('.trash').addEventListener('click',()=>{
        note.remove()
        saveNotes()
    })

    note.querySelector('.save').addEventListener('click',()=>{
        saveNotes()
    })

    note.querySelector("textarea").addEventListener("focusout",()=>{saveNotes()})

    main.appendChild(note)
    saveNotes()
}

(
    ()=>{
        const LSnotes = JSON.parse(localStorage.getItem("notes"))
        // console.log(notes)
        if (LSnotes === null){
            addNote()
        }
        else{
        LSnotes.forEach((LSnotes)=>{
            addNote(LSnotes)
            })
        }
    }
)()

