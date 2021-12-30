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
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8); 
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    width: 47rem;
    margin-left: 5%;
    z-index: 2;
    
    p{
        font-size: 2rem;
        font-weight: normal;
    }

    h1{
        font-weight: bold;
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
`;