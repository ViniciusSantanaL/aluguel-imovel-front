import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string
    error?: string
    valid?: boolean
    register: any
}

export const TextInput = ({ icon, error, valid, register, ...props }: InputProps) => {
    const inputClassName = `form-control ${valid && 'is-valid'} ${error && 'is-invalid'}`
    const feedbackId = props.name + '-error-feedback'

    return (
        <>
            <input type={props.type} className={inputClassName} placeholder={props.placeholder} {...props} {...register(props.name)} />
            {icon && (
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={icon}></span>
                    </div>
                </div>
            )}

            {error && (
                <div id={feedbackId} className="invalid-feedback">
                    {error}
                </div>
            )}
        </>
    )
}
