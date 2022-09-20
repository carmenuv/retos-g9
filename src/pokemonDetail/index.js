import { Button, Dialog, DialogContent, Grid, Chip, Typography, Divider, Container } from "@mui/material";
import { useState } from "react";
import { getDataFromPokemon } from "../ApiPokeComplete";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  const handleOpenDialog = async () => {
    if (!abrir) {
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="error" style={{ marginBottom: 8}}>
        Detalle del Pokémon
      </Button>
      <Dialog open={abrir} onClose={handleOpenDialog} fullWidth={"md"} maxWidth={"md"}>
        <DialogContent>
          {/* necesifamos extraer ls keys de un objeto  */}
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <div className="top">
                <Typography variant="h3"> {props.nombre.toUpperCase()}</Typography>
                <Button variant="contained" onClick={handleOpenDialog}>
                  Cerrar
                </Button>
              </div>
              <Divider />

              <Grid container sx={{marginTop: 2 }}>
                <Grid item md={6}>

                  <Typography variant="h6" component="h2">Habilidades</Typography>

                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 1, marginBottom: 2 }}
                    />
                  ))}

                  <Typography variant="h6" component="h2">Datos</Typography>

                  {pokemonData.types.map((type) => (
                    <Chip label={type.type.name} sx={{ marginRight: 1, marginBottom: 2 }} color="secondary"/>
                  ))}

                  <Typography variant="h6" component="h2">Puntos base</Typography>

                  {pokemonData.stats.map((statpokemon) => (
                    <Box >
                    <Typography variant="subtitle1">{statpokemon.stat.name}</Typography>
                    <Slider
                      defaultValue={statpokemon.base_stat}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      disabled
                      valueLabelDisplay="on"
                    />
                    </Box>
                  ))}
                </Grid>

                <Grid item md={6} className="center">
                  <img
                    width={350}
                    src={
                    pokemonData.sprites.other["official-artwork"].front_default}
                    alt=""
                  />
                  <Grid container className="center">
                    <Grid item sm={6}>
                      <img
                        src={
                        pokemonData.sprites.versions["generation-iii"].emerald["front_shiny"]}
                        alt="img"
                        width={100}
                      />

                    </Grid>
                    <Grid item sm={6}>
                      <img
                        src={
                        pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]["back_shiny"]}
                        alt="img"
                        width={100}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}

          
          
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
