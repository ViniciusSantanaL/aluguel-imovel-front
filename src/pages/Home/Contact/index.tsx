import { Link, useNavigate } from 'react-router-dom'

import cardStyle from '../Card/styles.module.scss'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactType } from '../../../types'
import { toast } from 'react-toastify'
import { TextInput } from '../../../components'
import { Api } from '../../../services'

const contactSchema = Yup.object({
    email: Yup.string().email().trim().min(6).required(),
    name: Yup.string().trim().min(3).required(),
    subject: Yup.string().trim().min(3).required(),
    content: Yup.string().min(10).required()
}).required()

export function Contact() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isValid },
        reset
    } = useForm<ContactType>({
        mode: 'onTouched',
        resolver: yupResolver(contactSchema)
    })

    const onSubmit = async (contact: ContactType) => {
        const result = await Api.post('contact-emails', contact)

        if (result.status !== 201) {
            toast.error('Occorreu um erro, tenta novamente.')

            return
        }

        toast.success('Email successfully sent.')
        reset()
        navigate('/')
    }

    return (
        <section className={cardStyle['cards-container']} id="contact">
            <div className={cardStyle['cards-content']}>
                <article className={cardStyle['card-text']}>
                    <h2>Entrar em contato conosco</h2>
                    <p>A Aluguei conecta você as melhores oportunidades de investimento de renda residencial. Não importa se você já investe no setor imobiliário ou se quer começar agora.</p>
                </article>
            </div>

            <div className="container" style={{ paddingBottom: 200 }}>
                <div className="row">
                    <div className="col-lg-3 pb-5">
                        <div className="contact_info">
                            <div className="info_item" style={{ color: '#6d8884' }}>
                                <i className="lnr lnr-home"></i>
                                <h6>Brasilia, Asa Sul</h6>
                                <p>Rua Santa monica</p>
                            </div>
                            <div className="info_item" style={{ color: '#6d8884' }}>
                                <i className="lnr lnr-phone-handset"></i>
                                <h6>
                                    <Link to={'#'}>(61) 9 9999-9999</Link>
                                </h6>
                                <p>Segunda de 09h00 até Sexta as 18H00 </p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6>
                                    <Link type={'email'} to={'#'}>
                                        suporte@alugei.com.br
                                    </Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9" onSubmit={handleSubmit(onSubmit)}>
                        <form className="row contact_form" action="" method="post" id="contactForm">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput name={'name'} type={'text'} placeholder={'Nome completo'} register={register} error={errors.name && errors.name.message} valid={isValid} />
                                </div>
                                <div className="form-group">
                                    <TextInput name={'email'} type={'email'} placeholder={'Email'} register={register} error={errors.email && errors.email.message} valid={isValid} />
                                </div>
                                <div className="form-group">
                                    <TextInput name={'subject'} type={'text'} placeholder={'Assunto'} register={register} error={errors.subject && errors.subject.message} valid={isValid} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea
                                        className={`form-control ${isValid && 'is-valid'} ${errors.content && errors.content.message && 'is-invalid'}`}
                                        id="content"
                                        {...register('content')}
                                        rows={5}
                                        placeholder="Conteudo"
                                    ></textarea>
                                    {errors.content && errors.content.message && (
                                        <div id="message-error-feedbac" className="invalid-feedback">
                                            {errors.content.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" value="submit" disabled={isSubmitting} className="primary_btn">
                                    {isSubmitting ? <span className="spinner-border spinner-border-sm mr-1"></span> : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
