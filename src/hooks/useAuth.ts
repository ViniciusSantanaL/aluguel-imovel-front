import { useEffect, useState } from 'react'

import { ApiErrorType, LoginType, RegisterType, UserLoggedType } from '../types'
import { Api } from '../services'

export function useAuth() {
    const USER_KEY: string = '@Aluguel:User'
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<UserLoggedType | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const appUser = localStorage.getItem(USER_KEY)

        if (appUser) {
            const userData = JSON.parse(appUser) as UserLoggedType
            setUser(userData)
            Api.defaults.headers.common['Authorization'] = `Bearer ${userData.accessToken}`
            setIsAuthenticated(true)
        }

        setIsLoading(false)
    }, [])

    const handleLogin = async (loginType: LoginType): Promise<ApiErrorType | boolean> => {
        const result = await Api.post('/login', loginType)
            .then((response) => {
                return response
            })
            .catch((err) => {
                return err.response
            })

        const { data, status } = result

        if (status === 200 && data !== null) {
            const userData = data as UserLoggedType
            setUser(userData)
            localStorage.setItem(USER_KEY, JSON.stringify(data))
            setIsAuthenticated(true)

            return true
        }

        return {
            status,
            error: 'Email or password incorrect.'
        } as ApiErrorType
    }

    const handleRegister = async (registerType: RegisterType): Promise<ApiErrorType | boolean> => {
        const { username, email, password, lastName, firstName } = registerType

        const user = {
            username,
            email,
            password,
            firstName,
            lastName
        }
        const result = await Api.post('/register', user)
            .then((response) => {
                return response
            })
            .catch((err) => {
                return err.response
            })

        const { data, status } = result

        if (status === 201 && data !== null) {
            const userData = data as UserLoggedType
            setUser(userData)
            localStorage.setItem(USER_KEY, JSON.stringify(data))
            setIsAuthenticated(true)

            return true
        }

        return {
            status,
            error: data
        } as ApiErrorType
    }

    const handleLogout = (): void => {
        localStorage.removeItem(USER_KEY)
        // Api.defaults.headers.common['Authorization'] = ''
        setIsAuthenticated(false)
        const userLogged = {
            accessToken: null,
            user: null
        } as UserLoggedType
        setUser(userLogged)
    }

    return { isAuthenticated, isLoading, user, setUser, handleLogin, handleLogout, handleRegister }
}
