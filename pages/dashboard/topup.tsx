import Input from '../../components/topup/Input';
import { useState, useEffect } from 'react';
import TopUpHeader from '../../components/topup/TopUpHeader';
import Link from 'next/link';
import Button from '../../components/topup/Button';
import Display from '../../components/Display';

export default function topup() {

    const [selectedNetwork, setSelectedNetwork] = useState({
        provider: '',
        image: ''
    });

    const serviceSelected = (networkSelected : any) => {
        setSelectedNetwork((prev) => ({ ...networkSelected }))
        setStep(prev => prev + 1)
    }

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

    useEffect(() => {
        // Validate mobile number
        if (mobile) {
            setMobileValid(true);
        } else if(!mobile || mobile == "") {
            setMobileValid(false)
        }

        // validate number

        if (!amount) {
            setAmountValid(false);
        } else if (Number(amount) > 10000) {
            setAmountError("Amount cannot be greater than N10,000. ");
            setAmountValid(false);
        } else {
            setAmountError('');
            setAmountValid(true);
        }
    
    }, [mobile, amount]);

    const verifyAmount = () => {
        if (amountValid) {
            setStep(prev => prev + 1);
        }
    }

    // API mobile input validation

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key' : `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`
        }
    };

    const verifyNumber = async () => {
        const response: any = await fetch(`https://veriphone.p.rapidapi.com/verify?phone=%2B$${mobile}`, options);
        const data = await response.json()
        if (data.phone_valid) {
            setMobileError(" ")
            setMobileValid(true)
            setStep(pre => pre + 1)
        } else {
            setMobileValid(false)
            setMobileError("Mobile Number is not valid")
        }
    }

    const resources = [
        {
            title: 'Airtime',
            products: [
                {
                    provider: '9mobile Airtime',
                    image:  '/9mobile.png',
                },
                {
                    provider: 'Airtel Airtime',
                    image:  '/airtel.png',
                },
                {
                    provider: 'Glo Airtime',
                    image:  '/glo.png',
                },
                {
                    provider: 'MTN Airtime',
                    image:  '/mtn.png',
                }
    
            ]
        },
    
    ]

    return (
        <main>
            <div className="py-6">
                {
                    step == 0 && <Display resources={resources} serviceSelected={serviceSelected}/>
                }
                {
                    (step > 0 && step <= 3 ) &&
                    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 m-5 md:m-0">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl flex justify-center items-center flex-col">
                                <div className='w-full flex justify-center flex-col items-center'>
                                    <div className=' w-full relative' >
                                        <div className='flex justify-center items-center w-10 h-10 rounded-full hover:bg-indigo-100 absolute' style={{top:'-48px'}} onClick={()=>step > 0 && setStep(pre => pre - 1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lg font-bold " >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                            </svg>
                                        </div>
                                        <TopUpHeader selectedProvider={selectedNetwork} />
                                    </div>
                                    <div className="bg-white py-8 sm:rounded-lg md:max-w-md w-full">
                                        <form className="space-y-6" action="#" method="POST">
                                            {
                                                step == 1 && <Input name="Enter Mobile Number" error={mobileError} validate={mobileValid} verify={verifyNumber} value={mobile} valueInput={(e: any) => setMobile(e.target.value)} /> 
                                            }
                                            {
                                                step == 2 && <Input name="Enter Amount" error={amountError} validate={amountValid} verify={verifyAmount} value={amount} valueInput={(e: any) => setAmount(e.target.value)}  />
                                            }
                                            {
                                                step == 3 && 
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
                                                        <Button validate={true} verify={() => setStep(prev => prev + 1) }/>
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
                    step == 4 && 
                    <div className='w-full flex flex-col justify-between items-start sm:flex-col lg:flex-row p-4'>
                        <div className='sm:w-full md:w-full lg:w-3/5'>
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
                                        <h5 className='font-bold text-base'>{mobile}</h5>
                                        <p className='text-xs text-gray-400 font-medium uppercase'>Datastream Wallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center items center mt-8'>
                                <button type='button' className='inline-block px-5 py-3 bg-indigo-700 rounded text-white font-medium uppercase'>Pay Now</button>
                            </div>
                        </div>
                        <div className='sm:w-full md:w-full lg:w-2/5 pl-2.5'>
                            {/* invoice */}
                            <div className='p-4 w-full'>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between w-full mb-5'>
                                        <div className='text-gray-400'>
                                            <h5 className='text-black font-medium'>MTN Nigeria</h5>
                                            <h6>{mobile}</h6>
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
                                            <h6>{mobile}</h6>
                                            <h6>Nafiu Taiwo</h6>
                                        </div>
                                    </div>
                                    <table className='w-full'>
                                        <thead>
                                            <tr className=' border-t'>
                                                <th className='text-left py-2.5'>Qty</th>
                                                <th className='text-center'>Description</th>
                                                <th className='text-right'>{amount} (NGN)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-b border-t hover:bg-indigo-100'>
                                                <td className='text-left py-2.5'>x1</td>
                                                <td className='text-center py-2.5'>MTN Airtime for <p>{mobile}</p></td>
                                                <td className='text-right'>{amount}.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text-left py-2.5'>Subtotal</td>
                                                <td></td>
                                                <td className='text-right'>{amount}.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text-left py-2.5'>Tax</td>
                                                <td></td>
                                                <td className='text-right'>0.00</td>
                                            </tr>
                                            <tr className='border-b'>
                                                <td className='text-left py-2.5'>Total</td>
                                                <td></td>
                                                <td className='text-right'>NGN {amount}.00</td>
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
    )
}
  