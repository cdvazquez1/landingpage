class Contact {
    constructor(name, email, tech, msg){
        this._name  = name;
        this._email = email;
        this._tech  = tech;
        this._msg   = msg;
    }
}

function save(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tech = document.getElementById("tech").value;
    let msg = document.getElementById("msg").value;
    let contact = new Contact(name, email, tech, msg);
    localStorage.setItem('contact', JSON.stringify(Object.values(contact)));

}

const showButton  = document.getElementById('show-modal');
const closeButton = document.getElementById('close-modal');
const modal       = document.getElementById('modal-dialog');

function toggleModal(e){
    e.preventDefault();
    modal.classList.toggle('hidden');
}

showButton.addEventListener('click', toggleModal);
showButton.addEventListener('click', save);
closeButton.addEventListener('click', toggleModal);