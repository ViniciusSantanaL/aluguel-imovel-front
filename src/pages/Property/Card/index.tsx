import { Link } from 'react-router-dom'
import { Property } from '../../../types/Property.type'
import styles from './styles.module.scss'

interface PropertyCardProps {
    property: Property
}
export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className={styles['card-container']}>
            <img src={property.imageUrl} />
            <div className={styles['card-content']}>
                <div className={styles['card-title']}>
                    <span>
                        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price)}</strong>
                    </span>
                    <span>|</span>
                    <span>
                        <strong>{property.locale}</strong>
                    </span>
                </div>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <div className={styles['card-contact']}>
                    <div>
                        <strong>{property.assessment}</strong>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}
                        >
                            <path
                                fill-rule="evenodd"
                                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                            ></path>
                        </svg>
                    </div>
                    <strong>|</strong>
                    <strong>Favoritar</strong>
                    <strong>Contato</strong>
                    <Link to={`/pagamento?imovelId=${property.id}`}>
                        <button>Alugar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
