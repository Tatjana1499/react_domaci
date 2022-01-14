import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom";


function NavBar({brojProizvoda}) {
    return (
        <div className='NavBar'>
           <Link to='/'>Prodavnica</Link>
           <Link to='/korpa' className='cart-items'>
               <AiOutlineShoppingCart />
               <p className='cart-num'>{brojProizvoda}</p>
           </Link>
           <Link to='/kupi'>Kupovina</Link>
        </div>
    )
}

export default NavBar
