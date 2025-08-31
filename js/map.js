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

    fetch('https://mcreawakened.github.io/map/survival/')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById('mapDov').innerHTML = html
        });
}