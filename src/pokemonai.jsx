

import './App.css';
import Pokemons from './Components/Pokemons';

function App() {
 
// const [pokemon, dispachPokemon] = useReducer(PokemonsReducer, []);

// useEffect(() => {
//   const getData = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => response.json())
//     .then(res => {
//       console.log('Pokemons:', res); 
//       const action = {
//         type: 'poke',
//         payload: res.data
//       }
//       dispachPokemon(action);
//     });
// getData()
//   }
// },[])


  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>WorkShop #2</h1>
        <div>
          <Pokemons></Pokemons>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
