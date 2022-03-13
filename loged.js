const user = JSON.parse(window.localStorage.getItem('user'))
var loged = document.getElementById('loged')

if(user.email && user.password){
    console.log("logged in correctly")
}else {
    loged.innerText = "You are not logged in and cant acces to the content. Try to register first"
}