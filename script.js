function calcularValor() {
    let milhas = document.getElementById("milhas").value;
    let valor = milhas * 0.03;
    document.getElementById("resultado").innerHTML = `Valor em R$: <span>${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>`;
}
