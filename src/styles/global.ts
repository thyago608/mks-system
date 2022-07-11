import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --gray-semi-dark:#373737;
        --gray-dark:#2C2C2C;
        --gray-light:#EEEEEE;
        --black:#000000;
        --blue:#0F52BA;
        --white:#FFFFFF;
    }
   
   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body, 
    input, 
    select, 
    textarea, 
    button{
        font: 400 1rem 'Montserrat', sans-serif;
        color: var(--gray-dark);
    }

    button{
        cursor:pointer;
    }

    ul{
        list-style:none;
    }
`;
