import { Property } from '../../../types/Property.type'
import styles from './styles.module.scss'

interface PropertyDetailProps {
    property: Property
}
export function PropertyDetail({ property }: PropertyDetailProps) {
    return (
        <aside className={styles['property-details-container']}>
            <img src={property.imageUrl} />
            <div className={styles['property-content']}>
                <h4>Nome: {property.title}</h4>
                <p>
                    <strong>Descrição:</strong> {property.description}
                </p>
                <span>
                    <strong>Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price)}</strong>
                </span>
                <span>
                    <strong>Endereço: {property.locale}</strong>
                </span>
                <div>
                    <strong>Avaliação: {property.assessment}</strong>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{ height: '12px', width: '12px', fill: 'currentcolor' }}
                    >
                        <path
                            fill-rule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                        ></path>
                    </svg>
                </div>
            </div>
        </aside>
    )
}
