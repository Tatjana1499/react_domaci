import React from 'react'
import Proizvod from './Proizvod'

function Proizvodi({proizvodi, Dodaj, Izbaci}) {

    const naziv = "";
    const op = "";


    return (
        <div className='all-products'>

            {proizvodi.map((proizvod)=> <Proizvod product={proizvod} key={proizvod.id} Dodaj={Dodaj} Izbaci={Izbaci} /> )}

           {/*  <Proizvod product={proizvodi[0]}/> 
             <Proizvod product={proizvodi[1]}/> 
             <Proizvod product={proizvodi[2]}/>*/ }
        </div>
    )
}

export default Proizvodi
