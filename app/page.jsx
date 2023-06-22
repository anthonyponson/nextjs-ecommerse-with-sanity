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

// export const getServerSideProps = async () => {
//   const q = '*[_type ==  "product"]'
//   const newProducts = await newClient.fetch(q)

//   const bannerQuery = '*[_type ==  "banner"]'
//   const bannerData = await newClient.fetch(bannerQuery)

//   return{
//     props: { newProducts , bannerData}
//   }
// }
