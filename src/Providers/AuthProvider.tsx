import React from 'react'

import { AuthContext } from '../context'
import { useAuth } from '../hooks'

const AuthProvider = ({ children }: { children: React.JSX.Element }) => {
    const { isAuthenticated, isLoading, user, setUser, handleLogout, handleLogin, handleRegister } = useAuth()

    const value = {
        isAuthenticated,
        isLoading,
        user,
        setUser,
        handleLogin,
        handleRegister,
        handleLogout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider }
