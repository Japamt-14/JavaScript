function calcularPotuacaoTotal(pontuacoes) {
    let pontuacaoTotal = 0;
    for (let i = 0; i < pontuacoes.lenght; i++) {  
        pontuacaoTotal += pontuacoes[i] ;
}
console.log("Pontuação total do jogador:", pontuacaoTotal)
} 
// array de pontuações do jogador
const pontuacoesDoJogador = [10,15,20,5,8];
// chamando a função para calcular a pontuação total do jogador
calcularPotuacaoTotal(pontuacoesDoJogador);
