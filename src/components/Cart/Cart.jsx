import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/7319044/pexels-photo-7319044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/7319144/pexels-photo-7319144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Long Sleeve Graphic T-shirts",
            desc: "arsing error: Unexpected token, expected",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "coat",
            desc: "arsing error: Unexpected token, expected",
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]


    return (
        <div className='cart'>
            <h1>Products in Your Cart</h1>
            {data?.map((item) => {
                return <div className='item'>
                    <img src={item.img} alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>1* ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
            })}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset cart</span>
        </div>
    )
}

export default Cart