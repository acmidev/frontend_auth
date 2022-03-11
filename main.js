
var email = document.getElementById('email')
var password = document.getElementById('password')
var repeatPassword = document.getElementById('repeat-password')
var register = document.getElementById('register')
var error = document.getElementById('error')


register.addEventListener('click', saveData)


function saveData() {

    if(!email.value =="" && !password.value=="" && !repeatPassword ==""){
        if(password.value === repeatPassword.value){
            
            console.log(repeatPassword.value)



        }else{error.innerText = "Passwords not identical"}
    }else {
        error.innerText = "Complete all the fields"
        console.log('error complete all the fields')
    }

}
