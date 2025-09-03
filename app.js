let amigos = [];

function agregarAmigo() {
    document.getElementById("resultado").innerHTML = "";
    let amigo = document.getElementById("amigo").value;
    if(!amigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    agregarElemento(amigo);
    document.getElementById("amigo").value = "";
}

function agregarElemento(amigo) {
    amigos.push(amigo);
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(nuevoLi);
}

function sortearAmigo() {
    if(amigos.length != 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoAleatorio = amigos[indiceAleatorio];
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = "El amigo secreto sorteado es: " + amigoAleatorio;
        document.getElementById("resultado").appendChild(nuevoLi);
        document.getElementById("listaAmigos").innerHTML = "";
        amigos = [];
    } else {
        alert("No hay nombres para sortear")
    }
}