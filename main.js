handleLogin = () => { 
    const req = new Request("https://github.com/login/oauth/authorize")
    const headers = new Headers()
    headers.append('Access-Control-Allow-Origin', '*')
    fetch("https://github.com/login/oauth/authorize",{
        method: 'GET',
        headers: headers,
        mode: 'cors'
    }).then(data => {
    console.log(data)
})
}
