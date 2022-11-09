import React from 'react';
import Link from 'next/link';

const QuickLink = ({link} : any) => {
  return (
    <div className='text-center p-3 rounded-lg hover:bg-indigo-100 flex justify-center items-center w-full'>
        <Link href={link.url} className='text-2xl '>
            <a className='text-lg w-full flex justify-start items-center gap-5 font-medium' >
                <link.icon className='h-6 w-6 text-indigo-700' aria-hidden='true'/>
                <span>{link.name}</span>
            </a>
        </Link>
    </div>
  )
}

export default QuickLink