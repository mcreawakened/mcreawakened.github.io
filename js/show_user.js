

function showUser() {
    let date = localStorage.getItem('session_expiry');
    // if(date <= Date.now()) {
    //   localStorage.clear();
    //   alert("Session expired. Please log in again")
    // } else {
    let user= getCookie('session_user');
    alert("user: " + user);
    document.getElementById("account_link").innerText=user;
    document.getElementById("account").innerHTML = '<a class="navigation__link" id="account_link" href=""></a>';
    // }
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
