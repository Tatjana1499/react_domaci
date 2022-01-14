import React from 'react';
import {BsFillCartPlusFill, BsCartDash} from "react-icons/bs";


function Proizvod({product, Dodaj, Izbaci, UKorpi}) {
    return (
        <div className={UKorpi===1 ? ("card-cart"):("proizvod")}>
            <img 
            className={UKorpi===1 ? ("card-img-left"):('card-img-top')}
            src="https:/picsum.photos/200" alt="Slika" />
            <div className="telo-proizvoda">
                <h3 className="card-title">{product.title}</h3> 
                <p className="card-text">{product.description}</p>
            </div>
            {UKorpi===0 ?
            (<>
            <button className='btn' onClick={Dodaj}>
                <BsFillCartPlusFill />
            </button>
            <button className='btn' onClick={Izbaci}>
            <BsCartDash />
            </button>
            </> 
            ):(<>
            Broj porucenih artikala:
            {product.amount}
            </>)}
            
        </div>
    )
}

export default Proizvod
