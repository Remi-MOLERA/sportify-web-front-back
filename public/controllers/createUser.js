class createUser {

    async createUser() {
        let createUser = {}
        createUser.firstname = document.getElementById("InputFirstname").value
        createUser.name = document.getElementById("InputName").value
        createUser.mail = document.getElementById("InputMail").value
        createUser.password = document.getElementById("InputPassword").value
        if (createUser.firstname && createUser.name && createUser.mail && createUser.password) {
            document.getElementById("errorAlert").style.display = "none"
            document.getElementById("errorAlertServer").style.display = "none"
            const response = await postFromRoute("users/create", createUser)
            if(response === "OK"){
                navigate('login')
            }
            else {
                document.getElementById("errorAlertServer").style.display = "block"
            }
        } else {
            document.getElementById("errorAlert").style.display = "block"
        }
    }
}

export default () => window.createUser = new createUser()