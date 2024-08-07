function converte() {
    var input1 = parseFloat(document.getElementById('input1').value);

    var  resultado = input1 * 4.97;

    document.getElementById('resultado').innerHTML = resultado + ' R$ é o valor atual da cotação do dolár.';
}

