import Botao from "./Botao"     
import { RecipienteBotaoProdutos } from "./Botao/estilo"
import { TELAS } from "../App"
import Rodape from "./Rodape"
import Cabecalho from "./Cabecalho"
import TituloDaPagina from "./TituloDaPagina"
import Carrinho from "./Carrinho"

export default function PaginaCarrinho({mudarPagina, listaDeJogos, setListaDeJogos, paginaAtual}){
    return (
        <div>
            <Cabecalho/>
            <TituloDaPagina
                tituloDaPagina = "Carrinho"
                qtdItensSelecionados = {listaDeJogos.length}
                trocarTela = {paginaAtual}
            />
            <Carrinho listaDeJogos={listaDeJogos} setListaDeJogos={setListaDeJogos}/>
            <RecipienteBotaoProdutos>
                <Botao conteudo="Voltar" trocarPagina={() => mudarPagina(TELAS.paginaProdutos)}/>
                <Botao conteudo="Finalizar Compra" trocarPagina={() => mudarPagina(TELAS.paginaPagamento)}/>
            </RecipienteBotaoProdutos>
            <Rodape/>
        </div>
    )
}