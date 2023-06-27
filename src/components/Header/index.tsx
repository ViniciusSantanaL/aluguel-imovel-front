import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context'

export function Header() {
    const { isAuthenticated, handleLogout } = useContext(AuthContext)

    return (
        <header>
            <div className={styles['header-container']}>
                <Link to={'/'}>
                    <h1>Aluguei</h1>
                </Link>
                <nav className={styles['nav-container']}>
                    <Link to={'/'}>Inicial</Link>
                    {!isAuthenticated ? (
                        <>
                            <Link to={'auth/login'}>Login</Link>
                            <Link to={'auth/register'}>Register</Link>
                            <Link to="/imoveis">
                                <button>Quero Alugar</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/imoveis">
                                <button>Quero Alugar</button>
                            </Link>

                            <Link onClick={handleLogout} to={'#'}>
                                <button style={{ background: 'red' }} onClick={handleLogout}>
                                    Sair
                                </button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}
