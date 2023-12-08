import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css';
import axios from 'axios';
import { Await, useNavigate } from 'react-router-dom';
import imgNotaLog from '../../assets/img/imgNotaLog.png';
import { colors } from '@mui/material';


const Login = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  let userAuth = {};
  const navigate = useNavigate();

  const urlApi = "http://localhost/dashboard/apiDB.php/records";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const getUsers = async () => {
    axios.get(`${urlApi}/users/`)
    .then(function (response) {
      const userRecord = response.data.records.find(record => record.Username === user.username);
      userAuth=userRecord;       
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
        consultar();
      });
  };
  

const consultar = () => {
  if (user.username === userAuth.Username && user.password === userAuth.Password) {
    console.log("Usuario Correcto");
    navigate('/home');
  } else {
    console.log("Usuario o Contraseña incorrecto");
  }
};
  
  return (
  <div className="login" data-testid="Login">
    <h1>Inicio de Sesión</h1>
    <br/>
    <img src={imgNotaLog} alt="Imagen representativa de notas"/>
    <TextField id="user-input" name="username" label="Usuario" variant="standard" onChange={onChangeInput} />
    <br/><br/>
    <TextField id="pass-input" name="password" label="Contraseña" variant="standard" type='password' onChange={onChangeInput}/>
    <br/><br/><br/>
    <Button variant="contained" onClick={getUsers}>Ingresar</Button>
    <br/>
    <a href='http://localhost:3000/register'>Registrar Usuario</a>
  </div> 

)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
