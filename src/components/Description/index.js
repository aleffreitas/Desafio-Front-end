import manImg from '../../assets/man.png'

import { Container, Content } from "./style";

export function Description() {
    return (
        <Container>
            <Content>
                <div className="description">
                    <h1>Nossa iniciativa</h1>
                    <p>Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seus clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.</p>
                </div>
                <div>
                    <img src={manImg} alt="" />
                </div>
            </Content>
        </Container>
    );
}