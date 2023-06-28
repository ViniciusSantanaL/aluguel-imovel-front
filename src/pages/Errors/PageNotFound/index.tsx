import { Link } from 'react-router-dom'
import { useTitle } from '../../../hooks'

export function PageNotFound() {
    useTitle('Page Not Found | Aluguel')

    return (
        <section className="content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
            <div className="error-page">
                <h2 className="headline text-warning"> 404</h2>

                <div className="error-content">
                    <h3 style={{ color: 'gray' }}>
                        <i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.
                    </h3>

                    <p style={{ color: 'gray' }}>
                        We could not find the page you were looking for. Meanwhile, you may <Link to={'/'}>return to home</Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}
