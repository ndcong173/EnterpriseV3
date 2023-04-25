import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import 'flowbite';
import axios from "axios";



export default function AddStaffPage() {

    const [role, setRole] = useState('staff')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function addStaff(e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
                role
            })
            alert('User added!')
        } catch (error) {
            alert('Invalid email. Please try again')
        }

    }
    // console.log(role)

    return (
        <div className="bg-reddit_dark min-h-screen pt-40">
            <form className=" bg-reddit_dark border border-reddit_dark-brightest p-5 w-1/2 lg:w-1/4 mx-auto rounded-2xl text-reddit_text self-center">
                <h1 className="text-xl mb-5">Add new user</h1>
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
            
                <span className="text-reddit_text-darker text-sm mr-3">Role: </span>
                <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" className="text-white mb-3 bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"> {role}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


                <div id="dropdownRadioBgHover" className="z-10 hidden w-48 bg-reddit_dark divide-y divide-gray-100 rounded-lg shadow ">
                    <ul className="p-3 space-y-1 text-sm  text-reddit_text " aria-labelledby="dropdownRadioBgHoverButton">
                        <li>
                            <div className="flex items-center p-2 rounded hover:bg-reddit_dark-brightest ">
                                <input id="default-radio-4" type="radio" value="QA" onChange={e => setRole(e.target.value)} name="default-radio" className="w-4 h-4 text-orange-500 bg-reddit_dark-brighter border-reddit_dark-border focus:ring-transparent "/>
                                    <label for="default-radio-4" className="w-full ml-2 text-sm font-medium text-reddit_text rounded dark:text-gray-300">QA</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded hover:bg-reddit_dark-brightest ">
                                <input id="default-radio-5" type="radio" value="staff" onChange={e => setRole(e.target.value)} name="default-radio" className="w-4 h-4 text-orange-500 bg-reddit_dark-brighter border-reddit_dark-border focus:ring-transparent "/>
                                    <label for="default-radio-5" className="w-full ml-2 text-sm font-medium text-reddit_text rounded ">staff</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <Button className="w-full py-2 mb-3" onClick={e => addStaff(e)}>Add</Button>
            </form>
        </div>
    )
}