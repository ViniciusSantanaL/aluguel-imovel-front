import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header>
            <div className={styles['header-container']}>
                <h1>Aluguei</h1>
                <nav className={styles['nav-container']}>
                    <a>Inicial</a>
                    <a>Principais</a>
                    <a>Contato</a>
                    <Link to="/imoveis">
                        <button>Quero Alugar</button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
