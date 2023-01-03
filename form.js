const form=document.getElementById("form");
const firstname=document.getElementById("fname");
const lastname=document.getElementById("lname");
const email=document.getElementById("mail");
const password=document.getElementById("pass");
const confirmpassword=document.getElementById("cpass");

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const firstnameValue=firstname.value.trim();
    const lastnameValue=lastname.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpasswordValue=confirmpassword.value.trim();

    if(firstnameValue===''){
        setError(firstname, 'firstname Cannot Be Blank')
    }
    else{
        setSuccess(firstname);
    }
    if(lastnameValue===''){
        setError(lastname, 'lastname Cannot Be Blank')
    }
    else{
        setSuccess(lastname);
    }
    if(emailValue===''){
        setError(email, 'email Cannot Be Blank')
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Not a valid Email')
    }
    else{
        setSuccess(email);
    }
    
    if(firstnameValue===''){
        setError(firstname, 'firstname Cannot Be Blank')
    }
    else{
        setSuccess(firstname);
    }

    if(passwordValue===''){
        setError(password, 'password Cannot Be Blank')
    }
    else{
        setSuccess(password);
    }

    if(confirmpasswordValue===''){
        setError(password, 'password Cannot Be Blank')
    }
    else if(passwordValue!==confirmpasswordValue){
        setError(confirmpassword, 'password Does Not Match')
    }
    else{
        setSuccess(password);
    }
    function setError(input, message){
        const formControl=input.parentElement;
        const span=formControl.querySelector('span');
        formControl.className='form-control error';
        span.innerText=message;
    }
    function setSuccess(input){
        const formControl=input.parentElement;
        formControl.className='form-control success';
    }
}