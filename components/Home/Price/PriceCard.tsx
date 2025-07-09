import React from 'react'
type Props = {
  type: Props;
  price: string;
};

const PriceCard = ({ price, type }: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative'>
      {type === 'Standard' && <div className='absolute top-7 right-7px-6 py-1.5 bg-green-800 text-white rounded-full text-xs'>
        Recomended
      </div>}
    </div>
  )
}

export default PriceCard