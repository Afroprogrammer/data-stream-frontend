import Input from '../components/topup/Input';
import TopUpAmount from './../components/topup/TopUpAmount';
import TopUpSummary from './../components/topup/TopUpSummary';
import { useState, useEffect } from 'react';
import TopUpHeader from '../components/topup/TopUpHeader';
import { useForm } from 'react-hook-form';
import { json } from 'stream/consumers';
import { type } from 'os';
// import Layout from './../components/Dashboard/Layout';
import Sidebar from './../components/Dashboard/Sidebar';
import Navbar from './../components/Dashboard/Navbar';
type FormValues = {
    mobile: number,
    amount: number
}

import Link from 'next/link'
import { async } from '@firebase/util';
import Button from '../components/topup/Button';

export default function topup() {

    // Form steps
    const [step, setStep ] = useState(0);

    // amount and mobile Input
    const [mobile, setMobile] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileValid, setMobileValid] = useState(false);
    const [amountValid, setAmountValid] = useState(false);

    // Input error
    const [mobileError, setMobileError] = useState('');
    const [amountError, setAmountError] = useState('');
    
    const [mobileStatus, setMobileStatus] = useState('');
    const [error, setError] = useState('')
    const [mobileStatusError, setMobileStatusError] = useState('');

    useEffect(() => {
        if (mobile) {
            setMobileValid(true);
        } else if (mobile == '') {
            setMobileValid(false)
            setAmountError("Amount cannot be empty")
        } else if (!mobile) {
            setMobileValid(false)
            setAmountError("Amount cannot be empty")
        }

        // validate amount

        if (amount) {
            setAmountValid(true)
        } else if (!amount) {
            setAmountValid(false);
            setAmountError("Amount cannot be empty")
        } else if(amount == '') {
            setAmountValid(false)
            setAmountError("Amount cannot be empty")
        } if (Number(amount) > 10000) {
            setAmountError("Amount cannot be greater than N10,000. ")
            setAmountValid(false)
        } else {
            setAmountError('')
            setAmountValid(true);
        }
        
    }, [mobile, amount])

    // Validate Amount

    const validateAmount = () => {
        if (amount) {
            setAmountValid(true)
        } else if (!amount) {
            setAmountValid(false);
            setAmountError("Amount cannot be empty")
        } else if(amount == '') {
            setAmountValid(false)
            setAmountError("Amount cannot be empty")
        } if (Number(amount) > 1000) {
            setAmountError("Amount cannot be greater than N10,000. ")
            setAmountValid(false)
        } else {
            setAmountError('')
            setAmountValid(true);
        }
    }

    const verifyAmount = () => {
        if (amountValid) {
            setStep(prev => prev + 1);
        }
    }

    // API mobile inpute validation

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aca098f173mshd1b76bacd00150bp1e2c4fjsn4b6a192571f8',
            'X-RapidAPI-Host': 'veriphone.p.rapidapi.com'
        }
    };

    const verifyNumber = async () => {
        const response: any = await fetch(`https://veriphone.p.rapidapi.com/verify?phone=%2B$${mobile}`, options);
        const data = await response.json()
        console.log(data)
        setMobileStatus(data.phone_valid)
        if (data.phone_valid) {
            console.log("success");
            setMobileError(" ")
            setStep(pre => pre + 1)
        } else {
            setMobileError("Mobile Number is not valid")
        }
    }

    // useEffect(()=> {
    //     verifyNumber()
    // })

    return (
        <div>
            <Sidebar />
            <div className="md:pl-64 flex flex-col flex-1">
                <Navbar />
                <main>
                    <div className="py-6">
                        {
                            step <= 2 &&
                            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl flex justify-center items-center flex-col">
                                        <div className='w-full flex justify-center flex-col items-center'>
                                            <div className=' w-full relative' >
                                                <div className='flex justify-center items-center w-10 h-10 rounded-full hover:bg-indigo-100 absolute' style={{left:'-48px'}} onClick={()=>step > 0 && setStep(pre => pre - 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lg font-bold " >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                                    </svg>
                                                </div>
                                                <TopUpHeader />
                                            </div>
                                            <div className="bg-white py-8 sm:rounded-lg md:max-w-md w-full">
                                                <form className="space-y-6" action="#" method="POST">
                                                    {
                                                        step == 0 && <Input name="Enter Mobile Number" error={mobileError} validate={mobileValid} verify={verifyNumber} value={mobile} valueInput={(e: any) => setMobile(e.target.value)}/> 
                                                    }
                                                    
                                                    {
                                                        step == 1 && <Input name="Enter Amount" error={amountError} validate={amountValid} verify={verifyAmount} value={amount} valueInput={(e: any) => setAmount(e.target.value)}  />
                                                    }
                                                    {/* {
                                                        step == 2 && <TopUpSummary />
                                                    } */}
                                                    {
                                                        step == 2 && 
                                                        <div>
                                                            <div className='font-sm font-medium border-black-1 border-b pb-3 mb-3 text-black '>
                                                                Mtn TopUp for {mobile}
                                                            </div>
                                                            <div className='font-medium text-gray-500'>
                                                                <div>
                                                                    Quantity:
                                                                    <span className='font-normal ml-2 text-black'>
                                                                        1
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    Price:
                                                                    <span className='font-normal ml-2 text-black'>
                                                                        N {amount}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='mt-6'>
                                                                {/* <button
                                                                    type='button'
                                                                    className="flex w-full uppercase justify-center rounded-sm border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
                                                                    >
                                                                    Submit
                                                                </button> */}
                                                                <Button />
                                                            </div>
                                                        </div>
                                                    }
                                                </form>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        }
                        {
                            step == 3 && 
                            <div className='w-full flex justify-between items-start flex-col md:flex-row p-4'>
                                <div className='md:w-3/5 sm:w-full w-full'>
                                    <div className='flex justify-between items-center w-full py-2.5 border-b-2 border-grey-500 mb-5'>
                                        <div className='text-base font-bold text-black capitalize'>
                                            Select payment method
                                        </div>
                                        <div className='text-indigo-700 font-bold text-sm capitalize'>
                                            <Link href="#" >Add wallet</Link>    
                                        </div>
                                    </div>
                                    <div className='border-2 rounded p-5 h-32 flex justify-start items-center'>
                                        <div className='flex justify-start items-center'>
                                            <input type="radio" className='mr-3 '/>
                                            <div className='h-10 w-14 flex justify-center items-center'>
                                                <img src="/wallet.png" alt="" className='w-full'/>
                                            </div>
                                            <div>
                                                <h5 className='font-bold text-base'>2348106654406</h5>
                                                <p className='text-xs text-gray-400 font-medium uppercase'>Datastream Wallet</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items center mt-8'>
                                        <button type='button' className='inline-block px-5 py-3 bg-indigo-700 rounded text-white font-medium uppercase'>Pay Now</button>
                                    </div>
                                </div>
                                <div className='md:w-2/5 sm:w-full pl-2.5'>
                                    {/* invoice */}
                                    <div className='p-4 w-full'>
                                        <div className='w-full'>
                                            <div className='flex items-center justify-between w-full mb-5'>
                                                <div className='text-gray-400'>
                                                    <h5 className='text-black font-medium'>MTN Nigeria</h5>
                                                    <h6>08106654406</h6>
                                                    <h6>11th Oct, 2022 @ 10:15 GMT</h6>
                                                </div>
                                                <div className='h-12 w-12'>
                                                    <img src='/mtn.jpeg' alt="" className='w-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between w-full mb-5'>
                                                <div className='text-gray-400 capitalize'>
                                                    <h6>Invoice Number</h6>
                                                    <h6>Customer Number</h6>
                                                    <h6>Customer Name</h6>
                                                </div>
                                                <div className='text-gray-400 uppercase text-right'>
                                                    <h6>9S9B7-O4JJV-QI7P2-16CV6</h6>
                                                    <h6>2348106654406</h6>
                                                    <h6>Nafiu Taiwo</h6>
                                                </div>
                                            </div>
                                            <table className='w-full'>
                                                <thead>
                                                    <tr className=' border-t'>
                                                        <th className='text-left py-2.5'>Qty</th>
                                                        <th className='text-center'>Description</th>
                                                        <th className='text-right'>Amount (NGN)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='border-b border-t hover:bg-indigo-100'>
                                                        <td className='text-left py-2.5'>x1</td>
                                                        <td className='text-center py-2.5'>MTN Airtime for <p>2348106654406</p></td>
                                                        <td className='text-right'>50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-left py-2.5'>Subtotal</td>
                                                        <td></td>
                                                        <td className='text-right'>50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-left py-2.5'>Tax</td>
                                                        <td></td>
                                                        <td className='text-right'>0.00</td>
                                                    </tr>
                                                    <tr className='border-b'>
                                                        <td className='text-left py-2.5'>Total</td>
                                                        <td></td>
                                                        <td className='text-right'>NGN 50.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}
  