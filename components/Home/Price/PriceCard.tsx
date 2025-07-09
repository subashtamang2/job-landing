import React from 'react'

type Props = {
  type: string;
  price: string;
};

const PriceCard = ({ price, type }: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative'>
      {/* Type check for recomended bedge */}
      {type === 'Standard' && (
        <div className='absolute top-7 right-7 px-6 py-1.5 bg-green-800 text-white rounded-full text-xs'>
          Recomended
        </div>
      )}
      {/* Type  */}
      <h1 className='mt-6 text-xl font-bold text-blue-900  dark:text-blue-200'>{type}</h1>
      {/* Price */}
      <div className='mt-3'>
        <span className='text-4xl font-bold text-blue-950 dark:text-white'>${price}</span>
        / Monthly
      </div>
    </div>
  )
}

export default PriceCard
