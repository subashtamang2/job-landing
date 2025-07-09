import Image from 'next/image';
import React from 'react'

type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    location: string;
    position: string;
  };
};

const TopCompanyCard = ({ data }: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-6 m-3'>
      <Image src={data.image} alt={data.name} width={80} height={80} className='object-cover mx-auto' />
      <h1 className='text-lg font-medium mt-4 text-center text-gray-800 dark:text-gray-200'>{data.name}</h1>
    </div>
  )
}

export default TopCompanyCard