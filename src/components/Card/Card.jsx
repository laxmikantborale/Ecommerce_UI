import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <>
            <Link to={`/product/${item.id}`}>
                <div className='card'>
                    <div className='image'>
                    {item.isNew && <span>New Season</span>}
                        <img src={item.img} alt='' className='mainIMG' />
                        <img src={item.img2} alt='' className='secondIMG' />
                    </div>


                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>${item.oldPrice}</h3>
                    <h2>${item.price}</h2>
                </div>
            </Link>
        </>
    )
}

export default Card