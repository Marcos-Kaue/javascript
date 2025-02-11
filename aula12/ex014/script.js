function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.backgroundColor = '#67b9f7'
} else if(hora >= 12 && hora <= 18){
    img.src = 'tarde.png'
    document.body.style.backgroundColor = '#f3b156'
} else {
    img.src = 'noite.png'
    document.body.style.backgroundColor = '#184fa3'
}

}
