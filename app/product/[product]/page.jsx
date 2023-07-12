'use client'

import { getProducts } from '@/sanity/getProduct'
import { Product } from '@/app/components'
import { useState } from 'react'

import { useParams } from 'next/navigation'

const ProductPage = () => {

  const params  = useParams()
  console.log(params)

  const [index , setIndex] = useState()

  const products =  getProducts(params)
  console.log(products, 'products')

  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              {products.length > 0 &&
                products[0].images &&
                products[0].images.length > 0 && (
                  <img
                    src={products[0].images[0].url}
                    height={300}
                    width={300}
                  />
                )}
              <h2>{products.name}</h2>
            </div>
            <div className='flex flex-row'>
              {/* {products.map((product) => (
                <div key={product._id} className='small-images-container'>
                  {product.images &&
                    product.images.map((image) => (
                      <>
                        <img
                          key={image.url}
                          src={image.url}
                          alt={image.alt}
                          height={70}
                          width={70}
                        />
                      </>
                    ))}
                </div>
              ))} */}
            </div>
          </div>

          <div className='flex flex-col'>
            {/* {products.map((product) => (
              <>
                <h2>{product.name}</h2>
                <div className='reviews'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h4>Details:</h4>
                <h3>{product.details}</h3>
                <p className='price'> ${product.price}</p>

                <div className='quantity-box border max-w-[100px] border-gray-300 rounded flex items-center'>
                  <button className='minus-icon border-r-2 bg-transparent text-lg px-2 py-2'>
                    <AiOutlineMinus />
                  </button>

                  <span className='quantity px-2'>4</span>

                  <button className='plus-icon border-l-2 bg-transparent text-lg px-2 py-2'>
                    <AiOutlinePlus />
                  </button>
                </div>

                <div className='buttons'>
                  <button type='button' className='add-to-cart'>
                    Add to Cart
                  </button>

                  <button type='button' className='buy-now'>
                    Buy Now
                  </button>
                </div>
              </>
            ))} */}
          </div>
        </div>

        <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='flex justify-center items-center'>
            <div className=''>
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
