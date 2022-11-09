import React from 'react';
import Button from './Button';

const Input = ({name, validate, verify, value, valueInput, error} :any) => {
  return (
    <div>
        <label htmlFor="email" className="block text-md font-thin capitalize font-medium text-gray-700">
        {name}
        </label>
        <div className="mt-1">
        <input
            onChange={valueInput}
            value={value}
            id="mobile"
            name="mobile"
            type="number"
            autoComplete="mobile"
            className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {<p className='text-red-500 text-sm font-medium'>{error}</p>}
        </div>
        <div className='mt-6'>
            <Button verify={verify} validate={validate} />
        </div>
    </div>
  )
}

export default Input