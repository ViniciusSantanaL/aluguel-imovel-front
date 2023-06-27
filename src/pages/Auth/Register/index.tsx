import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useTitle } from '../../../hooks'
import { TextInput } from '../../../components'
import { ApiErrorType, RegisterType } from '../../../types'
import { AuthContext } from '../../../context'
import { toast } from 'react-toastify'

const VALID_PASSWORD = new RegExp('^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$&*+=%]).{8,25}.*$')

const registerSchema = Yup.object({
    username: Yup.string().trim().min(6).required(),
    email: Yup.string().email().trim().required(),
    password: Yup.string().min(8).matches(VALID_PASSWORD, 'The password must contain at least one lower case, one upper case, one number and one special character').required(),
    firstName: Yup.string().min(3).required(),
    lastName: Yup.string().min(3).required()
}).required()

export function Register() {
    useTitle('Register | Aluguei')
    const navigate = useNavigate()
    const [hasLoggingError, setHasLoggingError] = useState<boolean | string>(false)
    const { handleRegister } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isValid }
    } = useForm<RegisterType>({
        mode: 'onTouched',
        resolver: yupResolver(registerSchema)
    })

    const onSubmit = async (registerType: RegisterType) => {
        const result = (await handleRegister(registerType)) as ApiErrorType | boolean

        if (typeof result === 'object') {
            setHasLoggingError(result.error)
            toast.error(result.error)

            return
        }

        toast.success('User successfully created.')
        navigate('/')
    }

    return (
        <>
            {hasLoggingError && (
                <div className="w-100 p-1 mr-auto ml-auto">
                    <div className="alert alert-danger alert-dismissible fade show">
                        <h5>
                            <i className="icon fas fa-ban"></i> Error!
                        </h5>
                        <p>{hasLoggingError}</p>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setHasLoggingError(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )}

            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <TextInput name={'username'} type={'text'} placeholder={'Username'} icon={'fas fa-user'} register={register} error={errors.username && errors.username.message} valid={isValid} />
                </div>
                <div className="input-group mb-3">
                    <TextInput
                        name={'email'}
                        type={'email'}
                        placeholder={'example@domain.com.br'}
                        icon={'fas fa-envelope'}
                        register={register}
                        error={errors.email && errors.email.message}
                        valid={isValid}
                    />
                </div>
                <div className="input-group mb-3">
                    <TextInput
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        icon={'fas fa-lock'}
                        register={register}
                        error={errors.password && errors.password.message}
                        valid={isValid}
                    />
                </div>

                <div className="input-group mb-3">
                    <TextInput
                        name={'firstName'}
                        type={'text'}
                        placeholder={'First Name'}
                        icon={'fas fa-user'}
                        register={register}
                        error={errors.firstName && errors.firstName.message}
                        valid={isValid}
                    />
                </div>

                <div className="input-group mb-3">
                    <TextInput name={'lastName'} type={'text'} placeholder={'Last Name'} icon={'fas fa-user'} register={register} error={errors.lastName && errors.lastName.message} valid={isValid} />
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block mt-3">
                            {isSubmitting ? <span className="spinner-border spinner-border-sm mr-1"></span> : 'Register'}
                        </button>
                    </div>
                </div>
            </form>

            <div className="mt-5">
                <Link to={'/auth/login'} className="text-center">
                    I already have an account
                </Link>
            </div>
        </>
    )
}
