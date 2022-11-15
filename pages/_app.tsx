import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Component} from "react";
import {AuthContextProvider} from "../context/AuthContext";
import {useRouter} from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
// import Layout from '../components/Dashboard/Layout';
// import Sidebar from '../components/Dashboard/Sidebar';

const noAuthRequired = ['/index', '/404', '/', '/signin', '/signup', '/password']

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    return (

        <AuthContextProvider>
            {noAuthRequired.includes(router.pathname)
                ? (
                    <Component {...pageProps} />
                )
                : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )
            }
        </AuthContextProvider>
    )

//use this then you wan to test the app
//     return(
//
//         <AuthContextProvider>
//                         <Component {...pageProps} />
//         </AuthContextProvider>
//     )
}

export default MyApp
