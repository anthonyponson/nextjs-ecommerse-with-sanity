import { getProduct } from '@/sanity/getProduct'
import Image from 'next/image'

import Link from 'next/link'

const Product = async () => {
  const products = await getProduct()

  return (
    <>
      <div className='flex flex-col space-x-4 md:flex-row'>
        {products.map((product) => (
          <>
            <div className=''>
              <Link href={`/product/${product.slug}`}>
                <div className='product-card'>
                  {product.images && product.images.length > 0 && (
                    <img
                    className='product-image'
                      key={product.images[0].url}
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      width={200}
                      height={200}
                    />
                  )}
                  <p className='product-name'>{product.name}</p>
                  <p className='product-price'>{product.price}</p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Product
