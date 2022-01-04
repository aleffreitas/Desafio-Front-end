import styled from "styled-components";

export const Container = styled.div`
    background-color: white;    
    clip-path: polygon(0 0%, 100% 0, 100% 79%, 0 87%);
`;

export const Content = styled.div`
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    padding: 5rem 5rem 0;

    .description{

        width: 50%;
        margin-top: 3rem;

        h1{
            font-size: 2.8rem;
        }

        p{
            font-size: 1.4rem;
            margin-top: 1.5rem;
        }
    }

    .image{
        width: 50%;
        text-align: center;

        img{
            max-width: 400px;
        }
    }

    @media (max-width: 768px) {
        
        gap: 1rem;
        padding: 5rem 5rem 1rem;

        .description{
            height: 300px;
            margin-top: 0;   

            h1{
                font-size: 2rem;
            }

            p{
                font-size: 1rem;
                margin-top: 1rem;
            }
        }

        .image{
            text-align: right;

            img{
                width: 100%;
            }
        }
    }

    @media (max-width: 586px) {
                
        padding: 5rem 4rem;
        display: block;

        .description{

            height: auto;            
            width: 100%;              
        }

        .image{
            display: none;
        }        
    }
`;