const form = document.querySelector("#formproduto");

let produtos = [];

form.addEventListener("submit", (evt) => {

    evt.preventDefault();

let descricao = document.querySelector("#descricao").value;

let valor = Number(document.querySelector("#valor").value);

let quantidade = Number(document.querySelector("#quantidade").value);

let total = valor * quantidade;

let adicional = calcularAdicional(total);

let produtos = [];

descricao,
valor,
quantidade,
total,
adicional

});

mostrarProdutos();

form.reset();

function calcularAdicional(total){

if(total <= 3000){

return "Isento";

}

else if(total <= 8000){

return "R$ " + (total * 0.05).toFixed(2);

}

else if(total <= 12000){

return "R$ " + (total * 0.10).toFixed(2);

}

else if(total <= 20000){

return "R$ " + (total * 0.15).toFixed(2);

}

else{

return "R$ " + (total * 0.20).toFixed(2);

}

}

function mostrarProdutos(){

let tabela = document.querySelector("#listaprodutos");

tabela.innerHTML = "";

for(let i = 0; i < produtos.length; i++){

    tabela.innerHTML += `
    <p>
    Descrição: ${produtos[i].descricao}<br>
    Valor: R$ ${produtos[i].valor.toFixed(2)}<br>
    Quantidade: ${produtos[i].quantidade}<br>
    Total: R$ ${produtos[i].total.toFixed(2)}<br>
    Adicional: ${produtos[i].adicional}
    </p>
    <hr>
    `;
    

}


}