import styles from "./header.module.css";

function Header(){
    return (
        <>
            <header className={styles.header}>
                <span>EtecFilmes</span>
                <nav >
                    <a href="#">Home</a>
                    <a href="#">Assistir</a>
                </nav>
            </header>
        </>
    )
}

export default Header;