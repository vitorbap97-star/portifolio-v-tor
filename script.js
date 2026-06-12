document.getElementById("formContato").addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("resultado").innerText =
    "Mensagem enviada com sucesso!";
});