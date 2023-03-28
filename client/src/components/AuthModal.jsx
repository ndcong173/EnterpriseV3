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
            <form className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-3/4 md:w-1/2 lg:w-1/2 mx-auto rounded-2xl text-reddit_text self-center">
                        <h1 className="text-xl mb-5">Add New Post</h1>
                        <label>
                            <span className="text-reddit_text-darker text-sm">Title</span>
                            <input type="text" className='mt-1 mb-3 w-full rounded-2xl bg-reddit_dark-brighter border p-2 border-reddit_dark-brightest' placeholder="/Title" />
                        </label>
                        <label>
                            <span className="text-reddit_text-darker text-sm">Content</span>
                            <textarea type="text" className='mt-1 mb-3 w-full h-40 rounded-2xl bg-reddit_dark-brighter border p-2 border-reddit_dark-brightest resize-none' placeholder="The quick brown fox jumps over the lazy dog" />
                        </label>
                        <Button className="w-full py-2 mb-3">Post</Button>
                        
            </form>
        </div>
    )
}