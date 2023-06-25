import Home from 'src/assets/home.jpg'
import styles from './styles.module.scss'

export function Presentation() {
    return (
        <section className={styles['home-container']}>
            <div className={styles['home-content']}>
                <div className={styles['home-text-container']}>
                    <h2>Invista com quem mais inova no setor imobiliário</h2>
                    <p>Conheça o mais novo empreendimento da Empresa Lion e invista a partir de R$ 500,00</p>
                    <button>Quero Alugar</button>
                </div>
                <div className={styles['home-image-container']}>
                    <img src={Home} />
                </div>
            </div>
        </section>
    )
}
