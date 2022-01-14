import React from 'react'
import Proizvod from './Proizvod'

function Korpa({proizvodi}) {
    return (
        <div className='cart-container'>
            {proizvodi.map((proizvod)=>
            <Proizvod  proizvod={proizvod} key={proizvod.id} UKorpi={1}/>
            )}
        </div>
    )
}

export default Korpa