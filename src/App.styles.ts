import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        height:100%;
    }
    body{
    margin: 0;
    }    
     * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    }
`;

export const AppWrapper = styled.div``;
