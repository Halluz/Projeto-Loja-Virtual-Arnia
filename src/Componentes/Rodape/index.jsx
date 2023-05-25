import { RodapeEstilo, RecipienteImagensRodape } from "./estilo"
import imagem1 from "../../assets/imagens/ImagensPagamento/visa.png"
import imagem2 from "../../assets/imagens/ImagensPagamento/master_card.png"
import imagem3 from "../../assets/imagens/ImagensPagamento/boleto.png"
import imagem4 from "../../assets/imagens/ImagensPagamento/hipercard.png"


export default function Rodape(){
    return (
        <RodapeEstilo>
            <h4>Meios de pagamento:</h4>
            <RecipienteImagensRodape>
                <img src={imagem1} alt="Logo Visa" />
                <img src={imagem2} alt="Logo Master Card" />
                <img src={imagem3} alt="Boleto" />
                <img src={imagem4} alt="Logo HiperCard" />
            </RecipienteImagensRodape>
        </RodapeEstilo>
    )
}