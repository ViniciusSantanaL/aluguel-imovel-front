import { Header } from '../../components/Header'

import QRCODE from '../../assets/QR_CODE.svg'
import styles from './styles.module.scss'

export function PaymentConfirmed() {
    return (
        <>
            <Header />
            <div style={{ width: '1100px', display: 'flex', margin: '0 auto', padding: '1rem' }}>
                <h2 style={{ color: 'black' }}>
                    Home {'>'} Imóveis {'>'} Pagamento
                </h2>
            </div>
            <main className={styles['payment-confirme-container']}>
                <h1>Escaneie o QR Code para confirmar o pagamento</h1>
                <img src={QRCODE} />
            </main>
        </>
    )
}
