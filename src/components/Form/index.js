import { Container, Content } from "./style";

export function Form() {
    return (
        <Container>
            <Content>
                <h1>Mande um oi, ligamos para você!</h1>
                <p>Preencha seus dados para que a gente possa entrar em contato.</p>
                <form action="" method="post">
                    <label>
                        Nome Completo
                        <input type="text" placeholder="Ex: Mateus Ávila Isidoro" />
                    </label>

                    <label>
                        Whatsapp
                        <input type="tel" placeholder="(99) 99999-9999" />
                    </label>

                    {/* <button type="button">Peça uma reunião</button> */}
                    <input type="submit" className="btn" value="Peça uma reunião"/>
                </form>
            </Content>
        </Container>
    );
}