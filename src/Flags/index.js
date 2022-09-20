import {Container, Grid, FormControl, InputLabel, TextField, Select, MenuItem, Card, CardMedia, CardContent, CircularProgress, Button, Typography, Divider} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getDataFromPokemon } from "../ApiPokeComplete";


const Flags = () => {
  const [countries, setCountries] = useState([]);

  const [region, setRegion] = useState("");

  const history = useNavigate();

  const fetchCountries = async () => {
    const response = await getDataFromPokemon(
      "https://restcountries.com/v3.1/all"
    );

    setCountries(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);
    // vamos a evala si el valor es igual all entonces ejecutas la funcion
    //fetchCountries
    if (e.target.value === "all") {
      fetchCountries();
      return;
    }
    // primero debemos limpiar para llebar con nueva informacion
    setCountries([]);
    const response = await getDataFromPokemon(
      `https://restcountries.eu/rest/v2/region/${e.target.value}`
    );

    setCountries(response);
  };
  //vamos a crea una funcion el cuala se encaragra de buscar los paises
  const handleSearchCountry = (e) => {
    //esto es buena practixa decirle que busque por 3 a 4 letras la peticion
    const countryName = e.target.value;
    if (countryName.length === 0) {
      fetchCountries();
    }
    if (countryName.length > 3) {
      const filterCountries = countries.filter((country) =>
        country.name.official.toUpperCase().includes(countryName.toUpperCase())
      );
      setCountries(filterCountries);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
        <Button
        variant="text"
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={()=> history(-1)}
        >
        HOME
        </Button>
        <Divider />

      <Typography style={{textAlign: "center", margin: '2rem', fontWeight: "bold", color: "#2b2b2b"}} variant="h1" gutterBottom>Flags</Typography>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6} sm={4}>
          <TextField
            onChange={handleSearchCountry}
            variant="filled"
            label="busca tu bandera"
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel>busca tu region</InputLabel>
            <Select label="busca tu bandera" onChange={handleRegion}>
              <MenuItem value="all">Todas las regiones</MenuItem>

              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Erurope</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          {countries.length > 0 ? (
            countries.map((country) => (
              <Grid item md={3} xs={12}>
                
                  <Link className="link" to ={`/banderas/detail/${country.name.common}`}>
                    <Card>
                      <CardMedia
                      component="img"
                      height={200}
                      image={country.flags.svg}
                      />
                      <CardContent>   
                      <h4>{country.name.common}</h4>
                      <p>Population: {country.population}</p>
                      <p>Region: {country.region}</p>
                      <p>Capital: {country.capital}</p>
                      </CardContent>
                    </Card>
                  </Link>
              
              </Grid>
            ))
          ) : (
            <div className="center loading">
              <CircularProgress />
              <h4>Buscando...</h4>
            </div>
          )}
        </Grid>
      </Container>
    );
  };

export default Flags;