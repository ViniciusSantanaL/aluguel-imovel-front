import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './routes'
import { AuthProvider } from './Providers'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
    return (
        <AuthProvider>
            <>
                <ToastContainer />
                <AppRoutes />
            </>
        </AuthProvider>
    )
}
