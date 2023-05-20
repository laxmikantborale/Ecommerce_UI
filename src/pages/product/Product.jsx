import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [qunatity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/7643912/pexels-photo-7643912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={e => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h3>Title</h3>
        <span className='price'>$199</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
          {qunatity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>

        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product