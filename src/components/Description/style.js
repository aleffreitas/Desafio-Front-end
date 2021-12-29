import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: white;
    
    clip-path: polygon(0 1%, 100% 0, 100% 77%, 0 90%);
`;

export const Content = styled.div`
    max-width: 1000px;
    display: flex;
    margin: 0 auto;
    padding-top: 4rem;

    .description{

        margin-top: 2rem;

        h1{
            font-size: 3rem;
        }

        p{
            font-size: 1.4rem;
            margin: 3rem 4rem 0 0;
        }

    }

    
`;