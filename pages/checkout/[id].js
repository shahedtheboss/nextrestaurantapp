import axios from 'axios'
import Header from '../../components/Header'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/cartSlice'

const Checkout = ({item}) =>{
    const dispatch = useDispatch()

    const handleClick = () =>{
        const price = item.price
        const quantity = 1;
        dispatch(addProduct({...item, price, quantity}));
        alert("Item added")
    };
    return(
        <div>
            <Header />
            <div className="checkmain">
                <div className="checkup">
                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-cart-essentials-icongeek26-flat-icongeek26.png" alt="" />
                    <h1>Order Summary</h1>
                </div>
                <div className="divider"></div>
                <div className="itinfo">
                    <img src={item.image} alt="" />
                    <h1>{item.pname}</h1>
                    <div className="prs">
                        <h3>Total Price:</h3>
                        <h3>
                            <strong>{item.price}</strong>
                        </h3>
                    </div>

                </div>
                <div className="divider"></div>
                <div className="fr" >
                    <button className="loginbt" onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    )

}

export default Checkout

export  const getServerSideProps = async({params}) =>{
    const res = await axios.get(`https://nextpro-shahedtheboss.vercel.app/api/products/${params.id}`)
    // console.log(params)
    
    return{
        props:{
            item: res.data
        }
    }
}
