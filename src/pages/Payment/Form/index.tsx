import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { Api } from '../../../services'
import { Property } from '../../../types/Property.type'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context'

interface PaymentFormProps {
    property: Property
}
export function PaymentForm({ property }: PaymentFormProps) {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<any>({
        mode: 'onTouched'
        //resolver: yupResolver(contactSchema)
    })
    const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, -14))

    const onSubmit = async (data: any) => {
        await Api.post('/imoveis', { ...data, userId: user?.user?.id, property })
        navigate('/pagamento-confirmado')
    }
    return (
        <form className={styles['payment-form-container']} onSubmit={handleSubmit(onSubmit)}>
            <h3>Informações de Pagamento</h3>

            <div className={styles['multiple-input']}>
                <input placeholder="Primeiro Nome" {...register('userFirstName')} />
                <input placeholder="Sobrenome" {...register('userLastName')} />
            </div>
            <input placeholder="CPF" {...register('userDocument')} />
            <input placeholder="Endereço" {...register('userAddress')} />
            <div className={styles['multiple-input']}>
                <input placeholder="Cidade" {...register('userCity')} />
                <input placeholder="Estado" {...register('userState')} />
                <input placeholder="CEP" {...register('userZipCode')} />
            </div>
            <input placeholder="Contato" {...register('userContact')} />
            <div className={styles['date-input-container']}>
                <label htmlFor="fromDate">Data Inicio </label>
                <input type="date" id="fromDate" {...register('userPropertyFromDate')} min={new Date().toISOString().slice(0, -14)} onChange={(e) => setFromDate(e.target.value)} />
                <label htmlFor="toDate">Data Fim</label>
                <input type="date" id="toDate" {...register('userPropertyToDate')} min={fromDate} />
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
