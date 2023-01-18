handleLogin = () => { 
    const req = new Request("https://github.com/login/oauth/authorize")
    const headers = new Headers()
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Origin', 'https://rahulkapoor-bbd.github.io/loginTest/')
    headers.append('client_id','fd064980a8a92a69b281')
    fetch("https://github.com/login/oauth/authorize",{
        method: 'GET',
        headers: headers,
        mode: 'cors',
        client_id: 'fd064980a8a92a69b281'
    }).then(data => {
    console.log(data)
})
}
