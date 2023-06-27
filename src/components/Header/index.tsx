import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header>
            <div className={styles['header-container']}>
                <Link to={'/'}>
                    <h1>Aluguei</h1>
                </Link>
                <nav className={styles['nav-container']}>
                    <Link to={'/'}>Inicial</Link>
                    {/*<Link to={'#presentation'}>Principais</Link>*/}
                    {/*<Link to={'#contact'}>Contato</Link>*/}
                    <Link to={'auth/login'}>Login</Link>
                    <Link to={'auth/register'}>Register</Link>
                    <Link to="/imoveis">
                        <button>Quero Alugar</button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
