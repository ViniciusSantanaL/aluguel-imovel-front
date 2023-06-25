import cardStyle from '../Card/styles.module.scss'

export function Contact() {
    return (
        <section className={cardStyle['cards-container']}>
            <div className={cardStyle['cards-content']}>
                <article className={cardStyle['card-text']}>
                    <h2>Entrar em contato conosco</h2>
                    <p>A Aluguei conecta você as melhores oportunidades de investimento de renda residencial. Não importa se você já investe no setor imobiliário ou se quer começar agora.</p>
                </article>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 pb-5">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>Brasilia, Asa Sul</h6>
                                <p>Rua Santa monica</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6>
                                    <a href="#">(61) 9 9999-9999</a>
                                </h6>
                                <p>Segunda de 09h00 até Sexta as 18H00 </p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6>
                                    <a href="#">suporte@alugei.com.br</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="row contact_form" action="" method="post" id="contactForm">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" required placeholder="Nome completo" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email" required placeholder="E-mail" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" name="subject" required placeholder="Assunto" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="message" rows={1} required placeholder="Conteudo"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="primary_btn">
                                    <span>Enviar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
