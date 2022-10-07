import MobileInput from './../components/topup/MobileInput';
import TopUpAmount from './../components/topup/TopUpAmount';
import TopUpSummary from './../components/topup/TopUpSummary';
import { useState } from 'react';
import TopUpHeader from '../components/topup/TopUpHeader';
import { useForm } from 'react-hook-form';
import { json } from 'stream/consumers';
import { type } from 'os';
type FormValues = {
    mobile: number,
    amount: number
}

export default function topup() {


    const [step, setStep ] = useState(0);
    const [mobileInput, setMobileInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const { watch, register, formState: { errors, isValid }, getValues } = useForm<FormValues>();
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(getValues())
        const {mobile, amount} = getValues();
        setMobileInput(mobile.toString())
        setAmountInput(amount.toString())
    }

    return (
      <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl flex justify-center items-center flex-col">
            <div className=' w-full relative' >
                <div className='flex justify-center items-center w-10 h-10 rounded-full hover:bg-indigo-100 absolute' style={{left:'-48px'}} onClick={()=>step > 0 && setStep(pre => pre - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lg font-bold " >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </div>
                <TopUpHeader />
            </div>
            <div className="bg-white py-8 sm:rounded-lg md:max-w-md w-full">
              <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                {/* {
                    step == 0 && <MobileInput /> 
                }
                
                {
                    step == 1 && <TopUpAmount />
                }
                {
                    step == 2 && <TopUpSummary />
                } */}
                {
                    step == 0 && 
                    <div>
                        <label htmlFor="mobile" className="block text-md font-thin capitalize font-medium text-gray-700">
                        Enter mobile number
                        </label>
                        <div className="mt-1">
                        <input
                            {...register("mobile")}
                            id="mobile"
                            name="mobile"
                            type="number"
                            autoComplete="mobile"
                            className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.mobile && <p className='text-red text-sm font-medium'>{errors.mobile.message}</p>}
                        </div>
                        {/* <div className='mt-6'>
                            <button
                                disabled={!isValid}
                                type="button"
                                className="flex w-full uppercase justify-center rounded-sm border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
                            >
                                Sign in
                            </button>
                        </div> */}
                    </div>
                }
                {
                    step == 1 && 
                    <div>
                        <label htmlFor="amount" className="block text-md font-thin capitalize font-medium text-gray-700">
                        Enter Amount
                        </label>
                        <div className="mt-1">
                        <input
                            {...register("amount")}
                            id="amount"
                            name="amount"
                            type="number"
                            autoComplete="amount"
                            required
                            className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.amount && <p className='text-red text-sm font-medium'>Amount cannot be empty</p>}
                        </div>
                    </div>
                }
                {
                    step == 2 && 
                    <div>
                        <div className='font-sm font-medium border-black-1 border-b pb-3 mb-3 text-black '>
                            Mtn TopUp for {mobileInput}
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
                                    N {amountInput}
                                </span>
                            </div>
                        </div>
                    </div>
                }
                <div className=''>
                    <button
                        onClick={() => setStep(prev => prev + 1)}
                        disabled={!isValid}
                        type={step == 1 ? "button" : "submit"}
                        className="flex w-full uppercase justify-center rounded-sm border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
                    >
                        Submit
                    </button>
                </div>
                {/* <pre>
                    {JSON.stringify(watch(), null,2)}
                </pre> */}
              </form>
            </div>
          </div>
        </div>
      </>
    )
}
  