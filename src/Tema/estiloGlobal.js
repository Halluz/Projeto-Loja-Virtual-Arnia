import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 700;
        background-color: black;
    }

    h1{
        font-weight: 400;
        font-size: 40px;
        line-height: 60px;
        margin: 0px;
        padding: 0px;
    }

    h2{
        font-weight: 400;
        font-size: 32px;
        line-height: 48px;
        color: white;
        margin: 0px;
        padding: 0px;
    }

    h4{
        margin: 6px 0px 0px 16px;
        padding: 0px;
    }
`