import React from 'react';

const MobileNumber = () => {
  return (
    <div>
        <label htmlFor="email" className="block text-md font-thin capitalize font-medium text-gray-700">
        Enter mobile number
        </label>
        <div className="mt-1">
        <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        </div>
    </div>
  )
}

export default MobileNumber