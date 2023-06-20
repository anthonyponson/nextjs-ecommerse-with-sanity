import Image from 'next/image'

import { Product, FooterBanner, HeroBanner } from './components'

import { getProduct } from '@/sanity/getProduct'

// import TypeProduct from '@/types/TypeProduct'

export default async function Home() {

  const projects = await getProduct()

  return (
    <>
      <div>
        {projects.map((project) => (
          <>
            <div key={project._id}>
              {project.name}
              {project.image && (
                <Image src={project.image} width={100} height={100} alt={project.name} />
              )}
            </div>
          </>
        ))}
      </div>

      <HeroBanner />
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>spaeaker of many variations</p>
      </div>
      <div className='products-container'>
        {[' product 1 ', ' product 2'].map((item) => item)}
      </div>

      <FooterBanner />
    </>
  )
}
