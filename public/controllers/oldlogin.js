import BaseController from "./basecontroller.js";
import userModel from "../model/userModel.js";
class loginController extends BaseController{
    constructor() {
        super();
        this.model = new userModel();
    }

    async getLogin(event) {
        event.preventDefault();
        let password = document.getElementById('InputMdp').value;
        let pseudo = document.getElementById("InputEmail").value;
        try {
            const user = await this.model.getLogin(pseudo,password);
            console.log(pseudo,password);
            console.log(user.token);
            sessionStorage.setItem('token',user.token);
            navigate('home')
        }
        catch {

        }
    }
}

export default () => (window.loginController = new loginController())