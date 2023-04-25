import { useState, useContext } from "react"
import axios from "axios"
import Button from "./Button"
import ClickOutHandler from 'react-clickout-handler'
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "./UserContext"
import 'flowbite';
import AuthModalContext from "./AuthModalContext"


export default function Header() {

    const authModal = useContext(AuthModalContext);
    const { user, setUser } = useContext(UserContext)

    async function logout() {
        await axios.post('/logout')
        setUser(null);
        window.location.reload(true)
    }

    return (
        <header className='w-full bg-reddit_dark p-2 fixed z-20 top-0 left-0 right-0 border-b-2 border-b-reddit_dark-brightest'>
            <div className="mx-4 flex relative">
                <Link to={'/'} className="mx-4 flex gap-2 mt-1">
                    <img src="./Logo.png" alt="" className='w-9 h-9' />
                    <span className=" text-orange-500 text-2xl font-bold my-1">Reddish</span>
                </Link>
                <form action="" className='bg-reddit_dark-brighter text-gray-300 px-3 hidden md:flex rounded-full border border-reddit_border flex-grow mx-48'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='bg-reddit_dark-brighter py-1 pl-2 pr-0 text-xl block focus:outline-none w-full' type="" placeholder='Search' />
                </form>
                {/* <button className='mx-2 my-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                </button>
                <button className='mx-2 my-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                </button> */}

                {!!user && user.role == 'admin' && (
                    <Link to={'/add-user'} className={'mx-2 my-1 hover:bg-reddit_dark-brightest rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mx-2 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Link>
                )}


                <span className=" text-reddit_text mt-2 hidden lg:flex">{!!user && user.role}/{!!user && user.name}</span>
                <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="mx-3 text-sm  rounded-full  " type="button">
                    <span class="sr-only">Open user menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-full bg-gray-500 w-9 h-9 block mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <div id="dropdownAvatar" class="z-10 hidden bg-reddit_dark divide-y divide-gray-100 rounded-lg shadow w-40 border border-reddit_border overflow-hidden">
                    <div class="py-2 ">
                        {!user && (
                            <button
                                onClick={() => authModal.setShow('login')}
                                className="flex w-50 py-2 px-3 text-gray-300 w-full hover:bg-gray-300 hover:text-black text-sm">
                                Log In 
                            </button>
                        )}
                        {!!user && (
                            <button
                                onClick={() => logout()}
                                className="flex w-50 py-2 px-3 text-gray-300 w-full hover:bg-gray-300 hover:text-black text-sm">
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
