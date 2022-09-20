import { useState } from "react";

const Pokemon=()=>{

  const [search, setSearch] = useState("");

  const [user, setUser] = useState({
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/249.png",
    name: "lugia",
    defense: "130",
    attack: "90",
    specialdefense: "154",
    specialattack: "90",
    type: "psychic"
  });

  const fetchUser = async()=>{
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      const data = await response.json();

      setUser({
        img: data.sprites.other.home.front_default,
        name: data.name,
        defense: data.stats[2].base_stat,
        attack: data.stats[1].base_stat,
        specialdefense: data.stats[4].base_stat,
        specialattack: data.stats[3].base_stat,
        type: data.types[0].type.name
      });
      console.log(data);

    } catch(error) {
      console.log("error", error.message)
    }
  }

  return(
    <div className="container" >
      <div className="container-fluid">
        <h1>Buscador</h1>
        <div className="grid">
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Ingresa el nombre del pokémon"/>
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article data-theme="dark">
          <div className="container-fluid">
            <div align="center">
              <img className="img-responsive"  src={user.img} alt="" height="400" width="400"/>
            </div>
            <h2 className="text-center">{user.name}</h2>
            <h4 className="text-center">TIPO: {user.type}</h4>
            <h4 className="text-center">ATAQUE: {user.attack}</h4>
            <h4 className="text-center">DEFENSA: {user.defense}</h4>
            <h4 className="text-center">ATAQUE ESPECIAL: {user.specialattack}</h4>
            <h4 className="text-center">DEFENSA ESPECIAL: {user.specialdefense}</h4>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Pokemon;