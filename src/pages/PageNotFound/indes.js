import styles from "./pagenotfound.module.css"

function PageNotFound(){
    return(
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado.</h2>
            <img src="" alt="logo de página não localizada"/>
        </section>
    );
}

export default PageNotFound;