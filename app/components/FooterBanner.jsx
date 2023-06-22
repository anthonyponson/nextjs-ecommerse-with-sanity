import { getBanner } from '@/sanity/GetBanner'
import banner from '@/sanity/schemas/banner'
import Link from 'next/link'

const FooterBanner = async () => {
  const banners = await getBanner()

  return (
    <>
      <div className='footer-banner-container'>
        <div className='banner-desc'>
          {banners.map((banner) => (
            <>
              <div className='left'>
                <p>{banner.discount}</p>
                <h3>{banner.largeText1}</h3>
                <h3>{banner.largeText2}</h3>
                <p>{banner.saleTime}</p>
              </div>
              <div className="right">
                <p>{banner.smallText}</p>
                <h3>{banner.midText}</h3>
                <p>{banner.desc}</p>
                <Link href={`/product/${banner.slug}`}>
                <button type='button'>{banner.button}</button>  
                </Link>
              </div>

              <img className='footer-banner-image' src={banner.image} alt="" />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default FooterBanner
