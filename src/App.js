import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card"

function App() {
  return (
    <>
    <Header/>
    <Banner image="home"/>
    <Container>
      <h2>Geografia</h2>
      <section className="cards">
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
      </section>
    </Container>
    <Footer/>
    </>
);
}

export default App;
