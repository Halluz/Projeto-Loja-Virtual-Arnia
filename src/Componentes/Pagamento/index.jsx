import { ImagemEstilo } from "../CatalogoDeJogos/estilo"
import { TELAS } from "../../App"
import Botao from "../Botao/"
import { RecipienteTotal, RecipienteBotoesPagamento, RecipientePai, RecipienteFilho } from "./estilo"



export function Pagamento({listaDeJogos, mudarPagina}){
    const somaObjetoInicial = somaObjetoTotalInicial()
    
    function somaObjetoTotalInicial(){
        let qtd = 0
        const soma = listaDeJogos.reduce((acumulador, elemento) => {
            qtd = qtd + elemento.quantidade
            return acumulador + elemento.precoTotal
        }, 0)
        return {total: soma, quantidade: qtd}
    }


    return (
        <>
            <RecipientePai>
                <div style={{fontSize: "18px"}}>
                    Produtos Escolhidos
                </div>
                <RecipienteFilho>
                { listaDeJogos.forEach(elemento => {
                        <ImagemEstilo src={elemento.imagem} alt={`Imagem ${elemento.nome}`} />
                        {console.log("Imagem: ", elemento.imagem)}
                })}
                </RecipienteFilho>
            </RecipientePai>
            <div style={{marginBottom: '20px'}}>
                <div style={{marginLeft: "30px", fontSize: "18px"}}>Quantidade de Produtos: {somaObjetoInicial.quantidade}</div>
                <RecipienteTotal>
                    Total:  {somaObjetoInicial.total.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}
                </RecipienteTotal>
            </div>
            <RecipienteBotoesPagamento>
                <Botao conteudo="Voltar" trocarPagina={() => mudarPagina(TELAS.paginaCarrinho)}/>
                <Botao conteudo="Confirmar Compra" trocarPagina={() => {
                    window.alert("COMPRA REALIZADA COM SUCESSO!")
                    mudarPagina(TELAS.paginaProdutos)}}/>
            </RecipienteBotoesPagamento>
        </>
    )
}