import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";

function NavBar({brojProizvoda}) {
    return (
        <div className='NavBar'>
           <a>My store</a>
           <div className='cart-items'>
               <AiOutlineShoppingCart />
               <p className='cart-num'>{brojProizvoda}</p>
           </div>
        </div>
    )
}

export default NavBar
