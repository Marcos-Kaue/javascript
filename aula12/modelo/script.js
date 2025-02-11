function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '')
            }else if(idade <25){

            }else if(idade <50){

            }else {

            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){

            }else if(idade <25){

            }else if(idade <50){

            }else {
                
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}