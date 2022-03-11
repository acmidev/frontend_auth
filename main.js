
var email = document.getElementById('email')
var password = document.getElementById('password')
var repeatPassword = document.getElementById('repeat-password')
var register = document.getElementById('register')
var error = document.getElementById('error')
var registerContainer = document.getElementById('register-container')
var loginContainer = document.getElementById('login-container')


register.addEventListener('click', saveData)


function saveData() {
    const user = JSON.parse(window.localStorage.getItem('user'))
    

    if(user.email === email.value){
        error.innerText = "Account already exist"
    }else {
        if(!email.value =="" && !password.value=="" && !repeatPassword ==""){
            if(password.value === repeatPassword.value){
                
                const user = {
                    "email": email.value,
                    "password": password.value
                    
                }
                window.localStorage.setItem('user', JSON.stringify(user))
    
    
                console.log(repeatPassword.value)
    
                if(user.email && user.password){

                    
                    registerContainer.style.display = "none"
                    loginContainer.style.display = "grid"
                }
    
            }else{error.innerText = "Passwords not identical"}
        }else {
            error.innerText = "Complete all the fields"
            console.log('error complete all the fields')
        }
    
    }
    }

    
