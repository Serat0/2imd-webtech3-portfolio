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
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    localStorage.setItem('notes', JSON.stringify(notesArray))
    const notes = JSON.parse(localStorage.getItem('notes'));
    
    //if Statement
    let notesArray = [];
    
    notesArray.push(this.title)
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
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
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