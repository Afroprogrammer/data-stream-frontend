const Balance = () => {
  return (
    <div className=" w-48 h-14 bg-indigo-700 rounded mx-3 hidden block sm:block">
        <div className="flex justify-between items-center h-full px-3.5">
            <div className="flex flex-col items-start justify-center h-full">
                <div className="text-xs font-normal text-white">
                    Cush Balance:
                </div>
                <div className="text-base font-bold text-white">
                    N 0.00
                </div>
            </div>
            <div className="top-up">
                <a href="#" className="">

                </a>
                <div className=" h-7 w-7 bg-white flex justify-center items-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 h-3 bg-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Balance