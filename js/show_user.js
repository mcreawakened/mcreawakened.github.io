

function showUser() {
    let user = getCookie('session_user');
    // document.getElementById("account_link").innerText="Account";
    // }
    if (user != null && user !== "") {
        fetch('https://mcreawakened.github.io/header_logged_in.html')
            .then((response) => {
                return response.text();
            })
            .then((html) => {
                document.getElementById('headerDiv').innerHTML = html
            });
    } else {
        fetch('https://mcreawakened.github.io/header.html')
            .then((response) => {
                return response.text();
            })
            .then((html) => {
                document.getElementById('headerDiv').innerHTML = html
            });
    }

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

function removeCookie(cname) {
    if( getCookie( name )!=="" ) {
        document.cookie = name + "=" +
            ((path) ? ";path="+path:"")+
            ((domain)?";domain="+domain:"") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}
