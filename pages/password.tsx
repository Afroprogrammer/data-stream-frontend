import React, {useRef, useState} from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import {useAuth} from "../context/AuthContext";

const password = () => {
    const [error, setError ] = useState('')
    const [message, setMessage ] = useState('')
    const emailRef  = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
    const {resetPassword} = useAuth()


    async function handleSubmit (e:any){
        e.preventDefault()
        try {
            setMessage(" ")
            setError('')
            setLoading(true)
            await resetPassword(emailRef as any).current.value
            setMessage('Check your inbox for further instructions ')
        } catch (e:any){

            setError(e.message)
        }
        setLoading(false)

    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/crushlogo.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email and we'll send you a link to reset your password
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="pages/forgotpassword#password.tsx" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                            Reset Password
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Need an Account? {' '}
                                     <a href='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up here</a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default password;








