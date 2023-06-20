import Link from "next/link"

const HeroBanner = () => {
  return (
    <>
      <div className='hero-banner-container'>
        <div>
          <p className='beates-solo'>small text</p>
          <h3>mid text</h3>
          <img src="" alt="" className="hero-banner-image" />

          <div>
            <Link href="/product/ID">
                <button className="" type="button">b</button>
            </Link>

            <div className="desc">
                <h5>hs</h5>
                <p>jf</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
