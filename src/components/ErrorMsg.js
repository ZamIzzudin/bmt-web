import '../styles/components/ErrorMsg.css'

export default function ErrorMsg({ title }) {
    return (
        <span className="error-message">{title}</span>
    )
}