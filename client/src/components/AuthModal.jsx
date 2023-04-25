import Input from "./Input";
import axios from "axios";
import { useState, useContext } from 'react';
import AuthModalContext from "./AuthModalContext";
import { UserContext } from "./UserContext";
import ClickOutHandler from "react-clickout-handler";


export default function AuthModal() {

    const modalContext = useContext(AuthModalContext);
    const user = useContext(UserContext);

    const [authType, setAuthType] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { setUser } = useContext(UserContext);

    // async function register(e){
    //     e.preventDefault()

    //     // axios.get('/test')
    //     try {
    //         await axios.post('/register', {
    //             name,
    //             email,
    //             password
    //         })
    //         alert('Welcome to Reddish! Log in and enjoy now!')
    //     } catch (error) {
    //         alert('Your email is already registed. Please try again')
    //     }
    // }

    const visibleClass = modalContext.show ? 'block' : 'hidden';
    if (modalContext.show && modalContext.show !== authType) {
        setAuthType(modalContext.show);
    }


    async function handleLogin(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post("/login", { email, password });
            alert("Login success");
            modalContext.setShow(false);
            setUser(data);
            window.location.reload()
        } catch (error) {
            alert("login fail");
        }
    }

    return (
        <div className={"w-screen h-screen fixed top-0 left-0 z-30 flex " + visibleClass} style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
            <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
                <form className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-3/4 md:w-1/2 lg:w-1/4 mx-auto rounded-2xl text-reddit_text self-center">
                    {authType === "login" && (
                        <>
                            <h1 className="mb-4 text-2xl">Login</h1>
                        </>
                    )}
                    {authType === "register" && (
                        <>
                            <h1 className="mb-4 text-2xl">Register</h1>
                            <Input placeholder="Name...." className="mb-2 w-full" type="text" value={name} onChange={e => setName(e.target.value)} />
                        </>
                    )}
                    <Input placeholder="Email...." className="mb-2 w-full" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="Password...." className="mb-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {authType === "login" && (
                        <>

                            <button className="bg-orange-500 py-1 px-7 rounded-full hover:bg-gray-300 hover:text-orange-500" onClick={(e) => handleLogin(e)}>Login</button>
                            {/* <div>
                                New ? <button onClick={() => setAuthType("register")}>Sign up</button>
                            </div> */}
                        </>
                    )}
                    {authType === "register" && (
                        <>
                            <button className="bg-orange-500 py-1 px-7 rounded-full hover:bg-gray-300 hover:text-orange-500 mx-auto" onClick={(e) => register(e)}>Sign up</button>
                            <div>
                                Already have account ? <button onClick={() => setAuthType("login")}>sign up</button>
                            </div>
                        </>
                    )}

                </form>
            </ClickOutHandler>
        </div>
    )
}