import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post("http://localhost:3000/api/auth/login",
                { email, password }
            )
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex flex-col items-center h-screen justify-center
             bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>
                <h2 className=' font-pacific text-3xl text-white ' >Employee Management System</h2>
                <div className='border shadow p-6 w-80 bg-white'>
                    <h2 className=' text-2xl font-pacifico mb-4' style={{ font: "pacifico" }}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor="email" className='font-pacifico block'>Email</label>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                className='w-full px-2 py-2 border'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className='mb-4'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder='*******'
                                className='w-full px-2 py-2 border'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mb-4 flex items-center justify-between'>
                            <label className='' htmlFor="">
                                <input type="checkbox" className='form-checkbox' />
                                <span className='ml-2 text-gray-700'>Remember me</span>
                            </label>
                            <a href="#" className='text-teal-600'>
                                Forgot password?
                            </a>
                        </div>
                        <div className='mb-4'>
                            <button className='w-full bg-teal-600 text-white py-2'>Login</button>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}


export default Login