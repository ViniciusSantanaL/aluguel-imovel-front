import styles from './styles.module.scss'

export function PaymentForm() {
    return (
        <form className={styles['payment-form-container']}>
            <h1>Informações de Pagamento</h1>
            <input placeholder="Nome Completo" />
            <input placeholder="CPF" />
            <input placeholder="Endereço" />
            <div>
                <input placeholder="Endereço" />
                <input placeholder="Endereço" />
            </div>
            <input placeholder="Valor" />

            <button style={{ marginTop: '1rem' }} type="submit">
                Confirmar
            </button>
            <div className={styles.divisor}>
                <div></div>
                <p>OU</p>
                <div></div>
            </div>
            <div>
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
