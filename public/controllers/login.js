class login {

async login() {
    let postBody = {}
    postBody.mail = document.getElementById("InputMail").value
    postBody.password = document.getElementById("InputPassword").value
    if (postBody.mail && postBody.password) {
        document.getElementById("errorAlert").style.display = "none"
        const token = await LoginFromRoute("login", postBody)
        window.localStorage.setItem("jwt", token.token);
        if(token){
            navigate('entrainement')
        }
        else {
            document.getElementById("errorAlertPassword").style.display = "block"
        }
    } else {
        document.getElementById("errorAlert").style.display = "block"
    }
}
}

export default () => window.login = new login()