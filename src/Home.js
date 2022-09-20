import {Container ,Grid,Card,CardMedia,CardContent, Button, Typography} from "@mui/material"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react"
import { getDataFromPokemon } from "./ApiPokeComplete";
import PokemonDetail from "./pokemonDetail";

const Home =()=>{

  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  // vamos a crear una variable la cual se escargará de guardar la lista de pokemones

  const[pokemons,setPokemon] = useState([])

  // debemos crear una función la cual se encargará de ejecutar a getDataPokemon y la data retorne esa función guardandola en setPokemon

  const fetchPokemonList = async()=>{
    const listPokemones = await getDataFromPokemon();
    // ahora como ya tenemos la lista de pokemons hay que usar la función setPokemons para poder guardar esa lista

    console.log("listapokemones", listPokemones.results);
    setPokemon(listPokemones.results);


  };

  //en react existe una función llamada useEffect la ucal se ejecuta cuando la página está iniciando, vamos a usarla si queresmos ejecutar algo al inicio de l aaplicación
  //la estructura de useEffect es la sguiente

  useEffect(()=>{
    fetchPokemonList();
    //importante por ahora en los useEffect debemos colocar un array vacio esto se hace para evitar un
    // bucle infinito, si no colocamos el array las funciones estar haciendo peticiones sin control
  },[])



  return(
    <Container>
      <Typography style={{textAlign: "center", margin: '2rem', fontWeight: "bold", color: "#2b2b2b"}} variant="h1" gutterBottom>Pokédex</Typography>
      <Grid container spacing ={3}>

        {pokemons.map((pokemon, index)=>(
        //aca el codigo visual 
          <Grid item md ={4} sm ={12} xs={12}>
              <Card className="card-pokemon">
                  <CardMedia component ="img" className="img-pokemon" image={`${imgUrl}${index +1}.png`}/>
                  <CardContent className="center">
                        <h3 className="name-pokemon">{pokemon.name}</h3>
                        
                        <PokemonDetail nombre={pokemon.name} url={pokemon.url}/>

                        <Link to="/banderas" className="link">
                          <Button variant="outlined" color="error" style={{ marginRight: 8}}>FLAGS</Button>
                        </Link>

                        <Link to="/git" className="link">
                          <Button variant="outlined" color="error">Github</Button>
                        </Link>

                  </CardContent>                    
                  
              </Card>
          </Grid>
    ))}

      </Grid>

    
</Container>


)

}

export default Home;