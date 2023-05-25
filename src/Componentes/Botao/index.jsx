import { BotaoEstilo } from "./estilo"

export default function Botao ({conteudo, trocarPagina}){
    return (
        <BotaoEstilo onClick={trocarPagina}>
            {conteudo}
        </BotaoEstilo>
    )
}