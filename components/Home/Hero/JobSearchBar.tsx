import React from 'react'
import { FaMap } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'

const JobSearchBar = () => {
  return (
    <div className='w-full max-w-4xl mx-auto mt-8'>
      <div className='flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden'>
        {/* what fields */}
        <div className='flex items-center border-b md:border-b-0 md:border-r border-b-gray-200 dark:border-gray-700 px-4 sm:py-6 py-3 w-full md:w-1/2'>
          <MdSearch className='text-gray-500 text-xl mr-2' />
          <input
            type='text'
            placeholder='Job title or company' className='w-full outline-none' />
        </div>
        {/* where fields */}
        <div className='flex items-center border-b md:border-b-0 border-gray-200 dark:border-gray-700 px-4 sm:py-6 py-3 w-full md:w-1/2'>
          <FaMap className='text-gray-500 text-xl mr-2' />
          <input type='text' placeholder='City or postcode'
            className='w-full outline-none' />
        </div>
        {/* find jobs button */}
        <button className='bg-blue-600 text-white px-8 sm:py-6 py-3 cursor-pointer text-sm md:text-base w-full md:w-auto min-w-[140px] whitespace-nowrap hover:bg-blue-700 transition'>Find Jobs</button>
      </div>

    </div>
  )
}

export default JobSearchBar