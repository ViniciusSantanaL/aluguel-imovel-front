import { Header } from '../../components/Header'
import { PropertyCard } from './Card'
import styles from './styles.module.scss'
import properties from '../../data/properrty.json'
import { useCallback, useState } from 'react'
import { TableControl } from './TableControl'

export function Property() {
    const [currentPage, setCurrentPage] = useState(1)
    const [propertyName, setPropertyName] = useState('')
    const [cheapest, setCheapest] = useState(false)
    const [greaterAssessment, setGreaterAssessment] = useState(false)

    const propertyPerPage = 4
    const lastIndex = currentPage * propertyPerPage
    const firstIndex = lastIndex - propertyPerPage

    const sizePage = Math.ceil(properties.length / propertyPerPage)
    const numbers = [...Array(sizePage + 1).keys()].slice(1)

    const data = properties
        .filter((item) => propertyName === '' || item.title.includes(propertyName.trim()))
        .sort((a, b) => (cheapest ? a.price - b.price : 0))
        .sort((a, b) => (greaterAssessment ? b.assessment - a.assessment : 0))
        .slice(firstIndex, lastIndex)

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

    return (
        <>
            <Header />
            <div style={{ width: '1100px', display: 'flex', margin: '0 auto', marginTop: '1rem' }}>
                <h2 style={{ color: 'black' }}>Home {'>'} Imóveis</h2>
            </div>
            <main className={styles['property-container']}>
                <div>
                    <h1>Busque um Imóvel</h1>
                    <p>Busque um imóvel que tem aquele precinho !</p>
                </div>
                <div className={styles['filter-container']}>
                    <p>37.056 Apartamentos à venda no Brasil</p>
                    <div>
                        <input placeholder="Nome do Imóvel" onChange={(e) => setPropertyName(e.target.value)} />
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
                        {data.map((property) => (
                            <tr>
                                <PropertyCard key={property.id} property={property} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableControl firstIndex={firstIndex} lastIndex={lastIndex} currentPage={currentPage} numbers={numbers} handleCurrentPage={handleCurrentPage} onNext={onNext} onPrevious={onPrevious} />
                <footer>
                    <div></div>
                </footer>
            </main>
        </>
    )
}
