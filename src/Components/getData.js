const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
      console.log('Pokemons:', data);
      setPokemon(data);
    });
  }

  export default getData;