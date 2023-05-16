import { Link } from "react-router-dom"

export function Home() {
    return (
        <div style={{
            textAlign: "center",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>

            <Link to="/quiz/0" style={{
                textDecoration: "none",
            }}>
                Go to Quiz
            </Link>
        </div >
    )
}