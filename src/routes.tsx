import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthLayout } from './layouts'
import { PageNotFound } from './pages/Errors'
import { Login, Register } from './pages/Auth'
import { FC, useContext } from 'react'
import { AuthContext } from './context'
import { Property } from './pages/Property'
import { Payment } from './pages/Payment'
import { PaymentConfirmed } from './pages/Confirme'

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
                <Route element={<PrivateOutlet />}></Route>

                <Route element={<PublicOutlet />}>
                    <Route Component={Home} path="/" />
                    <Route path={'/pagamento-confirmado'} element={<PaymentConfirmed />} />
                    <Route path="/pagamento" element={<Payment />} />
                    <Route path={'/imoveis'} element={<Property />} />
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
