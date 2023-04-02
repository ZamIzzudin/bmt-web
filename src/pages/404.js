import { Link } from 'react-router-dom'

import ErrorIllustration from '../assets/error.webp'
import '../styles/pages/404.css'

export default function Page404() {
    return (
        <main className="error-page">
            <img src={ErrorIllustration} alt="Error Ilustration" width="500" />
            <h1>Invalid Page</h1>
            <Link to="/">
                <button className="error-btn">Go Back</button>
            </Link>
        </main>
    )
}