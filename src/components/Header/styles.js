import styled from "styled-components";

export const Container = styled.header`
    background: var(--gradient);
    height: 5.3rem;
`;

export const Content = styled.div`
    max-width: 95%;
    margin: 0 auto;

    padding: 1.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 2rem;
        color: white;
        transition: .2s;

        &:hover{
            transform: scale(1.1);
            filter: brightness(0.9);
        }
    }

    ul{
        display: flex;
        gap: 1.5rem;
        list-style: none;
    }

    li{
        img{
            width: 2rem;
            transition: .2s;

            &:hover{
            transform: scale(1.1);
            filter: brightness(0.9);
            }
        }        
    }
`;