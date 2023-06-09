function $(selector, f) {
    if (f === undefined)
        return document.querySelector(selector)
    else
        document.querySelectorAll(selector).forEach(f)
}

function fetchJSON(url, token) {
    const headers = new Headers();
    if (token !== undefined) {
        headers.append("Authorization", `Bearer ${token}`)
    }
    return new Promise((resolve, reject) => fetch(url, {cache: "no-cache", headers: headers})
        .then(res => {
            if (res.status === 200) {
                resolve(res.json())
            } else {
                reject(res.status)
            }
        })
        .catch(err => reject(err)))
}

function postJSON(url, token, body) {
    return new Promise((resolve, reject) => fetch(`http://localhost:3000/${url}`, {
        cache: "no-cache",
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(body)
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                console.log(url + " OK")
                resolve("OK")
            } else {
                console.log(url + " ERROR")
                reject(res.status)
            }
        })
        .catch(err => reject(err)))
}

function loginPostJSON(url, body) {

    return new Promise((resolve, reject) => fetch(`http://localhost:3000/${url}`, {
        cache: "no-cache",
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(body)
    })
        .then(response => res = (response))
        //.then(response => response.json())
        //.then(response => res = (JSON.stringify(response)))
        .then(res => {
            if (res) {
                resolve(res.json())
            } else {
                reject(res.status)
            }
        })
        .catch(err => reject(err)))
}


function include(selector, url, urlcontroller) {
    fetch(url, {cache: "no-cache"})
        .then(res => res.text())
        .then(html => {
            $(`#${selector}`).innerHTML = html
            import(urlcontroller).then((controller) => {
                controller.default()
            })
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err)
        });
}


function navigate(view) {
    include('content', `views/${view}.html`, `../controllers/${view}.js`)
}

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

function reviver(key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }
    return value;
}

function getParameterByName(name) {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
