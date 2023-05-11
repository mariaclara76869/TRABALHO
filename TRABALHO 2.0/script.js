function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "TESTE" && senha == "123456"){
        alert('sucesso');
        location.href = "home.html";
    }else{
        alert('usuario ou senha incorretos');
    }
}