import { useState } from 'react'
import styles from './styles.module.scss'

export function PaymentForm() {
    const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, -14))
    return (
        <form className={styles['payment-form-container']}>
            <h3>Informações de Pagamento</h3>

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
                <input type="date" id="fromDate" min={new Date().toISOString().slice(0, -14)} onChange={(e) => setFromDate(e.target.value)} />
                <label htmlFor="toDate">Data Fim</label>
                <input type="date" id="toDate" min={fromDate} />
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
                <button type="button" className={styles['google-button']}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt={''} />
                    Pay
                </button>
                <button type="button" className={styles['paypal-button']}>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt={''} />
                    PayPal
                </button>
                <button type="button" className={styles['shoppay-button']}>
                    <img src="https://princesspolly.co.uk/cdn/shop/files/shop-pay-logo-hero.png?v=3297951745771199121" alt={''} />
                </button>
            </div>
        </form>
    )
}
