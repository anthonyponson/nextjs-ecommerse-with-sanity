'use client'

import { getProducts } from '@/sanity/getProduct'
import Image from 'next/image'
import { useState } from 'react'

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'

export default async function Product() {



  const products = await getProducts()

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };


  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
          <div className='flex flex-col'>
            <Image
              src={products.image}
              width={300}
              height={300}
              alt={products.name}
            />
          </div>

          <div className='flex flex-col'>
            <h1>{products.name}</h1>
            <div className='reviews'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p>(28)</p>
            </div>
            <h4>Details:</h4>
            <p className='price'> ${products.price}</p>

            <div className='quantity-box border max-w-[80px] border-gray-300 rounded flex items-center'>
              <button
                className='minus-icon border-none bg-transparent text-lg px-2 py-1'
                onClick={handleDecrease}
              >
                -
              </button>
              <span className='quantity px-2'>{quantity}</span>
              <button
                className='plus-icon border-none bg-transparent text-lg px-2 py-1'
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
