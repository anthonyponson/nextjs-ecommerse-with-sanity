import { getProduct, getProducts } from '@/sanity/getProduct'

import { Product } from '@/app/components'

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'

const ProductPage = async ({ params }) => {
  const slug = params.product
  const products = await getProducts(slug)
  console.log(products, 'products djbj')
  const newProduct = await getProduct()

  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              {products.images && products.images.length > 0 && (
                <img src={products.images[0].url} height={400} width={400} />
              )}
              <h2>{products.name}</h2>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              {/* {products.map((product) => (
                <div key={product._id}>
                  {product.images &&
                    product.images.map((image) => (
                      <img
                        key={image.url}
                        src={image.url}
                        alt={image.alt}
                        height={400}
                        width={400}
                      />
                    ))}
                  <h2>{product.name}</h2>
                </div>
              ))} */}
            </div>
          </div>
          {/* <div className='flex flex-col'>
            <h1>{products.name}</h1>
            <div className='reviews'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p>(28)</p>
            </div>
            <h4>Details:</h4>
            <h3>{products.details}</h3>
            <p className='price'> ${products.price}</p>

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
          </div> */}
        </div>

        {/* <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              <Product />
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ProductPage
