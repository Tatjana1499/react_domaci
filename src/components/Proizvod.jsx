import React from 'react';
import {BsFillCartPlusFill, BsCartDash} from "react-icons/bs";


function Proizvod({product, Dodaj, Izbaci}) {
    return (
        <div className='proizvod'>
            <img 
            className='card-img-top'
            src="https:/picsum.photos/200" alt="Slika" />
            <div className="telo-proizvoda">
                <h3 className="card-title">{product.title}</h3> 
                <p className="card-text">{product.description}</p>
            </div>
            <button className='btn' onClick={Dodaj}>
                <BsFillCartPlusFill />
            </button>
            <button className='btn' onClick={Izbaci}>
            <BsCartDash />
            </button>
        </div>
    )
}

export default Proizvod
