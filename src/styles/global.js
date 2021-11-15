import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    //https://www.happyhues.co/palettes/4
    
    :root {
        --background: #16161a;
        --text: #94a1b2;
        --title: #fffffe;
        --green: #2cb67d;

        --headerTitle: #010101;
        --headerText: #222;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        scroll-snap-type: y mandatory;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    //Tem que ter os 3
    body::-webkit-scrollbar {
        width: 12px;
    }
    body::-webkit-scrollbar-track {
        background: #111;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #444;
    }
`