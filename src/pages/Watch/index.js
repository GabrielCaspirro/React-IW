import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Watch.module.css"
import Footer from "../../components/Footer";

function Watch(){
    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                <iframe width="810" height="420" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=Qn-BrakckKD1tOxZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Watch;