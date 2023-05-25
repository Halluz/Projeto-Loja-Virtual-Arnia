import styled from "styled-components"
import { corPrimaria } from "../../assets/Constantes"

export const BotaoEstilo = styled.button`
    background-color: ${corPrimaria};
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: white;
    border-radius: 9px;
    border: none;
    padding: 5px 10px 5px 10px;
`

export const RecipienteBotaoProdutos = styled.div`
    display: flex;
    justify-content: end;
    padding: 0px 30px 0px 30px;
    box-sizing: border-box;
    gap: 30px;
`