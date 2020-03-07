class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){ //Finished
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");

    let newP = document.createElement("p");
    newP.innerHTML = title;
    let newA = document.createElement("a");
    newA.innerHTML = "Remove";

  

    newNote.appendChild(newP);
    newNote.appendChild(newA).addEventListener('click', this.remove.bind(newNote));

    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(){  //finished
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){ //Finished
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let noteArray = JSON.parse(localStorage.getItem(`noteArray`));
      if(noteArray == null) {
        noteArray = [];
      }
      noteArray.push(this.title);
      console.log(noteArray);
      localStorage.setItem(`noteArray`, JSON.stringify(noteArray));
    }
  
  remove(){ //Finished
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
    }
  } 


class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();

    // pressing the enter key should also work

    this.keyPressEnter = document.querySelector("#txtAddNote");
      this.keyPressEnter.addEventListener("keydown", function(enterPress) {
        if(enterPress.keyCode == 13) {
          enterPress.preventDefault();
          document.querySelector("#btnAddNote").click();
      }
    });
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    let notesArray = JSON.parse(localStorage.getItem('noteArray'));
    if (notesArray.length > 0) {
      notesArray.forEach(title => {
        let note = new Note(title);
        note.add();
      }
      
    );
      
    }
  }
   
  createNote(e){   //Finished
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();
    note.saveToStorage();
    this.reset();
  }
  
  reset(){  //Finished
    // this function should reset the form 
    document.querySelector("#txtAddNote").value = '';
  }
  
}

let app = new App();