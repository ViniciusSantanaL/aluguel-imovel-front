import { ApiErrorType } from './ApiErrorType.ts'

export type UserType = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
}

export type UserLoggedType = {
    accessToken: string | null
    user: UserType | null
}

export type UserCreatedType = UserLoggedType

export type LoginType = {
    email: string
    password: string
}

export type RegisterType = {
    username: string | null
    email: string
    password: string
    firstName: string | null
    lastName: string | null
}

export type AuthContextType = {
    isAuthenticated: boolean
    isLoading: boolean
    user: UserLoggedType | null
    handleLogin: (loginType: LoginType) => Promise<ApiErrorType | boolean>
    handleRegister: (registerType: RegisterType) => Promise<ApiErrorType | boolean>
    handleLogout: () => void
}
