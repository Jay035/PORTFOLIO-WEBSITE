const hamburger = document.querySelector('#hamburger');
const inputField = document.querySelectorAll('input');
const submitButton = document.getElementById('send');
// const inputs = document.querySelectorAll('input');
const textArea = document.querySelectorAll('.text');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

for(const input of inputField){
    input.addEventListener('focus', () => {
        input.style.borderBottomColor = '#fff';
    });
    input.addEventListener('blur', () => {
        input.style.borderBottomColor = '#646468';
    });
    input.addEventListener('input', () => {
        input.style.backgroundColor = '#0a0a0a';
    });
};

// clear value after submit button is clicked
for(const text of textArea){
    submitButton.addEventListener('click', () =>{
        text.value = '';
    });
};


// console.log(nameTitle.length)


