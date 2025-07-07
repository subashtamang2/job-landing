import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div>
          <h1 className='text-3xl sm:text-6xl font-bold'>join us & Explore Thousnads of jobs</h1>
          <p className='mt-4 text-sm sm:text-lg font-medium'>Find jobs, Employment  & Career Opportunities</p>

        </div>
        {/* image content */}
      </div>
    </div>
  )
}

export default Hero