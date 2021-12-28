import linkedinImg from '../../assets/linkedin.svg';
import instagramImg from '../../assets/instagram.svg';
import twitterImg from '../../assets/twitter.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <h1>MeuFreela</h1>

                <ul>
                    <li>
                        <a href="https://www.linkedin.com/" target="blank">
                            <img src={linkedinImg} alt="Linkedin" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com//" target="blank">
                            <img src={instagramImg} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="blank">
                            <img src={twitterImg} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </Content>
        </Container>
    );
}