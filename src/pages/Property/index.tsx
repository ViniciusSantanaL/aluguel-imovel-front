import { Header } from '../../components/Header'
import { PropertyCard } from './Card'
import styles from './styles.module.scss'
import properties from '../../data/properrty.json'
import { useCallback, useContext, useEffect, useState } from 'react'
import { TableControl } from './TableControl'
import { Property } from '../../types/Property.type'
import { Api } from '../../services'
import { AuthContext } from '../../context'

export function Property() {
    const { user } = useContext(AuthContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [propertiesData, setProperties] = useState<Property[]>([])
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
        .filter((item) => !propertiesData.filter((a) => item.id === a.id).pop())
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
                        {data.map((property) => (
                            <tr>
                                <PropertyCard key={property.id} property={property} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableControl firstIndex={firstIndex} lastIndex={lastIndex} currentPage={currentPage} numbers={numbers} handleCurrentPage={handleCurrentPage} onNext={onNext} onPrevious={onPrevious} />
            </main>
        </>
    )
}
