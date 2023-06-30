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
                  {product.image && <Image className='product-image' width={200} height={1} src={product.image} alt='' />}
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
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
