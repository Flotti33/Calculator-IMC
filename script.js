function start(){
    var date = new Date()
    var age = date.getFullYear()
    var year = document.getElementById('dtbidth')
    var res = document.getElementById('res')
    if(year.value.length == 0 || year.value > age){
        window.alert('[Erro] verifique qual o ano de nascimento e tente novamente')
    } else {
        var sex = document.getElementsByName('sex')
        var calcAge = age - Number(year.value)
        var gender = ''
        var height = Number(document.querySelector('input#height').value)
        var weight = Number(document.querySelector('input#weight').value)
        var imc = weight/(height*2)
        var img = document.createElement('img')
        img. setAttribute('id','photo')
        //"..." adicionar imagem conrrespondente
        if(sex[0].checked){
         var gender = 'Homem'
            if(calcAge >=0 && calcAge <10){
                //Criança
                if(imc < 18){
                    img.setAttribute('src','criancas_png/menino-magro.png')
                } else if(imc <25){
                    img.setAttribute('src','criancas_png/menino-saudavel.png')
                } else{
                    img.setAttribute('src','criancas_png/menino-gordo.png')
                }
            } else if (calcAge <21){
                //Jovem
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            } else if (calcAge < 50){
                //Adulto
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            } else{
                //Idoso
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            }
        } else {
            gender = 'Mulher'
            if(calcAge >=0 && calcAge <10){
                //Criança
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            } else if (calcAge <21){
                //Jovem
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            } else if (calcAge < 50){
                //Adulto
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            } else{
                //Idoso
                if(imc < 18){
                    img.setAttribute('src','...')
                } else if(imc <25){
                    img.setAttribute('src','...')
                } else{
                    img.setAttribute('src','...')
                }
            }
        }
        res.innerHTML = `${calcAge} ${gender} ${imc.toFixed(1)}`
        res.appendChild(img)
    
    }
    
}