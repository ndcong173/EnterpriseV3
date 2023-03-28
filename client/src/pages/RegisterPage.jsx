import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Input from "../components/Input"
import Button from "../components/Button"

export default function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password
            })
            alert('Welcome to Reddish! Log in and enjoy now!')
        } catch (error) {
            alert('Your email is already registed. Please try again')
        }

    }

    return (
        <div className="bg-reddit_dark min-h-screen pt-40">
            <form className=" bg-reddit_dark border border-reddit_dark-brightest p-5 w-1/2 lg:w-1/4 mx-auto rounded-2xl text-reddit_text self-center">
                <h1 className="text-xl mb-5">Sign up</h1>
                <label>
                    <span className="text-reddit_text-darker text-sm">Email</span>
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='mt-1 mb-3 w-full'
                        placeholder="Email"
                    />
                </label>
                <label>
                    <span className="text-reddit_text-darker text-sm">Name</span>
                    <Input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-1 mb-3 w-full'
                        placeholder="Kimi no namae wa"
                    />
                </label>
                <label>
                    <span className="text-reddit_text-darker text-sm">Password</span>
                    <Input
                        type="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='mt-1 mb-3 w-full'
                        placeholder="Password"
                    />
                </label>
                <Button className="w-full py-2 mb-3" onClick={e => register(e)}>Sign up</Button>
                <div>
                    Already have an account? <Link to={'/login'} className=" text-orange-500 font-bold"> Login now!!</Link>
                </div>
            </form>
        </div>

    )
}