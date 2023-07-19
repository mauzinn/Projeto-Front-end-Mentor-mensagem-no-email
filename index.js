box2 = document.getElementById('box2')
box2.style.display = "none"

function quandoTerminar() {
    var formResVar = document.getElementById('inputemail').value
    if (formResVar === "") {
        alert('[ERRO] Preencha todos os campos!')
    } else {
    formRes = formResVar
    var box1 = document.getElementById('box')
    box1.style.display = "none"
    box2.style.display = ""
    var p = document.getElementById('paragrafo')
    p.innerHTML = `A confirmation email has been sent to<br>
    <b>${formRes}</b> Please open it and click<br>
    the button inside to confirm you subscription.`
    }
}

function quandoReceber() {
    var box1 = document.getElementById('box')
    box1.style.display = ""
    box2.style.display = "none"
}