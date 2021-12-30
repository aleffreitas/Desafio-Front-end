import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: white;    
    clip-path: polygon(0 0%, 100% 0, 100% 79%, 0 87%);
`;

export const Content = styled.div`
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    padding: 5rem 5rem 0;

    .description{
        margin-top: 2rem;        
        padding: 2rem 8rem 0 0;

        h1{
            font-size: 3.1rem;
        }

        p{
            font-size: 1.4rem;
            margin-top: 1.6rem;
        }

        img{
            max-width: 15rem;
        }

    }

    @media (max-width: 1024px) {
        
        .description{
            margin-top: 4rem;
            padding: 0;

            h1{
                font-size: 3.1rem;
            }

            p{
                font-size: 1.35rem;
                margin-top: 1.6rem;
            }
        }

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