import styled from "styled-components"
import { corPrimaria } from "../../assets/Constantes"

export const CaixaDeSelecao = styled.input`
    width: 26px;
    height: 26px;
    /* background: ${corPrimaria}; */
    border: 1px solid ${corPrimaria};
    border-radius: 9px;
`

export const RecipienteCxValor = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`

export const RecipienteJogo = styled.div`
    width: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const RecipienteCatalogo = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 20px 0px 20px 0px;
`
export const ImagemEstilo = styled.img`
    width: 142px;
    height: 185px;
    
`

export const SpanValor = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`