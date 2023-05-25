import styled from "styled-components"
import { corPrimaria } from "../../assets/Constantes"

export const RodapeEstilo = styled.footer`
    background-color: white;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    height: 95px;
    border: 4px solid ${corPrimaria};
    box-sizing: border-box;
    margin-top: 42px;
`

export const RecipienteImagensRodape = styled.div`
    display: flex;
    justify-content: space-around;
`