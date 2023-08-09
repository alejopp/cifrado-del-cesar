window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("input-original").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
}

function descifrate(){
     let texto = document.getElementById("input-original").value;
    // const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // desplazamiento = 3;
    // texto = texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento % 26)])
    // console.log(texto);
    // document.getElementById('resultado').innerHTML = texto

    let result = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (3 % 26 - 26) % 26;
    
    if(texto){
        for(let i = 0; i < texto.length; i++){
            if(letras.indexOf(texto[i]) !=-1){
                let posicion = ((letras.indexOf(texto[i]) - desplazamiento) %26);
                result += letras[posicion];
            } else{
                result += texto[i];
            }
        }
    }

    document.getElementById('resultado').innerHTML = result;

    // let text = document.getElementById("input-original").value;
    // let s = 26 - 3 ;
    // let result=""
    // for (let i = 0; i < text.length; i++)
    // {
    //     let char = text[i];
    //     if (char.toUpperCase(text[i]))
    //     {
    //         let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
    //         result += ch;
    //     }
    //     else
    //     {
    //         let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
    //         result += ch;
    //     }
    //     console.log(result)
    //     document.getElementById('resultado').innerHTML = result;
    // }
}