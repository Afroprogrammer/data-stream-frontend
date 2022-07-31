import React, {useState} from 'react';
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

const Signup = () => {
    const [email, setEmail] = useState('')
    const {data: session, status} = useSession()
    const {push} = useRouter()

    if(session){
        push('/dashboard')
    }
    const handleOAuthSignIn = (provider:string) => () => signIn(provider)
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        if(!email) return false
        signIn('email', {email, redirect: false})
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
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                    {' '} into your account
                </p>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">

                            {/*//First name and last name  would be taken here if needed*/}

                            {/*<div className="col-span-6 sm:col-span-3">*/}
                            {/*    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">*/}
                            {/*        First name*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="first-name"*/}
                            {/*        id="first-name"*/}
                            {/*        autoComplete="given-name"*/}
                            {/*        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"*/}
                            {/*    />*/}
                            {/*</div>*/}

                            {/*<div className="col-span-6 sm:col-span-3">*/}
                            {/*    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">*/}
                            {/*        Last name*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="last-name"*/}
                            {/*        id="last-name"*/}
                            {/*        autoComplete="family-name"*/}
                            {/*        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        {/*//password would be taken here if needed*/}
                        {/*<div>*/}
                        {/*    <label htmlFor="password" className="block text-sm font-medium text-gray-700">*/}
                        {/*        Password*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-1">*/}
                        {/*        <input*/}
                        {/*            id="password"*/}
                        {/*            name="password"*/}
                        {/*            type="password"*/}
                        {/*            autoComplete="current-password"*/}
                        {/*            required*/}
                        {/*            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div>
                            <button
                                type="submit"
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
                            <div onClick={handleOAuthSignIn('google')}>
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







