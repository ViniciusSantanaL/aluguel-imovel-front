import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthLayout } from './layouts'
import { PageNotFound } from './pages/Errors'
import { Login, Register } from './pages/Auth'
import { FC, useContext } from 'react'
import { AuthContext } from './context'

const PrivateOutlet: FC = ({ children }: any) => {
    const { isAuthenticated } = useContext(AuthContext)

    return isAuthenticated ? (
        <>
            {children}
            <Outlet />
        </>
    ) : (
        <Navigate to={'/auth/login'} replace />
    )
}

const PublicOutlet: FC = ({ children }: any) => {
    const { isAuthenticated } = useContext(AuthContext)

    return !isAuthenticated ? (
        <>
            {children}
            <Outlet />
        </>
    ) : (
        <Navigate to={'/'} replace />
    )
}

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateOutlet />}>
                    <Route path={'/imoveis'} element={<h1>Hello World!</h1>} />
                </Route>

                <Route element={<PublicOutlet />}>
                    <Route Component={Home} path="/" />
                    <Route path={'auth'} element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
