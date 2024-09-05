import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./search.module.css";

function Search(){
    return(
        <>
            <Header/>
            <Container>
                <section className={styles.search}>
                    <h1>Pesquisar</h1>
                </section>
            </Container>
            <Footer/>
        </>
    );
}

export default Search;