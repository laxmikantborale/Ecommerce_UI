import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/7319044/pexels-photo-7319044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/7319144/pexels-photo-7319144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Long Sleeve Graphic T-shirts",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "coat",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Skirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hat",
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]
    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} Products</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has
                </p>
            </div>
            <div className='bottom'>
                {
                    data.map(item => {
                        return <Card item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProducts