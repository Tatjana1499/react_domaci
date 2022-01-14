
import './App.css';
import NavBar from './components/NavBar';
import Proizvodi from './components/Proizvodi';
import {useState} from "react";
import Korpa from './components/Korpa';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Kupi from './components/Kupi';

function App() {


  const [brojProizvoda, setbrojProizvoda] = useState(0);
  const [proizvodiUKorpi, setproizvodiUKorpi] = useState([]);
  const [proizvodi, setProizvodi] = useState([
    {
      id: 1,
      naziv: "Cvet orhideje u korpici",
      link:"https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3294100685",
      opis:
        "Aranžman je napravljen u drvenoj korpici sa jednim cvetom bele orhideje i dekoracijom. Orhideja je simbol elegancije i otmenosti, stoga je ovaj aranžman idealan ukoliko želite nekome da izkažete zahvalnost ili uz poruku čestitate neki poseban događaj.",
      kolicina: 0,
    },
    {
      id: 2,
      naziv: "Crvene ruže sa dekoracijom u korpici",
      link:"https://www.cvecarakazablanka.com/data/products/1118/feature/0/crvene_ruze_u_korpi.jpg",
      opis:
        "Aranžman je napravljen sa crvenim ružama i kermitom sa bogatom dekoracijom od gipsofile i paprati. Savršen i jednostavan aranžman je idealan za poklon dragoj osobi da joj ulepšate dan tek tako, bez razloga.",
      kolicina: 0,
    },
    {
      id: 3,
      naziv: "Lila ruže i margarete u korpici",
      link:"https://www.cvecarakazablanka.com/data/products/1656/feature/0/DSC_5725.jpg",
      opis:
        "Simpatičan cvetni aranžman je napravljen sa lila ružama I belim hrizantemama u drvenoj korpici. Idealan je kao poklon za rođendan ili kada želite da izrazite nekome zahvalnost ili kao znak pažnje da ulepšate dragoj osobi dan.",
      kolicina: 0,
    },
     {
      id: 4,
      naziv: "Buket - Ruže, lizijantus i margarete",
      link:"https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3294100686",
      opis:
        "Buket je napravljen sa ciklama ružama, ljubičastim lizijantusom i ciklama hrizantemama sa dekoracijom. Ciklama ruže se smatraju simbolom zahvalnosti i poštovanja.",
      kolicina: 0,
    }, {
      id: 5,
      naziv: "Buket - Narandžaste ruže, ljiljan i mini ruže",
      link:"https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3294100707",
      opis:
        "Buket je napravljen sa cvećem vatrenih boja. Narandžste ruže, naranžasti ljiljani i mini ruže čine ovaj buket idealnim za sve prilike. Ukoliko draga osoba voli vatrenu narandžastu boju, nećete pogrešiti pri izboru ovakvog buketa.",
      kolicina: 0,
    }, {
      id: 6,
      naziv: "101 holandska ruža u kutiji",
      link:"https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3294100702",
      opis:
        "101 holandska crvena ruža u kutiji govori više od 1001 reči. Iznenadite voljenu damu za rođendan, Dan zaljubljenih, 8. mart, godišnjicu ili neku drugu posebnu priliku i učinite da se oseća posebnom i voljenom.",
      kolicina: 0,
    },
  ]);

function AzurirajKorpu(){
let azuriraniProizvodi = proizvodi.filter((proizvod)=> proizvod.kolicina>0);
setproizvodiUKorpi(azuriraniProizvodi);
}

  function Dodaj(id){
    setbrojProizvoda(brojProizvoda + 1);
    proizvodi.forEach((proizvod)=> {
      if(proizvod.id === id){
        proizvod.kolicina++;
      }
    });
    AzurirajKorpu();
  }

  function Izbaci(id){
    setbrojProizvoda(brojProizvoda - 1);
    proizvodi.forEach((proizvod)=> {
      if(proizvod.id === id){
        proizvod.kolicina--;
      }
    });
    AzurirajKorpu();
  }

  return (
    <BrowserRouter className="App">
    <NavBar brojProizvoda = {brojProizvoda}></NavBar>

    <Routes>
      <Route path="/" element={<Proizvodi proizvodi = {proizvodi} Dodaj={Dodaj} Izbaci={Izbaci} />} />
      <Route path="/korpa" element={<Korpa proizvodi = {proizvodiUKorpi}/>} />
      <Route path="/kupi" element={<Kupi proizvodi = {proizvodiUKorpi}/>} />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;