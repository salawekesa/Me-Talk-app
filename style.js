// selectors
const alert = document.querySelector(".alert");
const typeArea = document.querySelector(".typearea");
const submit = document.querySelector(".btn-submit");
const typed = document.getElementById("typed");
const bodyArea = document.querySelector(".bodyarea");
const feeling = document.querySelector(".feeling");
const text = document.getElementById("textt");

console.log("test");

// editing 
let editElement;
let editOption = false;
let editId = "";

// Event listeners
typeArea.addEventListener("submit", addfeeling);

// Functions
function addfeeling(e){
    e.preventDefault();
    const value = typed.value;

    const id = new Date().getTime().toString();


    if (value && !editOption) {
        showAlerts("Feeling saved", "success");
    }
    else if(value && editOption){
        console.log("editing");
    }
    else{
        showAlerts("Feeling cant be empty", "danger");
    }
};

// show alert - template strings
function showAlerts(text,action){
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`);
}

// remove alert - callback fxn
setTimeout(function(){
    alert.innerHTML = "";
    alert.classList.remove(`alert-${action}`);
}, 5000);
