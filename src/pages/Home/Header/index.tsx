import styles from './styles.module.scss'

export function Header() {
    return (
        <header>
            <div className={styles['header-container']}>
                <h1>Aluguei</h1>
                <nav className={styles['nav-container']}>
                    <a>Inicial</a>
                    <a>Principais</a>
                    <a>Alugar</a>
                    <button>Quero Alugar</button>
                </nav>
            </div>
        </header>
    )
}
