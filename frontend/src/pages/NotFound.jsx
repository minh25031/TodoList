import React from 'react'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-contert min-h-screen text-center bg-slate-50'>
            <img />
            <p className='text-xl font-semibold text-gray-700'>404 | Not Found</p>

            <a href='/' className="inline-block px-6 py-3 mt-6 font-medium text-white bg-amber-500 transtion shadow-md hover:bg-primary-dark">Go to Home</a>
        </div>
    )
}

export default NotFound