import Link from 'next/link'

import { getBanner } from '@/sanity/GetBanner'

import Image from 'next/image'

const HeroBanner = async () => {
  const banner = await getBanner()
  return (
    <>
      <div className='hero-banner-container'>
        {banner.map((ban) => (
          <div id={ban._id}>
            <div>
              <p className='beates-solo text-black'>{ban.smallText}</p>

              <h3>{ban.midText}</h3>
              <h1>{ban.largeText1}</h1>
              {ban.image && (
                <img
                  className='hero-banner-image'
                  src={ban.image}
                  width={200}
                  height={200}
                  alt={ban.name}
                />
              )}

              <div>
                <Link href={`/product/${ban.product}`}>
                  <button className='' type='button'>
                    {ban.button}
                  </button>
                </Link>

                <div className='desc'>
                  <h5>Description</h5>
                  <p>{ban.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroBanner
