// const inputEl = document.querySelector('#email').value;
// const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// const iconErrorEl = document.querySelector('.icon-error');
// const textErrorEl = document.querySelector('.text-error');
// const fromGroupEl = document.querySelector('.form-group');
// function validate(){

// }
function validate(){
const email=document.getElementById('text').value;
const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
if(reg.test(email)){
    document.querySelector('.text-error').innerText='Thanks for your information!';
    document.querySelector('.text-error').style.visibility='visible';
    document.querySelector('.error-icon').style.opacity='0';
    document.querySelector('.text-error').style.color='green';
}
else{
    document.querySelector('.text-error').innerText='Please provide us your valid email';
    document.querySelector('.text-error').style.visibility='visible';
    document.querySelector('.error-icon').style.opacity='1';
    document.querySelector('.text-error').style.color=inherit;
}
}