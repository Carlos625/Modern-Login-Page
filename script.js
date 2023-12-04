const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



const usuarios = {
    "carlos_eurekia": { senha: "senha123", link: "https://demo.zaperia.com.br/" },
    "kamila_eurekia": { senha: "abcde", link: "link-para-kamila.html" },
    "jadson_eurekia": { senha: "senha1234", link: "link-para-jadson.html" }
};

function autenticar(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuarios[usuario] && usuarios[usuario].senha === senha) {
        window.open(usuarios[usuario].link)
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
