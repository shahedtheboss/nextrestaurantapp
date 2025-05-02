import Item from "./Item"

const Products = ({products}) =>{
    return(
        <div className="allpr">
            {products.map((pr) =>(
                <Item key={pr._id} pr={pr} />
            ))}
        </div>
    )
}

export default Products