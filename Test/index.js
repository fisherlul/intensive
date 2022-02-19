function signup(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
        username = username,
        password = password,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(user, json);
}

function signin(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result').value;

    var user = localStorage.getItem(username).value;
    var data = JSON.parse(user);

    if(user = null){
        result.innerHTML = "Wrong username"
    } else if (username == data.username && password == data.password){
        result.innerHTML = "Logged in" 
    } else {
        result.innerHTML = "Wrong password"
    }
}