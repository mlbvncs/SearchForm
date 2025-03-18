/*Aumentando e diminuindo número do input idade*/
function mais(){
  var atual = document.getElementById("idade").value
  var novo = atual - (-1)
  document.getElementById("idade").value = novo
}
function menos(){
  var atual = document.getElementById("idade").value
  if(atual > 1) {
    var novo = atual - 1
    document.getElementById("idade").value = novo
  }
}
/*Validando email*/
function validandoEmail(email){
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}
/*Recados ao enviar inputs e select com valores não aceitos*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var nome = document.getElementById("nome")
    var mensagem1 = document.getElementById("mensagem1")

    var email = document.getElementById("email")
    var mensagem2 = document.getElementById("mensagem2")

    var idade = document.getElementById("idade")
    var mensagem3 = document.getElementById("mensagem3")

    var instrução = document.getElementById("instrução")
    var mensagem4 = document.getElementById("mensagem4")

    /*Verificando nome*/
    if(nome.value !== ""){
        mensagem1.innerHTML = ""
        contnome = true
    }else{
        mensagem1.innerHTML = "Digite um nome válido!"
        contnome = false
    }
    /*Verificando email*/
    if(validandoEmail(email.value) === true){
        mensagem2.innerHTML = ""
        contemail = true
    }else{
        mensagem2.innerHTML = "Digite um endereço de email válido!"
        contemail = false
    }
    /*Verificando idade*/
    if(idade.value !== ""){
        if(idade.value >= 18 && idade.value <= 120){
            mensagem3.innerHTML = ""
            contidade = true
        }else{
            mensagem3.innerHTML = "Digite uma idade entre 18 e 120!"
            contidade = false
        }
    }else{
        mensagem3.innerHTML = "Digite uma idade válida!"
        contidade = false
    }
    /*Verificando instrução*/
    if(instrução.value !== ""){
        mensagem4.innerHTML = ""
        continstrução = true
    }else{
        mensagem4.innerHTML = "Selecione seu grau de instrução!"
        continstrução = false
    }
    /*Verificando os dados*/
    if(contnome === true && contemail === true && contidade === true && continstrução === true){
        alert("Esta é a única página deste projeto!")
        window.location.reload()
    }else if(contnome !== true){
        nome.focus()
    }else if(contnome === true && contemail !== true){
        email.focus()
    }else if(contnome === true && contemail === true && contidade !== true){
        idade.focus()
    }
})