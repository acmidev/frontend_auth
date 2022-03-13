
var email = document.getElementById('email')
var password = document.getElementById('password')
var repeatPassword = document.getElementById('repeat-password')
var register = document.getElementById('register')
var errorContainer = document.getElementById('error-handler')
var errorContainerLogin = document.getElementById('error-handler-login')
var error = document.getElementById('error')
var errorLogin = document.getElementById('error-login')
var registerContainer = document.getElementById('register-container')
var loginContainer = document.getElementById('login-container')
var login = document.getElementById('login')
var loginEmail = document.getElementById('login-email')
var loginPassword = document.getElementById('login-password')


register.addEventListener('click', saveData)
login.addEventListener('click', compareData)


function saveData() {
    const user = JSON.parse(window.localStorage.getItem('user'))
    

    if(user.email === email.value){
        errorContainer.style.display = "flex"
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
    
            }else{
                errorContainer.style.display = "flex"
                error.innerText = "Passwords not identical"}
        }else {
            errorContainer.style.display = "flex"
            error.innerText = "Complete all the fields"
            console.log('error complete all the fields')
        }
    
    }
    }


    function compareData(){
        console.log("working")
        const user = JSON.parse(window.localStorage.getItem('user'))
        console.log(user)

        if(loginEmail.value === user.email && loginPassword.value === user.password){
            console.log(loginEmail)
            console.log(loginPassword)
            console.log("correct loged")
            window.location.replace("http://127.0.0.1:5500/loged.html")
        }else{
            console.log("error")
            errorContainerLogin.style.display = "flex"
            errorLogin.innerText = "Email or password incorrect"
        }
    }

    
