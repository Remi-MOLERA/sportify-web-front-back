async function getFromRoute(route) {
    return (await fetchJSON("http://localhost:3000/" + route, getTokenFromClient()))
}

async function postFromRoute(route, body) {
    return (await postJSON(route, getTokenFromClient(), body))
}

async function LoginFromRoute(route, body) {
    return (await loginPostJSON(route, body))
}

function getTokenFromClient() {
    return window.localStorage.getItem("jwt");
}

async function getAllUser() {
    const users = await getFromRoute("users")
    const liste = document.getElementById("liste1")
    liste.innerHTML = ""
    for (const user of users) {
        console.log(user)
        liste.innerHTML += `<li>${user.idUser} - ${user.pseudo}  ${user.email}</li>`
    }
}

async function getUserById() {
    const userInput = document.getElementById("inputUserId").value
    if (userInput) {
        document.getElementById("errorAlert1").style.display = "none"
        const user = await getFromRoute(`users/${userInput}`)
        console.log(user)
        const liste2 = document.getElementById("liste2")
        liste2.innerHTML += `<li>${user.idUser} - ${user.pseudo} ${user.email}</li>`
    } else {
        document.getElementById("errorAlert1").style.display = "block"
    }
}



function preview() {
    const frame = document.getElementById("frame")
    const inputImage = document.getElementById("inputImage")
    frame.src = URL.createObjectURL(inputImage.files[0]);
}
