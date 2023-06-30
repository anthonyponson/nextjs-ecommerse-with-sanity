import { Product, FooterBanner, HeroBanner } from './components'

import { getProduct } from '@/sanity/getProduct'

import { getBanner } from '@/sanity/GetBanner'

export default async function Home() {
  const products = await getProduct()
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>spaeaker of many variations</p>
      </div>
      <div className='products-container'>
        <Product />
        </div>

      <FooterBanner />
    </>
  )
}

