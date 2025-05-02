import axios from 'axios'
import {useState} from 'react'

const AdminPanel = ({products, admin}) =>{
    const [pname, setPname] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const newFood = async(e) =>{
        e.preventDefault()
        axios.post("https://nextpro-shahedtheboss.vercel.app/api/products",{
            pname: `${pname}`,
            image: `${image}`,
            price: `${price}`,
            cat: `${category}`,
        }).then((res) =>{
            console.log(res);
            alert("Food published")
        }).catch((err) =>{
            console.log(err);
        })
    }

    const handleDelete = async(id) =>{
        try{
            const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
            console.log(res);
            alert("Product Deleted")
        }catch(err){
            console.log(err);
        }
    }

    if(admin === false){
        return(
            <h1>Login as an Admin to access this page</h1>
        )
    }else{
        
            return(
                <div>
                <section id="myOrder">
                <div className="title">
                        <h1>Food Information</h1>
                </div>
                <div className="food-info">
                    <div>
                    <form className="input-group">
                    <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Food Name"
                    onChange={(e) =>{setPname(e.target.value)}}
                    required
                    />
                    <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Food Image Link"
                    onChange={(e) =>{setImage(e.target.value)}}
                    required
                    />
                    <select name="" id="catagory" onChange={(e) =>{setCategory(e.target.value)}}>
                    <option value="" disabled>Select Catagory</option>
                    <option value="burger" >Burger</option>
                    <option value="pizza" >Pizza</option>
                    <option value="desert" >Desert</option>
                    </select>
                    <input
                    type="text"
                    className="input-field"
                    placeholder=" Enter the exact price"
                    onChange={(e) =>{setPrice(e.target.value)}}
                    required
                    />
                    <br />
                    <button type="submit" className="submit-btn" onClick={newFood}>Submit</button>
                </form>
                </div>
            </div>
            

            
            <div className="order-info">
                <table>
                <tbody>
                    <tr>
                        <th>Item</th>
                        <th>Item Name</th>
                        <th>Catagory</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </tbody>
                {products.map((fd) =>( 
                    <tbody key={fd._id}>
                    <tr >
                        <td>
                        <div className="item-img">
                            <img src={fd.image} alt="item img" className="foodImg" />
                        </div>
                        </td>
                        <td>{fd.pname}</td>
                        <td>{fd.cat}</td>
                        <td>{fd.price}</td>
                        <td><button type="submit" className="delet" onClick={() =>{handleDelete(fd._id)}}>Delete</button></td>
                    </tr>
                    </tbody>  
                    ))}      
                </table>
            </div>
        </section>
        </div>
            )

    }

}

export default AdminPanel

export const getServerSideProps = async(ctx) =>{
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if(myCookie.token === process.env.TOKEN){
        admin = true;
    }

    const productsRes = await axios.get("https://nextpro-shahedtheboss.vercel.app/api/products")

    return{
        props:{
            products: productsRes.data,
            admin,
        }
    }
}