import { Header } from './Header'
import { Presentation } from './Presentation'
import { Cards } from './Card'

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Presentation />
                <Cards />
                <footer>
                    <div>
                        <p>Footer</p>
                    </div>
                </footer>
            </main>
        </>
    )
}
