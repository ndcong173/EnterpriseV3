import axios from "axios"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import Button from "../components/Button"
import { UserContext } from "../components/UserContext"

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null)
    const { ready, user, setUser } = useContext(UserContext)

    async function logout() {
        await axios.post('/logout')
        setRedirect('/')
        setUser(null)
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className=" text-center max-w-lg mx-auto text-reddit_text mt-20">
            Logged in as {user.name} ({user.email}) <br />
            <Button onClick={logout} className="max-w-sm mt-2">Log out</Button>
        </div>
    )
}