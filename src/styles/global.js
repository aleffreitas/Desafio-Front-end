import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{

        --redlight: #EE5253;
        --reddark: #D92223;
        --gradient: linear-gradient(180deg, #EE5253 0%, #D92223 100%);
        --green: #10AC84;
        --text: #333333;
        --titleinput: #666666;
        --placeholder: #BBBBBB;
        --backgrounwhite: #EAEAEA;
        --backgroundgrey: #E5E5E5;
    }

    *{
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
        -webkit-font-smoothing: antialiased;        
        color: var(--text);
        background-color: var(--backgroundgrey);
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`