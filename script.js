let cores = ["red", "green", "blue", "aqua", "coral", "yellow"]; //cores para advinhar
let tentativas = 0; //numero de tentativas
let resposta = 0; //resposta do jogo

function init(){
    //inicialização do site
   tentativas = 0;
   resposta = 0;
   
   cores.sort(); //ordenar as cores em ordem alfabetica

   document.getElementById("coresdiv").innerHTML = cores; //exibir as cores no site

   resposta = Math.floor(Math.random() * cores.length); //definir a resposta aleatoriamente

   console.log(cores[resposta]) // exibir a resposta no console do usuario
}

function advinhar(){
    const { value } = document.getElementById("resposta"); //definindo a variavel da resposta do usuario
    tentativas++; //aumentando a contagem de tentativas
    document.getElementById("tentativasdiv").innerHTML = checarInput(value);
}

function checarInput(value){
    let returnMessage = "Desculpa, não reconheci sua resposta"; //mensagem a retornar

    //loop para checar cor por cor
    for (let i = 0, len = cores.length; i < len; i++) {
        //se a resposta inserida coincide com qualquer valor na lista
        if (value === cores[i]){
            //se a resposta inserida esta acima da verdadeira resposta
            if(i > resposta){
                returnMessage = "Desculpa, sua resposta esta incorreta. <br><br> Sua resposta esta muito <b>alta</b> na lista";
            }
            //se a resposta inserida esta abaixo da verdadeira resposta
            if(i < resposta){
                returnMessage = "Desculpa, sua resposta esta incorreta. <br><br> Sua resposta esta muito <b>baixa</b> na lista";
            }
            //se a resposta inserida esta correta
            if(i === resposta){
                returnMessage = "Você acertou! em " + tentativas + " tentativas!";
                document.body.style.backgroundColor = cores[resposta];
                document.getElementById("resposta").disabled = true;
            }
        }
    }
    return returnMessage;
}
