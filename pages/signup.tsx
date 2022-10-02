import React, {useRef, useState} from 'react';
import {useRouter} from "next/router";
import {useAuth} from "../context/AuthContext";
import Link from "next/link";
import {ExclamationCircleIcon} from "@heroicons/react/solid";




const Signup = () => {
    const {signup, googleLogin,currentUser } = useAuth()
    const [error, setError ] = useState('')
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef  = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    async function handleSubmit (e:any){
        e.preventDefault()

        if((passwordRef as any).current.value !== ( passwordConfirmRef as any).current.value){
            return setError("Passwords do not match ")
        }

        try {
            setError('')
            setLoading(true)
            if((emailRef as any).current.value !== ( emailRef as any).current.value) {
                await signup(emailRef.current, passwordRef.current)
            }
            router.push('/dashboard')
        } catch (e:any){
            setError(e.message)
        }
        setLoading(false)
    }
    async function handleOAuthSignIn(e: any) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await googleLogin()
            router.push('/dashboard')
        } catch (e: any) {
            setError(e.message)
        }
        setLoading(false)
    }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    src="/crushlogo.png"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Get Started For Free</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already registered?{' '}
                    <Link href="/signin">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                        </Link>
                    {' '} into your account
                </p>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && <div className="rounded-md bg-yellow-50 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <ExclamationCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                                <div className="mt-2 text-sm text-yellow-700">
                                    <p>
                                        {error}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>}

                    <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
                    {/*<form className="space-y-6" action="#" method="POST" >*/}
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                {/*<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">*/}
                                {/*   */}
                                {/*</label>*/}
                                <input
                                    placeholder=" First name"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                {/*<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">*/}
                                {/*    */}
                                {/*</label>*/}
                                <input
                                    placeholder="Last name"
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            {/*<label htmlFor="email" className="block text-sm font-medium text-gray-700">*/}
                            {/*    */}
                            {/*</label>*/}
                            <div className="mt-1">
                                <input
                                    placeholder="Email address"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    ref={emailRef}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-1">
                                <input
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    ref={passwordRef}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>

                            <div className="mt-1">
                                <input
                                    placeholder ="Password Confirmation"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    ref={passwordConfirmRef}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-2">

                            {/*//facebook social login removed*/}
                            {/*<div>*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"*/}
                            {/*    >*/}
                            {/*        <span className="sr-only">Sign in with Facebook</span>*/}
                            {/*        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">*/}
                            {/*            <path*/}
                            {/*                fillRule="evenodd"*/}
                            {/*                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"*/}
                            {/*                clipRule="evenodd"*/}
                            {/*            />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <div onClick={handleOAuthSignIn}>
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640" >

                                        <path d="M320 0C143.234 0 0 143.234 0 320s143.234 320 320 320 320-143.234 320-320S496.766 0 320 0zm4.76 560.003C192.12 560.003 84.757 452.651 84.757 320c0-132.651 107.364-240.003 240.003-240.003 64.772 0 118.998 23.646 160.774 62.753l-65.115 62.764c-17.894-17.114-49.005-36.992-95.647-36.992C242.78 168.522 176.01 236.4 176.01 320c0 83.6 66.887 151.478 148.762 151.478 95.01 0 130.643-68.233 136.124-103.513l-136.136-.012v-82.241l226.633.012c1.996 12.012 3.768 24.012 3.768 39.768.118 137.116-91.761 234.523-230.353 234.523l-.047-.012z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;







