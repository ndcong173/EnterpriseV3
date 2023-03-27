import { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import axios from  "axios"

export default function AuthModal() {
    const [authType, setAuthType] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function register(e) {
        e.preventDefault();
        const data = { email,name,password }
        axios.post('http://localhost:4000/register',data,{withCredentials:true})
    }

    return (
        <div className="w-screen min-h-screen fixed top-0 left-0 z-20 flex" style={{ backgroundColor: 'rgb(0,0,0,.6)' }}>
            <div className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-3/4 md:w-1/2 lg:w-1/4 mx-auto rounded-2xl text-reddit_text self-center">
                {authType === 'login' && (
                    <>
                        <h1 className="text-xl mb-5">Login</h1>
                        <label>
                            <span className="text-reddit_text-darker text-sm">Email</span>
                            <Input type="email" className='mt-1 mb-3 w-full' placeholder="Email" />
                        </label>
                        <label>
                            <span className="text-reddit_text-darker text-sm">Password</span>
                            <Input type="Password" className='mt-1 mb-3 w-full' placeholder="Password" />
                        </label>
                        <Button className="w-full py-2 mb-3">Login</Button>
                        <div>
                            You're a newbie? <button className=" text-orange-500  font-bold" onClick={() => setAuthType('register')}> Register now!!</button>
                        </div>
                    </>
                )}
                {authType === 'register' && (
                    <>
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
                            Already have an account? <button className=" text-orange-500 font-bold" onClick={() => setAuthType('login')}> Login now!!</button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}