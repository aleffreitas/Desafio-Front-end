import { Background, Container, Content } from "./styles";
import {Link} from 'react-scroll';

export function Banner() {    

    return (
        <Container>
            <Background>
                <Content>
                    <p>Desenvolvedores prontos para ação</p>
                    <h1>Seu projeto pronto na velocidade da luz</h1>
                        <Link  to="form" spy={true} smooth={true}>
                            <button type="button">                        
                                Peça uma reunião
                            </button>
                        </Link>
                </Content>
            </Background>
        </Container>
    );
}