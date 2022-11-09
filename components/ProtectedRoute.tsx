import React, {useEffect, useState} from 'react';
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/router";
import Navbar from './Dashboard/Navbar';
import Sidebar from './Dashboard/Sidebar';

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="md:pl-64 flex flex-col flex-1">
                <Navbar setSidebarOpen={setSidebarOpen} />
                {currentUser ? children : null}
            </div>
        </div>
    );
};

export default ProtectedRoute;
