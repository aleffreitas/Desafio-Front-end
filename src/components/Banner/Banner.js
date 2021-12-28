import { Background, Container, Content } from "./styles";

export function Banner() {
    return (
        <Container>
            <Background>
                <Content>
                    <p>Desenvolvedores prontos para ação</p>
                    <h1>Seu projeto pronto na velocidade da luz</h1>
                    <button type="button">Peça uma reunião</button>
                </Content>
            </Background>
        </Container>
    );
}