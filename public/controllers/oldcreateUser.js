import myModel from "../models/myModel.js";

class CreerCompteController{
    constructor() {
        this.model = new myModel()
    }

    verifForm()
    {
        const pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
        let firsname = document.getElementById("InputFirstname").value
        let name = document.getElementById("InputName").value
        let mail = document.getElementById("InputEmail").value
        let password = document.getElementById("InputMdp").value
        const danger = document.getElementById('danger')
        let bool1 = false
        let bool2 = false
        // Verification champs rempli
        if(firsname !== "" && password !== "" && name !== "" && mail !== ""){
            console.log("all here")
            bool1 = true
        }
        else {
            console.log("all not here")
            danger.innerText = "Veuillez remplir tous les champs"
            danger.style = ""
        }
        // Vérification mail
        if(!pattern.test(mail)) {
            console.log("not correct mail :", mail)
            danger.innerText = "Email incorrect"
            danger.style = ""
        }
        else {
            bool2 = true
        }
        if(bool1 && bool2){
            console.log("big")
        }

        /*this.model.creerCompte(username, password)*/
    }
}
export default () => window.CreerCompteController = new CreerCompteController()
