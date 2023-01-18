handleLogin = () => { 
    const req = new Request("https://github.com/login/oauth/authorize")
    fetch("https://github.com/login/oauth/authorize",{
        method: 'GET',
        headers: {
            AccessControlAllowOrigin: '*'
        }
    }).then(data => {
    console.log(data)
})
}