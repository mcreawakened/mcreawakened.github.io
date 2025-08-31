function load() {
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

    fetch('https://mcreawakened.github.io/header_links.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('sharedNav').innerHTML = html
        });

    fetch('https://mcreawakened.github.io/map/survival/index.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('mapDiv').innerHTML = html
        });

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

}