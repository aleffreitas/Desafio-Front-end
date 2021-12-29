import { Banner } from "./components/Banner/Banner";
import { Description } from "./components/Description";
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
      <GlobalStyle />
    </>
  );
}