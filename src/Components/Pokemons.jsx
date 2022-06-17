import { useEffect } from "react";
import { useState } from "react";


import Pokemon from "./Pokemon"
const Pokemons = () => {

    const [data, setData] = useState([]);
    // const getData = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('Pokemons:', data);
    //       setPokemon(data.results);
    //     });
    //   }
    // getData()
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(data => {
              console.log('Pokemons:', data);
              setData(data.results);
            });
    }, [])
    return <>
    <ul>
      {data.map((pokemon, i) => <Pokemon key={i} name={pokemon.name} ulr={pokemon.url}></Pokemon>)} {"  "}
      </ul></>;
  };
  
  export default Pokemons;
  

//   <h1>
//         <div >
//             <div>
//             {
//                 pokemon.map((k, i) => <ul key={i} >{k.name}. url: <a href="/">{k.url}</a>  </ul>)
//             }
//             {/* {
//                 pokemon.map((p, i ) => <PokeContext pokemon={p} key={i}>)
//             } */}
//             </div>
//         </div>
//     </h1>