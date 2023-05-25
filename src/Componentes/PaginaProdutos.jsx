import CatalogoDeJogos from "./CatalogoDeJogos";
import Botao from "./Botao";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { RecipienteBotaoProdutos } from "./Botao/estilo";
import TituloDaPagina from "./TituloDaPagina";
import { TELAS } from "../App";

export default function PaginaProdutos ({mudarPagina, listaDeJogos, setListaDeJogos, paginaAtual}){
    return (
        <>
            <Cabecalho/>
            <TituloDaPagina
                tituloDaPagina = "Produtos"
                qtdItensSelecionados = {listaDeJogos.length}
                trocarTela = {paginaAtual}
            />
            <CatalogoDeJogos mudarPagina={mudarPagina} listaDeJogos={listaDeJogos} setListaDeJogos={setListaDeJogos}/>
            <RecipienteBotaoProdutos>
                <Botao trocarPagina={() => mudarPagina(TELAS.paginaCarrinho)} conteudo="Ir para o Carrinho" />
            </RecipienteBotaoProdutos>
            <Rodape/>
        </>
    )
}