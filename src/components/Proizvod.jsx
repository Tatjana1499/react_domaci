import React from 'react';
import {BsFillCartPlusFill, BsCartDash} from "react-icons/bs";


function Proizvod({proizvod, Dodaj, Izbaci, UKorpi}) {
    return (
        <div className={UKorpi===1 ? ("proizvodKorpa"):("proizvod")}>
            <img 
            className={UKorpi===1 ? ("card-img-left"):('card-img-top')}
            src={proizvod.link} alt="Slika" />
            <div className="telo-proizvoda">
                <h3 className="card-title">{proizvod.naziv}</h3> 
                <p className="card-text">{proizvod.opis}</p>
            
            {UKorpi===0 ?
            (<>
            <button className='btn' onClick={()=>Dodaj(proizvod.id)}>
                <BsFillCartPlusFill />
            </button>
            <button className='btn' onClick={()=>Izbaci(proizvod.id)}>
            <BsCartDash />
            </button>
            </> 
            ):(<> Kolicina: {proizvod.kolicina} </>)}
            </div>
        </div>
    )
}

export default Proizvod