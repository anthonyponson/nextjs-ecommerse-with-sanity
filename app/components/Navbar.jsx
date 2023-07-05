import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Nabbar = () => {
  return (
    <>
      <div className='navbar-container'>
        <p className='logo'>
          <Link href='/'>
            E-Commerce
          </Link>
        </p>

        <button type="button" className='cart-icon'>
          <AiOutlineShoppingCart/>
          <span className='cart-item-qty'>1</span>
        </button>
      </div>
    </>
  )
}

export default Nabbar
