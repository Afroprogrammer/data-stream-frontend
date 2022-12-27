import  Link from 'next/link';
import { CashIcon, LightningBoltIcon, PhoneIcon, WifiIcon } from '@heroicons/react/outline';
import QuickLink from '../../components/Dashboard/QuickLink';
import ProtectedRoute from '../../components/ProtectedRoute';

function dashboard() {
    const QuickLinks = [
        {name: "Airtime", icon:PhoneIcon, url : 'dashboard/topup'},
        {name: "Electricity", icon:LightningBoltIcon, url : 'dashboard/electricity'},
        {name: "Data", icon:WifiIcon, url : '#'},
        {name: "Collect Payment", icon: CashIcon, url : '#'},
    ]

    // @ts-ignore
    return (
        <ProtectedRoute>
            <main>
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
                        <h1 className="text-2xl font-semibold text-gray-900">Welcome, Taiwo</h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
                        <div className=" bg-gray-100 rounded-md p-2.5 grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-10 md:px-10 md:py-10">
                            <div className='duration-700 hover:scale-105 hover:shadow-xl h-56 bg-white p-8 flex justify-between items-center flex-col rounded-lg'>
                                <div className='w-full '>
                                    <h2 className='text-xl font-bold'>Wallet Balance: N 0.00</h2>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h4 className='font-normal text-md'>NAFIU TAIWO</h4>
                                    </div>
                                    <div className='h-10 w-10 flex justify-center items-center'>
                                        <img src="/mastercard.png" alt="" className='w-full' />
                                    </div>
                                </div>
                            </div>
                            <div className='gap-3 duration-700 hover:scale-105 hover:shadow-xl bg-white p-8 grid grid-cols-1 lg:grid-cols-2 md:justify-items-center rounded-lg'>
                                {QuickLinks.map((link, index) :any => {
                                    const {name, icon, url} = link
                                    return (
                                        <QuickLink link={link} />
                                    )
                                })}
                            </div>
                            <div className='bg-white p-8 md:col-span-full'>
                                <div>
                                    <h2>Last Transactions</h2>
                                </div>
                                <div>
                                    <h3>Transactions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    )
};

export default dashboard;








