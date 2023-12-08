import React from 'react';
import PropTypes from 'prop-types';
import './notes.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const Notes = (props) => {
  const [note, setNote] = React.useState(props.note);
  const urlApi = "http://localhost/dashboard/apiDB.php/records";

  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNote({ ...note, [name]: value });

    console.log(note);
  };

  const putNote = () =>{
    axios
    .put(`${urlApi}/notes/${note.NoteID}`, {
      
        Title: note.Title,
        Content: note.Content,
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      
    });
  };
  const deleteNote = () =>{
    console.log(note.NoteID);
    
    axios
    .delete(`${urlApi}/notes/${note.NoteID}`, {
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      props.refresh();
    });
    
  };
  return(
  <div className="notes" data-testid="Notes">
 <TextField
      id="tituloCard"
      name="Title"
      defaultValue={note.Title}
      variant="standard"
      onChange={onChange}
    />
    <TextField
      id="contentCard"
      className='TextField'
      name="Content"
      defaultValue={note.Content}
      multiline
      maxRows={4} 
      onChange={onChange}
    />
    <br />
    <div id="contenedorBotones">
    <Button className="estiloBoton" id="editar" color="secondary" variant="text" onClick={putNote}>
      editar
    </Button>
    <Button className="estiloBoton" id="borrar" color="secondary" variant="text" onClick={deleteNote}>
      BORRAR
    </Button>
    </div>
   
  </div>
)};

Notes.propTypes = {};

Notes.defaultProps = {};

export default Notes;
