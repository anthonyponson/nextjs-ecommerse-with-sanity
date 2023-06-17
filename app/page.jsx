import Image from 'next/image'

export default function Home() {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>spaeaker of many variations</p>
      </div>
      <div className='products-container'>
        {[' product 1 ', ' product 2'].map((item) => item)}
      </div>
    </>
  )
}
