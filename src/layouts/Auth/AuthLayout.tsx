import { Link, Outlet } from 'react-router-dom'

import './styles.css'

export function AuthLayout() {
    return (
        <div className="login-page register-page" style={{ minHeight: '120vh' }}>
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to={'/'} className="h1">
                            <b>Aluguei</b>APP
                        </Link>
                    </div>
                    <div className="card-body">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
