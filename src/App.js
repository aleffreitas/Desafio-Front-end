import { Banner } from "./components/Banner";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <Header />
      <Banner />
      <Description />
      <Form />
      <Footer />
      <GlobalStyle />
    </>
  );
}