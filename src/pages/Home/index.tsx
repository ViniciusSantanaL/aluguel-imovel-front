import { Header } from '../../components/Header'
import { Presentation } from './Presentation'
import { Cards } from './Card'
import { Contact } from './Contact'

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Presentation />
                <Cards />
                <Contact />
            </main>
        </>
    )
}
