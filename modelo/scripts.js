function Carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12 ){
        img.src = 'manha.png'
        document.body.style.background = '#bd6e09'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fe9b19'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = '#1a333a'
    }
}

