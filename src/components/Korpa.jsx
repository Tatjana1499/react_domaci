import React from 'react'
import Proizvod from './Proizvod'

function Korpa({products}) {
    return (
        <div className='cart-container'>
            {products.map((proizvod)=>
            <Proizvod  product={proizvod} key={proizvod.id} UKorpi={1}/>
            )}
        </div>
    )
}

export default Korpa
