import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: white;    
    clip-path: polygon(0 0%, 100% 0, 100% 79%, 0 87%);
`;

export const Content = styled.div`
    max-width: 1200px;
    display: flex;
    gap: 2rem;
    margin: 0 auto;
    padding: 5rem 5rem 0;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 1.4rem;
        margin-top: 1.6rem;
    }

    .img{
        max-width: 400px;

        /* img{
            width: 90%;
        } */
    }

    .description{
        width: 50%;
    }

    
    @media (max-width: 768px) {
        
        .description{
            margin-top: 0;
            padding: 0;

            h1{
                font-size: 2.8rem;
            }

            p{
                font-size: 1rem;
                margin-top: 1.3rem;
            }
        }

        img{
            max-width: 19rem;
        }
    }
`;