import React from 'react';

const TopUpHeader = ({selectedProvider} :any) => {
  return (
    <div className='w-full flex justify-center items-center flex-col bg-gray-100 py-12 rounded-sm border-2 border-grey-500'>
        <img src={selectedProvider.image} alt="" className='w-16 mb-4' />
        <div className='text-black text-lg text-black '>
            {selectedProvider.provider}
        </div>
    </div>
  )
}

export default TopUpHeader