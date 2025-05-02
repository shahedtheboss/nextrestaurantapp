import Link from 'next/link'

const Item = ({pr}) =>{
    return(
        <div className="it">
            <img className="itimg" src={pr.image} alt="" />
            <h2 className="itnm">{pr.pname}</h2>
            <p className="itpr">
                <strong>Tk.{pr.price}</strong>
            </p>
            <Link href={`/checkout/${pr._id}`} passHref>
                <button className="itbt">
                    Order Now
                </button>
            </Link>
        </div>
    )
}

export default Item