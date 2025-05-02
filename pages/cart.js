import Image from 'next/image'
import Header from '../components/Header'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/CartPage.module.css'
import axios from 'axios'

const CartPage = () =>{
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [success, setSuccess] = useState(false)
    const cart = useSelector((state) => state.cart);

    const placeOrder = (e) =>{
        e.preventDefault()
        cart.products.map((item) =>{
            axios.post('https://nextpro-shahedtheboss.vercel.app/api/orders',
            { 
            name: `${fullName}`,
            number: `${number}`,
            price:`${item.price}`,
            fname:`${item.pname}`,
            time:`${Date.now()}`,
            address:`${address}`,
            email: `${email}`,
            status: "Processing",
        }).then((res) =>{
            console.log(res.data);
            setSuccess(true)
        }).catch((err) =>{
            console.log(err);
        })
        })
        if(success === true){
            alert("Success")
        }
    }

    return(
        <div className={styles.container}>
            {cart.products.length === 0 ? (
                <>
                    <Header />
                    <h1>Your Cart is Empty!</h1>
                </>
            ):(
                <>
                <Header />
                <div className={styles.header}>
                    <div>Image</div>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total Price</div>
                </div>
                
                {cart.products.map((item) =>(
                    <div className={styles.body} key={item._id}>
                        <div className={styles.image}>
                            <img src={item.image} alt="" height="90" width="65"/>
                        </div>
                        <p>{item.pname}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>

                        <p>${item.quantity * item.price}</p>
                    </div>
                ))}

                <div className={styles.order}>
                    <h2>Grand Total: $ {cart.total}</h2>
                    <label>Fullname</label>
                    <input type="text" className={styles.logintbt} placeholder="Name" onChange={(e) =>{setFullName(e.target.value)}} />

                    
                    <label>Email</label>
                    <input type="text" className={styles.logintbt} placeholder="Email ID" onChange={(e) =>{setEmail(e.target.value)}} />

                    <label>Address</label>
                    <input type="text" className={styles.logintbt} placeholder="Where do you live?" onChange={(e) =>{setAddress(e.target.value)}} />


                    <label>Phone Number</label>
                    <input type="text" className={styles.logintbt} placeholder="Your Phone NUmber" onChange={(e) =>{setNumber(e.target.value)}} />

                    <button onClick={placeOrder}>Place Order</button>
                </div>
                
                </>
                
            )
        }
        </div>
    )
}

export default CartPage