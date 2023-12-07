import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../notes/notes";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserAdmin from '../useradmin/useradmin'

const Home = () => {


  const [note, setNote] = React.useState();
  const [addNote, setAddNote] = React.useState();

  const urlApi = "http://localhost/dashboard/apiDB.php/records";

    useEffect(() => {
    // Llama a tu función al iniciar el componente
    getNote();
    }, []);
  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setAddNote({ ...addNote, [name]: value });
    console.log(addNote);
  };
  const getNote = (event) => {
    axios
      .get(`${urlApi}/notes`)
      .then(function (response) {
        // handle success
        setNote(response.data.records);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const postNote = (event) => {
    axios
      .post(`${urlApi}/notes`,{
        UserID: 2,
        Title: addNote.Title,
        Content: addNote.Content,
      })
      .then(function (response) {
        // handle success
        getNote();
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
  <div className="home" data-testid="Home">
    <header>
      <UserAdmin id="user-admin"></UserAdmin>
    </header>
    <div className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/services">Servicios</a></li>
          <br/><br/><br/>
          <TextField id="tituloContCard" name="Title" label="Titulo" variant="outlined" onChange={onChange}/><br/><br/>
          <TextField id="contenidoCard" name='Content' label="Contenido" variant="outlined" onChange={onChange}/>
          <Button id="botonpri" variant="contained" onClick={postNote}>Agregar</Button>
        </ul>
      </nav>
    </div>
    <Card id="card-home" /*className={styles["card-home"]}*/>
        

        <Grid container spacing={2}>
          {note?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                
                <Note titulo="titulo" note={nota} refresh={getNote}></Note>
              </Grid>
            );
          })}
        </Grid>
      </Card>
  </div>
)};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
