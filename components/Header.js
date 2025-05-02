import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import img from '../img/cart.png'
import { useSelector } from 'react-redux'

const Header = () =>{
    const quantity  = useSelector(state=>state.cart.quantity)
    return (
        <div>
            <header>
                <img src="" alt="" className="logo" />
                <nav>
                    <ul className="navlinks">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders">
                                <a>Orders</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link href="/login">
                        <button className="login">
                            Login
                        </button>
                    </Link>
                </div>
                    <Link href="/cart">
                    <div>
                        <div className={styles.cart}>
                            <Image src={img} alt="" width= "30px" height= "30px" className={styles.img} />
                            <div className={styles.counter}>{quantity}</div> 
                        </div>
                    </div>
                    </Link>
            </header>
        </div>
    )
}

export default Header