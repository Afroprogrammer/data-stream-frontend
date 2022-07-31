import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import {Component} from "react";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// @ts-ignore
class MyApp extends Component<{ Component: any, pageProps: any }> {
    render() {
        let {
            Component,
            pageProps: {session, ...pageProps}
        } = this.props;
        return (
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        )


    }
}

export default MyApp
