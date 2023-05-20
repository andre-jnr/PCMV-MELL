const passwordInput = document.getElementById("senha","senha2")
const olho = document.getElementById("olho")
const olho2 = document.getElementById("olho2")

function abrir(){
    let typePassword = passwordInput.type =="password"


if (typePassword) {
    showPassword()

} else{
    hidePassword()

}

}

function showPassword() {
    passwordInput.setAttribute("type", "text")
    olho.setAttribute("src", "imagem/open.png")
    olho2.setAttribute("src", "imagem/open.png")
    
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
    olho.setAttribute("src", "imagem/closed.png")
    olho2.setAttribute("src", "imagem/closed.png")
   
}