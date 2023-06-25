import HomeIcon from 'src/assets/home-icon.png'
import LockIcon from 'src/assets/lock-icon.png'
import SunIcon from 'src/assets/sun-icon.png'

import styles from './styles.module.scss'

export function Cards() {
    return (
        <section className={styles['cards-container']}>
            <div className={styles['cards-content']}>
                <article className={styles['card-text']}>
                    <h2>Investir em imoveis pode ser simples.</h2>
                    <p>A Aluguei conecta você as melhores oportunidades de investimento de renda residencial. Não importa se você já investe no setor imobiliário ou se quer começar agora.</p>
                </article>
                <div className={styles['tags-container']}>
                    <div className={styles['card-tag']}>
                        <div className={styles['card-icon']}>
                            <img src={SunIcon} />
                        </div>
                        <h3>Investimento seguro e lucrativo</h3>
                        <p>
                            Labore nostrud sit reprehenderit officia. Dolore velit in dolor dolor laboris aliqua amet Lorem laboris. Labore exercitation mollit enim id aliquip eiusmod ad voluptate
                            deserunt ad.
                        </p>
                    </div>

                    <div className={styles['card-tag']}>
                        <div className={styles['card-icon']}>
                            <img src={LockIcon} />
                        </div>
                        <h3>Estabilidade e liquidez</h3>
                        <p>
                            Labore nostrud sit reprehenderit officia. Dolore velit in dolor dolor laboris aliqua amet Lorem laboris. Labore exercitation mollit enim id aliquip eiusmod ad voluptate
                            deserunt ad.
                        </p>
                    </div>

                    <div className={styles['card-tag']}>
                        <div className={styles['card-icon']}>
                            <img src={HomeIcon} />
                        </div>
                        <h3>Excelente retorno financeiro</h3>
                        <p>
                            Labore nostrud sit reprehenderit officia. Dolore velit in dolor dolor laboris aliqua amet Lorem laboris. Labore exercitation mollit enim id aliquip eiusmod ad voluptate
                            deserunt ad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
