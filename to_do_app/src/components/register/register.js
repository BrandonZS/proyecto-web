import React from 'react';
import PropTypes from 'prop-types';
import './register.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

const Register = () => {
  const [formValues, setFormValues] = React.useState({
    Email: "",
    Username: "",
    Password1:"",
    Password2: ""
  });

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";

  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const registerUser = () => {

    axios
      .post(`${urlDelApi}/users`, {
        Username: formValues.Username,
        Email: formValues.Email,
        Password: formValues.Password1
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const register = () =>{

      if (formValues.Email !== "" && formValues.Username !== "" && formValues.Password1 !== ""){
        if (formValues.Password1 === formValues.Password2){
          registerUser();
        } else {
          console.log("Contraseñas no coinciden");
        }
      } else {
        console.log("Ingrese todos lo datos!");
      }
    } 

    
  
  return (
  <div className="register" data-testid="Register">
    <h1>Registro de usuario</h1>
    <TextField id="outlined-basic" name='Email' label="Email" variant="standard"  onChange={onChange} required/> <br/><br/>
    <TextField id="outlined-basic" name='Username' label="Nombre de Usuario" variant="standard" onChange={onChange} required/><br/><br/>
    <TextField id="outlined-basic" type='password' name='Password1' label="Contraseña" variant="standard" onChange={onChange} required/><br/><br/>
    <TextField id="outlined-basic" type='password' name='Password2'label="Repetir contraseña" variant="standard" onChange={onChange} required/><br/><br/><br/>
    <Button variant="contained" onClick={register}>Registrar</Button>
  </div>
)};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
