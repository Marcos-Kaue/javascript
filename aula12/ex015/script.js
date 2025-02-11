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
                img.setAttribute('src', 'bebe.png')
            }else if(idade <25){
                img.setAttribute('src', 'jovem.png')
            }else if(idade <50){
                img.setAttribute('src', 'adulto.png')
            }else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebef.png')
            }else if(idade <25){
                img.setAttribute('src', 'jovemf.png')
            }else if(idade <50){
                img.setAttribute('src', 'adultof.png')
            }else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}