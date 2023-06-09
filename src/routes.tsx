import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AppLayout, AuthLayout } from './layouts'
import { PageNotFound } from './pages/Errors'
import { Login, Register } from './pages/Auth'
import { FC, useContext } from 'react'
import { AuthContext } from './context'
import { Property } from './pages/Property'
import { Payment } from './pages/Payment'
import { PaymentConfirmed } from './pages/Confirme'
import { MyProperties } from './pages/MyProperties'

const PrivateOutlet: FC = ({ children }: any) => {
    const { isAuthenticated } = useContext(AuthContext)

    console.log(isAuthenticated)

    return isAuthenticated ? (
        <>
            {children}
            <Outlet />
        </>
    ) : (
        <Navigate to={'/auth/login'} replace />
    )
}

// const PublicOutlet: FC = ({ children }: any) => {
//     const { isAuthenticated, user } = useContext(AuthContext)
//
//     console.log({ isAuthenticated, user })
//
//     return !isAuthenticated ? (
//         <>
//             {children}
//             <Outlet />
//         </>
//     ) : (
//         <Navigate to={'/'} replace />
//     )
// }

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PrivateOutlet />}>
                    <Route path={'pagamento-confirmado'} element={<PaymentConfirmed />} />
                    <Route path={'alugados'} element={<MyProperties />} />
                    <Route path="pagamento" element={<Payment />} />
                    <Route path="pagamento?imovelId=:imovelId" element={<Payment />} />
                    <Route path={'imoveis'} element={<Property />} />
                </Route>

                <Route path={'/'} element={<AppLayout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path={'auth'} element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
