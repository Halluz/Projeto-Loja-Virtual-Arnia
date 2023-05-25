import jogo1 from "../../assets/imagens/Battlefield_Imagem1.png"
import jogo2 from "../../assets/imagens/CallOfDuty_Imagem2.png"
import jogo3 from "../../assets/imagens/DarkSouls_Imagem3.png"
import jogo4 from "../../assets/imagens/ResidentEvil_Imagem4.png"
import jogo5 from "../../assets/imagens/GodOfWar_Imagem5.png"
import jogo6 from "../../assets/imagens/Horizon_Imagem6.png"

import { CaixaDeSelecao, RecipienteCatalogo, RecipienteCxValor, RecipienteJogo, ImagemEstilo, SpanValor } from "./estilo"


export const Jogos = [
    {
        id: 1,
        nome: "Battlefield",
        preco: 100.99,
        imagem: jogo1,
        quantidade: 1,
        precoTotal: 100.99
    },
    {
        id: 2,
        nome: "Call Of Duty",
        preco: 199.44,
        imagem: jogo2,
        quantidade: 1,
        precoTotal: 199.44
    },
    {
        id: 3,
        nome: "Dark Souls",
        preco:444.44 ,
        imagem: jogo3,
        quantidade: 1,
        precoTotal: 444.44
    },
    {
        id: 4,
        nome: "Resident Evil",
        preco: 399.56,
        imagem: jogo4,
        quantidade: 1,
        precoTotal: 399.56
    },
    {
        id: 5,
        nome: "God Of War",
        preco: 478.44,
        imagem: jogo5,
        quantidade: 1,
        precoTotal: 478.44
    },
    {
        id: 6,
        nome: "Horizon",
        preco: 200.09,
        imagem: jogo6,
        quantidade: 1,
        precoTotal: 200.09
    }
]

export default function CatalogoDeJogos({setTrocarPagina, listaDeJogos, setListaDeJogos}) {
    
    const adicionarJogo = (jogo) =>{
        //Se o objeto jogo não estiver na lista
        if(listaDeJogos.find(elemento => elemento === jogo) === undefined){
            console.log("Retorno do find: ", listaDeJogos.find(elemento => elemento === jogo))
            setListaDeJogos([...listaDeJogos, jogo])
            console.log("listaDeJogos: ", listaDeJogos)
        }
        /* console.log("Retorno do find: ", listaDeJogos.find(elemento => elemento === jogo))
        setListaDeJogos([...listaDeJogos, jogo])
        console.log("listaDeJogos: ", listaDeJogos)*/
    } 

    const deletarJogo = (jogo) => {
        setListaDeJogos(listaDeJogos.filter(elemento => elemento.id !== jogo.id))
    }
    
    return (
        <RecipienteCatalogo>
            {
                Jogos.map((jogo, indice) => (
                    <RecipienteJogo key={indice}>
                        <ImagemEstilo src={jogo.imagem} alt={`Imagem ${jogo.nome}`} />
                        <RecipienteCxValor>
                            <CaixaDeSelecao key={jogo} type="checkbox" onChange={(evento) => evento.target.checked ? adicionarJogo(jogo) : deletarJogo(jogo)}/>
                            <SpanValor>Valor: {jogo.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</SpanValor>
                        </RecipienteCxValor>
                    </RecipienteJogo>
                ))
            }
        </RecipienteCatalogo>
    )
}