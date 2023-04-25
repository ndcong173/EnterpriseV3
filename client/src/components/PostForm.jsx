import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import PostFormContext from './PostFormContext'
import { UserContext } from "./UserContext"
import AuthModalContext from "./AuthModalContext"

export default function PostForm() {

    const { user } = useContext(UserContext)
    const modalContext = useContext(PostFormContext)
    const authModal = useContext(AuthModalContext)

    function clickPost() {
        if (!user) {
            authModal.setShow('login')
        } else {
            modalContext.setShow(true)
        }
    }

    return (
        <div className=' bg-reddit_dark py-4 text-gray-400'>
            <div className='border border-reddit_border p-2 rounded-md flex bg-reddit_dark-brighter'>
                <div className='rounded-full bg-gray-500 overflow-hidden w-10 h-10'>
                    <img className='' src="./profile-pic.png" alt="" />
                </div>
                <form action="" className='flex-grow bg-reddit_dark-brightest ml-4 mr-2 border border-reddit_border rounded-md'>
                    <input type="text" className='bg-reddit_dark-brightest block w-full p-2 px-3 text-sm rounded-md' placeholder='New post'
                        onFocus={clickPost} />
                </form>
            </div>
        </div>
    )
}