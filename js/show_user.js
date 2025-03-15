

function showUser() {
    let date = localStorage.getItem('session_expiry');
    // if(date <= Date.now()) {
    //   localStorage.clear();
    //   alert("Session expired. Please log in again")
    // } else {
    let user= getCookie('session_user');
    alert("user: " + user);
    document.getElementById("account_link").innerText="Account";
    // }

    fetch('https://mcreawakened.github.io/header.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('headerDiv').innerHTML = html
        });
    fetch('https://mcreawakened.github.io/footer.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('footerDiv').innerHTML = html
        });
    fetch('https://mcreawakened.github.io/updates.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('updateDiv').innerHTML = html
        });
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
