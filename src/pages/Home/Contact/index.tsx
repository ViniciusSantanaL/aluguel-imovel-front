import cardStyle from '../Card/styles.module.scss'
import styles from './sytles.module.scss'

export function Contact() {
    return (
        <section className={cardStyle['cards-container']}>
            <div className={cardStyle['cards-content']}>
                <article className={cardStyle['card-text']}>
                    <h2>Entrar em contato conosco</h2>
                    <p>A Aluguei conecta você as melhores oportunidades de investimento de renda residencial. Não importa se você já investe no setor imobiliário ou se quer começar agora.</p>
                </article>
            </div>
            <div className={styles['contact-container']}>
                <div className={styles['contact-info-container']}>
                    <div>
                        <strong>Brasilia, Asa Sul</strong>
                        <p>Rua Santa monica</p>
                    </div>
                    <div>
                        <strong>(61) 99396-5231</strong>
                        <p>Segunda de 09h00 até Sexta as 18H00</p>
                    </div>
                    <div>
                        <strong>suporte@aluguei.com.br</strong>
                    </div>
                </div>
                <form className={styles['contact-form-container']}>
                    <input placeholder="Nome completo" />
                    <input placeholder="E-mail" />
                    <input placeholder="Assunto" />
                    <button>Enviar</button>
                    <textarea rows={20} placeholder="Conteudo"></textarea>
                </form>
            </div>
        </section>
    )
}
