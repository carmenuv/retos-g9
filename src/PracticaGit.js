import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Divider, Card, FormControl, TextField, Grid, IconButton, CardMedia, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const Git=()=>{

  const [search, setSearch] = useState("");

  const [user, setUser] = useState({});

  const history = useNavigate();

  const fetchUser = async()=>{
    try{
      const response = await fetch(`https://api.github.com/users/${search}`)
      const data = await response.json();

      setUser(data)

    } catch(error) {
      console.log("error", error.message)
    }
  }

  return(
    <Container>
      <Button 
      variant="text"
      size="large"
      onClick={()=> history(-1)}
      startIcon={<ArrowBackIcon />}
      >
      HOME
      </Button>
      <Divider />

      <Grid container spacing={3} mt={5}>
      <Typography style={{textAlign: "center", margin: '2rem', fontWeight: "bold", color: "#2b2b2b"}} variant="h1" gutterBottom>Buscador Github</Typography>
        
          <Grid item md={11} sm={11} xs={11}>
            <TextField 
            onChange={(e)=>setSearch(e.target.value)} 
            variant="standard"
            label="Ingresa el usuario"
            fullWidth
            />
          </Grid>
          
          <Grid item md={1} sm={1} xs={1}>
            <IconButton 
            aria-label="delete" 
            size="large"
            onClick={fetchUser}
            >
              <SearchIcon fontSize="inherit" />
            </IconButton>
            
          </Grid>

          <Grid style={{margin: "1rem"}} md={12} sm={12} xs={12}>
            <Card container style={{display: "flex", gap: '2rem', padding: "2rem"}}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={user.avatar_url}
                alt={user.name}
              />

              <Grid item md={6} container sx={{marginTop: 2 }}>
              <h4>{user.login}</h4>
              <p>{user.bio}</p>
              </Grid>              
            </Card>
          </Grid>
        
      </Grid>
    </Container>
  )
}

export default Git;