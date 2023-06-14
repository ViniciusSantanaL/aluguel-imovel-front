import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthLayout } from './layouts'
import { PageNotFound } from './pages/Errors'
import { Login, Register } from './pages/Auth'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />

                <Route path={'auth'} element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
