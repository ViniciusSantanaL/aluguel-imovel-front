export type UserType = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
}

export type UserLoggedType = {
    accessToken: string
    user: UserType
}

export type UserCreatedType = UserLoggedType

export type LoginType = {
    email: string
    password: string
}

export type RegisterType = {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
}
