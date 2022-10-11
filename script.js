$(function(){

    $('button').bind('click', function(){

        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        // Calcula o IMC
        var imc = peso / (altura * altura);

        /*
        Baixo peso muito grave = IMC abaixo de 16 kg/m²
        Baixo peso grave = IMC entre 16 e 16,99 kg/m²
        Baixo peso = IMC entre 17 e 18,49 kg/m²
        Peso normal = IMC entre 18,50 e 24,99 kg/m²
        Sobrepeso = IMC entre 25 e 29,99 kg/m²
        Obesidade grau I = IMC entre 30 e 34,99 kg/m²
        Obesidade grau II = IMC entre 35 e 39,99 kg/m²
        Obesidade grau III (obesidade mórbida) = IMC igual ou maior que 40 kg/m²
        */

        if(imc < 16){
            var resultado = 'Baixo peso muito grave';
        }else if(imc >= 16 && imc < 17){
            var resultado = 'Baixo peso grave';
        }else if(imc >= 17 && imc < 18.5){
            var resultado = 'Baixo peso';
        }else if(imc >= 18.5 && imc < 25){
            var resultado = 'Peso normal';
        }else if(imc >= 25 && imc < 30){
            var resultado = 'Sobrepeso';
        }else if(imc >= 30 && imc < 35){
            var resultado = 'Obesidade grau I';
        }else if(imc >= 35 && imc < 40){
            var resultado = 'Obesidade grau II';
        }else if(imc >= 40){
            var resultado = 'Obesidade grau III (obesidade mórbida)';
        }

        // Exibe o IMC
        $('#resultado').html("Seu IMC é: " + imc+ " kg/m² e você está com " + resultado);
    });
})