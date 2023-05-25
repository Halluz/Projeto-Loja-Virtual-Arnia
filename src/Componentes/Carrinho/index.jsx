import { useState } from "react"
import mais from "../../assets/imagens/mais.png"
import menos from "../../assets/imagens/menos.png"
import { BotaoQuantidade, RecipienteBotoes, RecipienteFicha, Titulo, RecipienteCarrinho, RecipienteTotal, ImagemEstilo } from "./estilo"

export default function Carrinho({listaDeJogos, setListaDeJogos}){
    const somaInicial = somaTotalInicial()
    const [Total, setTotal] = useState(somaInicial)

    function incrementarJogo(jogo){
        const NovaListaJogos = listaDeJogos.map(elemento => {
            if(elemento.id === jogo.id){
                return {...elemento, quantidade: elemento.quantidade + 1, precoTotal: elemento.precoTotal  + elemento.preco }
            }
            return elemento
        })
        setListaDeJogos(NovaListaJogos)
        somaTotal(NovaListaJogos)
    }
    
    function decrementarJogo(jogo){
        const NovaListaDeJogos = listaDeJogos.map(elemento => {
            if(elemento.quantidade < 1){
                const resposta = window.confirm("Tu queres remover este produto do Carrinho?")
                if(resposta === true){
                    setListaDeJogos(listaDeJogos.filter(elemento => elemento.id !== jogo.id))
                }
                const filtro = listaDeJogos.filter(elemento => elemento.id !== jogo.id)
                Console.log(`Filtro sem jogo: ${jogo.nome}`, filtro)
            }
            if(elemento.id === jogo.id){
                return {...elemento, quantidade: elemento.quantidade - 1, precoTotal: elemento.precoTotal  - elemento.preco}
            }
            return elemento
        })
        setListaDeJogos(NovaListaDeJogos)
        console.log("listaDeJogos - : ", listaDeJogos)
        somaTotal(NovaListaDeJogos)
    }
    
    function somaTotal(novaLista){
        console.log("listaDeJogos: + ", listaDeJogos)
        const soma = novaLista.reduce((acumulador, elemento) => {
            return acumulador + elemento.precoTotal
        }, 0)
        setTotal(soma)
    }

    function somaTotalInicial(){
        const soma = listaDeJogos.reduce((acumulador, elemento) => {
            return acumulador + elemento.precoTotal
        }, 0)
        return soma
    }

    return (
        <>
            <RecipienteCarrinho>
                {listaDeJogos.map((elemento, indice)=>(
                    <RecipienteFicha key={indice}>
                        <ImagemEstilo src={elemento.imagem} alt={`Imagem ${elemento.nome}`} />
                        <div>
                            <Titulo>{elemento.nome.toUpperCase()}</Titulo>
                            <div>Valor Unit: {elemento.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</div>
                            <div>Quantidade:  {elemento.quantidade}</div>
                            <div>Soma Valor:  {elemento.precoTotal.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</div>
                            <RecipienteBotoes>
                                <BotaoQuantidade onClick={() => incrementarJogo(elemento)}>
                                    <img src={mais} alt="Mais +" />
                                </BotaoQuantidade>
                                <BotaoQuantidade onClick={() => decrementarJogo(elemento)}>
                                    <img src={menos} alt="Menos -" />
                                </BotaoQuantidade>
                            </RecipienteBotoes>
                        </div>
                    </RecipienteFicha>
                ))}
            </RecipienteCarrinho>
            <RecipienteTotal>
                {`Total:  ${Total.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}`} 
            </RecipienteTotal>

        </>
    )
}