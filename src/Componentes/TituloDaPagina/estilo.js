import styled from "styled-components";
import { corPrimaria } from "../../assets/Constantes";

export const RecipienteTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 51px 0px 22px;
    box-sizing: border-box;
`

export const DivContador = styled.div`
    color: white;
    background-color: ${corPrimaria};
    width: 49px;
    height: 44px;
    border: 1px solid #6950A1;
    border-radius: 9px;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`