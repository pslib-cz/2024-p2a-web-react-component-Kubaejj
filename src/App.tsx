import './App.css'
import PercentView from './components/PercentView'
//abych mohl komponentu pouzit tak ji musim dat sem a musi to byt ./neco 

/*
// vytvoreni strukturovaneho datoveho typu my type
//slozene zavorky = staticky object = { string: string, number: number }
// address: { street: string, city: string, country: string } = property

type Address= {
  street: string,
  city: string,
  country: string
}
type MyType = {
  name: string,
  age: number,
  doIt: (h :number) => number, 
  //jak dlouho pracuje,tolik si vydela, neni tu receno kolik za hodinu atd =>
  // DELAGÁT -        doIt = (h:number) => number,
  // PREDPIS METODY - (h:number) => number 
  isStudent: boolean,
  hobbies: Array<string>,
 // address: {
   // street: string,
    //city: string,
    //country: string
  }
  address: Address
 

}
// tu ta slozena zavorka je jako datovy object
const myPerson: MyType = {};
myPerson.name = 'Petr'
myPerson.age = 20
myPerson.isStudent = true
myPerson.hobbies = ['sport', 'programming']
myPerson.address = {
  street: 'Hlavni',
  city: 'Praha',
  country: 'CR'
}
const myPerson2: MyType = {
  name: 'Petr',
  age: 20,
  isStudent: true,
  hobbies: ['sport', 'programming'],
  address: {
    street: 'Hlavni',
    city: 'Praha',
    country: 'CR'
  }
}





type ArrowType = (x: number) => number
// kdyz object = interface
//kdyz type = type
const arrow1: ArrowType = (x) => x + 1
const arrow2: ArrowType = (x) => (
  x + 1
)
const arrow3: ArrowType = (x) => {
  x = 2;
  return (
    x + 1
  )
}
//arrow3 = arrow4, pouzivat spis arrow3
const arrow4: ArrowType = function (x) {
  x = 2;
  return (
    x + 1
  )
}
*/

//hodina 2 = PROPS


const App = () => {
  let cislo: number = 34;
  return ( //<> </> aby mohlo byt vic komponentu
    <>
      {/* toto pouzit kdyz do toho neco budu davat  → <PercentView></PercentView> 
        vice se pouziva ↓ protoze vetsina komponent nema nic v sobe
      */}
      {/* <ViewBox value={cislo + 1} max={333} color={(p) => "red"} */}
      <PercentView value={5} max={100} makeColor={(p) => `rgb(${p * 2 * 100}, 25, 255)`} />
      <PercentView value={20} max={200} makeColor={(p) => `rgb(${p * 2 * 100}, 155, 255)`} />
      <PercentView value={50} max={400} makeColor={(p) => `rgb(${p * 2 * 100}, 225, 255)`} />
      <p>blublbubl</p>




    </>
  )
}

export default App;
