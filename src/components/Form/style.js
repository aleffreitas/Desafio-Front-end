import styled from "styled-components";

export const Container = styled.div`

    background-color: white;
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;    
    padding: 5rem;

    h1{
        font-size: 3.1rem;
    }

    p{
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }

    form{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
        align-items: end;
        margin-top: 2.3rem;
        width: 100%;
    }

    label{
        font-weight: bold;
        color: var(--titleinput);
        margin: auto;
    }

    
    input{
        width: 100%;
        height: 4rem;
        border: 1px solid #CDCDCD;
        border-radius: 0.5rem;
        margin-top: 0.2rem;
        padding-left:0.8rem;
        font-size: 1.2rem;

        &::placeholder{            
            color: var(--placeholder);
        }

    }

    .btn{
        cursor: pointer;
        height: 4rem;
        font-size: 1.4rem;
        border: none;
        border-radius: 0.5rem;
        color: white;
        background-color: var(--green);
        transition: .2s;

        &:hover{
            filter: brightness(0.9);
            transform: scale(1.03);
        }
    }
`;