handleLogin = () => { 
    const req = new Request("https://github.com/login/oauth/authorize")
    const headers = new Headers()
    headers.append('client_id','fd064980a8a92a69b281')
    headers.append('client_secret','fee177ef5644ef37b319ac177b88a6c68f2e1ace')
    fetch("https://github.com/login/oauth/authorize",{
        method: 'GET',
        headers: headers,
    }).then(data => {
    return data.json()
}).then(data => {console.log(data)})
}

onBodyLoad = () => {
    console.log("HIT!")
    let paramString = window.location.href.split('?')[1];
    let queryString = new URLSearchParams(paramString);

    for (let pair of queryString.entries()) {
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
        if(pair[0] == 'code'){
           fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ "client_id": "fd064980a8a92a69b281",
                                    "client_secret": "fee177ef5644ef37b319ac177b88a6c68f2e1ace",
                                    "code": pair[1]})
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        }
}
}
