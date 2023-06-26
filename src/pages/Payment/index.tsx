import { useQuery } from '../../hooks/useQuery'
import { Header } from '../../components/Header'

import { PropertyDetail } from './Details'
import { PaymentForm } from './Form'

import properties from '../../data/properrty.json'

import styles from './styles.module.scss'

export function Payment() {
    const query = useQuery()
    const propertyId = query.get('imovelId')
    const property = properties[(propertyId as any) - 1]

    return (
        <>
            <Header />
            <div style={{ width: '1100px', display: 'flex', margin: '0 auto', padding: '1rem' }}>
                <h2 style={{ color: 'black' }}>
                    Home {'>'} Imóveis {'>'} Pagamento
                </h2>
            </div>
            <main className={styles['payment-container']}>
                <PropertyDetail property={property} />
                <PaymentForm />
            </main>
        </>
    )
}
