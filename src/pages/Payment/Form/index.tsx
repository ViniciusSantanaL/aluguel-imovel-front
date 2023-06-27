import styles from './styles.module.scss'

export function PaymentForm() {
    return (
        <form className={styles['payment-form-container']}>
            <h1>Informações de Pagamento</h1>

            <div className={styles['multiple-input']}>
                <input placeholder="Primeiro Nome" />
                <input placeholder="Sobrenome" />
            </div>
            <input placeholder="CPF" />
            <input placeholder="Endereço" />
            <div className={styles['multiple-input']}>
                <input placeholder="Cidade" />
                <input placeholder="Estado" />
                <input placeholder="CEP" />
            </div>
            <input placeholder="Contato" />
            <div className={styles['date-input-container']}>
                <label htmlFor="fromDate">Data Inicio </label>
                <input type="date" id="fromDate" />
                <label htmlFor="toDate">Data Fim</label>
                <input type="date" id="toDate" />
            </div>

            <button style={{ marginTop: '1rem' }} type="submit">
                Confirmar
            </button>
            <div className={styles.divisor}>
                <div></div>
                <p>OU</p>
                <div></div>
            </div>
            <div className={styles['other-payment-methods-container']}>
                <button className={styles['google-button']}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                    Pay
                </button>
                <button className={styles['paypal-button']}>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" />
                    PayPal
                </button>
                <button className={styles['shoppay-button']}>
                    <img src="https://princesspolly.co.uk/cdn/shop/files/shop-pay-logo-hero.png?v=3297951745771199121" />
                </button>
            </div>
        </form>
    )
}
