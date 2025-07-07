import React from 'react'

type Props = {
  heading: string;
  subHeading: string;

}

const SectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div>
      <h1 className='sm:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200 text-center'>{heading}</h1>
      <p className='text-center mt-3 text-gray-500 dark:text-gray-400'>{subHeading}</p>
    </div>
  )
}

export default SectionHeading