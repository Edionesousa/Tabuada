function tabuada(){
    let num = document.getElementById('txtn')   //essa linha guardara inf. do campo (txtn)
    let tab = document.getElementById('seltab')     // essa linha guardara inf. do campo (seltab)

    if(num.value.length == 0){   // essa linha notificara caso campo tenha valor zerado, deve ter valor valido 0,1,2,3...9!
          window.alert('Erro, digite um numero valido') // dispara alert caso calor campo acima seja zero. Nao pode!
    } else {            // entrara na segunda condiçao caso campo de validaçao seja verdadeiro dos testes anteriores.
        let n = Number (num.value)  // variavel converte campo de de string (LETRAS)em numeros.
        let c = 1  // contador (c) recebe e passa ter valor de 1.
        tab.innerHTML =''  // essa linha fara zeragem da tabela do codigo a cada ciclo.

        while (c <= 10){  // essa linha tem objetivo de fazer a tabuada so de 0 a 10, Ex: 3x0  ate 3x10.
            let item = document.createElement('option') // variavel ITEM recebera criando um elemento "option"
            item.text =`${n} x ${c} = ${n*c} `// item recebe valor de(n) mutiplica com ovalor(c) por fim a operaçao final N * C.
            item.value = `tab ${c}` //traz o valor de item (uma variavel (LET)) para juntar com o (C) contador na tab(tabuada) em si.
            tab.appendChild(item) // tab e  adicionado ao contador (C) junto com ITEM para formar tabela final.
            c++ // essa linha com C++ e necessaria quando usamos estrutura de repetiçao 
            //(WHILE) se usado (FOR) nao precisaria.

        }
    
    }
}