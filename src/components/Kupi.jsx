import { useState } from "react"; 

function Kupi() {

    function porudzbina(){
    document.getElementById("kupi").innerHTML=`
        <h3>${ime}</h3>
        <h3>${prezime}</h3>
        <h3>${email}</h3>
        <h3>${broj}</h3>
        `;   
    }
    const [ime,promenIme]=useState("");
    const[prezime,promeniPrezime]=useState("");
    const[email,promeniEmail]=useState("");
    const[broj,promeniBroj]=useState("");
    
    return (
        <div className="kupi" id="kupi">
        <h3>Popuni formu za kupovinu zeljenih proizvoda: </h3>
           <form >
               <input type="text" placeholder='Ime' onInput={(e)=>{promenIme(e.target.value); console.log(e.target.value)}}/>
               <input type="text" placeholder='Prezime' onInput={(e)=>{promeniPrezime(e.target.value);console.log(e.target.value)}}/>
               <input type="email" placeholder='Email' onInput={(e)=>{promeniEmail(e.target.value);console.log(e.target.value)}}/>
               <input type="text" placeholder='Broj telefona' onInput={(e)=>{promeniBroj(e.target.value);console.log(e.target.value)}}/>
               <button onClick={(e)=>{e.preventDefault();porudzbina()}} >Naruci</button>
           </form>
        </div>
    )
}
export default  Kupi