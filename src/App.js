
import './App.css';
import NavBar from './components/NavBar';
import Proizvodi from './components/Proizvodi';
import {useState} from "react";
import Korpa from './components/Korpa';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {


  const [brojProizboda, setbrojProizboda] = useState(0);
  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];

  function Dodaj(){
    setbrojProizboda(brojProizboda + 1);
  }
  function Izbaci(){
    setbrojProizboda(brojProizboda - 1);
  }

  return (
    <BrowserRouter className="App">
    <NavBar brojProizvoda = {brojProizboda}></NavBar>

    <Routes>
      <Route path="/" element={<Proizvodi proizvodi = {products} Dodaj={Dodaj} Izbaci={Izbaci}></Proizvodi>} />
      <Route path="/korpa" element={<Korpa products = {products}/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;