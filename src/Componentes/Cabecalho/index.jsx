import { CabecalhoEstilo } from "./estilo";
import logoArnia from "../../assets/imagens/logoArnia.png"


export default function Cabecalho(){
    return (
        <CabecalhoEstilo>
            <img src={logoArnia} alt="Logo Arnia" />
            <h2>Loja Virtual</h2>
        </CabecalhoEstilo>
    )
}