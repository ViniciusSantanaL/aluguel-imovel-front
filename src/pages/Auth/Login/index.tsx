import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useTitle } from '../../../hooks'
import { TextInput } from '../../../components'
import { LoginType } from '../../../types'

const loginSchema = Yup.object({
    email: Yup.string().trim().min(6).required(),
    password: Yup.string().min(6).required()
}).required()

export function Login() {
    useTitle('Login | Aluguel')

    const navigate = useNavigate()
    const [hasLoggingError, setHasLoggingError] = useState<boolean | string>(false)
    // const { handleLogin } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isValid }
    } = useForm<LoginType>({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = async ({ email, password }: LoginType) => {
        // const result = (await handleLogin(email, password)) as ApiErrorType | boolean
        //
        // if (typeof result === 'object') {
        //     const { message } = result
        //     setHasLoggingError(message)
        // }
        //
        // typeof result === 'boolean' && navigate('/')
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

            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <TextInput
                        name={'email'}
                        type={'text'}
                        placeholder={'Email or Username'}
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

                <div className="row mt-3">
                    <div className="col-12">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block mt-3">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Sign In
                        </button>
                    </div>
                </div>
            </form>

            <p className="mt-5 mb-0">
                <Link to={'/auth/register'} className="text-center">
                    Register
                </Link>
            </p>
        </>
    )
}
