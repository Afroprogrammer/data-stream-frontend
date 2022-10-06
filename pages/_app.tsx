import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Component} from "react";
import {AuthContextProvider} from "../context/AuthContext";
import {useRouter} from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

const noAuthRequired = ['/index', '/404', '/', '/signin', '/signup', '/password']

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    // return (
    //
    //     <AuthContextProvider>
    //         {noAuthRequired.includes(router.pathname)
    //             ? (
    //                 <Component {...pageProps} />
    //             )
    //             : (
    //                 <ProtectedRoute>
    //                     <Component {...pageProps} />
    //                 </ProtectedRoute>
    //             )
    //         }
    //     </AuthContextProvider>
    // )


    return(

        <AuthContextProvider>
                        <Component {...pageProps} />
        </AuthContextProvider>
    )
}

export default MyApp
