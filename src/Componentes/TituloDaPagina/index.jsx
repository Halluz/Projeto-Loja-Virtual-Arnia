import { RecipienteTitulo, DivContador } from "./estilo"
import { TELAS } from "../../App"

const TituloDaPagina = ({tituloDaPagina, qtdItensSelecionados, trocarTela}) =>{
    return (
        <RecipienteTitulo>
            <h1>{tituloDaPagina}</h1>
            {
                trocarTela !== TELAS.paginaPagamento ? 
                    <DivContador>{qtdItensSelecionados}</DivContador>
                    : null
            }
        </ RecipienteTitulo>
    )
}

export default TituloDaPagina
