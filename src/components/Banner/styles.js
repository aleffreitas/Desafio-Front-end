import styled from "styled-components";
import officeImg from '../../assets/office.png'

export const Container = styled.div`
    color: white;
    background-image: url(${officeImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Background = styled.div`
    height: 55rem;
    background-color: rgba(0, 0, 0, 0.8); 
    display: flex;
    align-items: center;

    @media (max-width: 425px){
        height: 30rem;
    }
`;

export const Content = styled.div`
    width: 47rem;
    margin-left: 5%;

    p{
        font-size: 2rem;
        font-weight: normal;
    }

    h1{
        font-size: 5rem;
    }

    button{
        font-size: 1.4rem;
        margin: 2.6rem 0 0 1rem;
        padding: 1rem 3rem;
        border: none;
        border-radius: 0.5rem;
        color: white;
        background-color: var(--redlight);
        transition: .2s;

        &:hover{
            filter: brightness(0.9);
            transform: scale(1.1);
        }
    }

    @media (max-width: 426px) {

        width: 80%;
        margin: 0 auto;
        
        p{
            font-size: 2rem;
            font-weight: normal;
        }

        h1{            
            font-size: 3rem;
        }

        button{
            width: 100%;
            margin: 2.6rem 0 0 0;            
        }
    }

`;