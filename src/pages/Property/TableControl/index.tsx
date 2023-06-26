import styles from './styles.module.scss'

interface TableControlProps {
    numbers: number[]
    currentPage: number
    lastIndex: number
    firstIndex: number
    onPrevious: () => void
    handleCurrentPage: (index: number) => void
    onNext: () => void
}

export function TableControl({ numbers, currentPage, firstIndex, onPrevious, handleCurrentPage, onNext }: TableControlProps) {
    return (
        <div className={styles['table-control-container']}>
            {currentPage !== firstIndex + 1 && <button onClick={onPrevious}>Anterior</button>}
            {numbers.map((item) => (
                <p className={currentPage === item ? styles.active : ''} key={item} onClick={() => handleCurrentPage(item)}>
                    {item}
                </p>
            ))}
            {currentPage !== 5 && <button onClick={onNext}>Próximo</button>}
        </div>
    )
}
