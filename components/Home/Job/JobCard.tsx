import React from 'react'
import { BsBookmark } from 'react-icons/bs';

type Props = {
  job: {
    id: number;
    image: string;
    title: string;
    location: string;
    jobType: string;
    urgency: string;

  };

};

const JobCard = ({ job }: Props) => {
  return (
    <div className='border-[1.5px] border-b-gray-300 dark:border-gray-700 p-6 rounded-lg relative'>
      <div className='w-7 h-7 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 flex items-center transition-all duration-200 justify-center rounded-full flex-col absolute top-4 right-4'>
        <BsBookmark className='w-3 h-3' />
      </div>
    </div>
  )
}

export default JobCard