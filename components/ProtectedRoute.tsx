import React, {useEffect} from 'react';
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/router";

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {

    const {currentUser} = useAuth()
    const router = useRouter()

    useEffect(() =>
    {
        if (!currentUser) {
            router.push('/signin')
        }
    }, [router,currentUser])

    return (
        <div>
            {currentUser ? children : null}
        </div>
    );
};

export default ProtectedRoute;
