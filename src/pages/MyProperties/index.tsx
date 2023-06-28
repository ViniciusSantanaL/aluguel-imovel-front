import { useCallback, useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { TableControl } from '../Property/TableControl'

import styles from './styles.module.scss'
import { Property } from '../../types/Property.type'
import { Api } from '../../services'
import { AuthContext } from '../../context'

export function MyProperties() {
    const { user } = useContext(AuthContext)
    const [properties, setProperties] = useState<Property[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [propertyName, setPropertyName] = useState('')
    const [cheapest, setCheapest] = useState(false)
    const [greaterAssessment, setGreaterAssessment] = useState(false)

    const propertyPerPage = 4
    const lastIndex = currentPage * propertyPerPage
    const firstIndex = lastIndex - propertyPerPage

    const sizePage = Math.ceil(properties.length / propertyPerPage)
    const numbers = [...Array(sizePage + 1).keys()].slice(1)

    const onPrevious = useCallback(() => {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }, [currentPage, firstIndex])

    const handleCurrentPage = useCallback((index: number) => setCurrentPage(index), [currentPage])

    const onNext = useCallback(() => {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }, [currentPage, lastIndex])
    const getImoveis = async () => {
        const { data } = await Api.get(`/imoveis?userId=${user?.user?.id}`)
        const test = data.map((item: any) => item.property)
        setProperties(test)
    }

    useEffect(() => {
        getImoveis()
    }, [])

    return (
        <>
            <Header />
            <div style={{ width: '1100px', display: 'flex', margin: '0 auto', marginTop: '1rem' }}>
                <h2 style={{ color: 'black' }}>Home {'>'} Meus Imóveis</h2>
            </div>
            <main className={styles['property-container']}>
                <div>
                    <h1>Consulte seus Imóveis Alugados</h1>
                </div>
                <div className={styles['filter-container']}>
                    <p>{properties.length} Apartamentos à venda no Brasil</p>
                    <div>
                        <input placeholder="Nome do Imóvel" className="form-control" onChange={(e) => setPropertyName(e.target.value)} />
                        <button onClick={() => setGreaterAssessment((oldValue) => !oldValue)} className={greaterAssessment ? styles.active : ''}>
                            + Relevancia
                        </button>
                        <button onClick={() => setCheapest((oldValue) => !oldValue)} className={cheapest ? styles.active : ''}>
                            + Baratos
                        </button>
                    </div>
                </div>
                <table>
                    <tbody>
                        {properties.map((property) => (
                            <tr>
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
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableControl firstIndex={firstIndex} lastIndex={lastIndex} currentPage={currentPage} numbers={numbers} handleCurrentPage={handleCurrentPage} onNext={onNext} onPrevious={onPrevious} />
            </main>
        </>
    )
}
