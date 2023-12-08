import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import './useradmin.css';

const Useradmin = () => {
  
  return (
  <div className="useradmin" data-testid="Useradmin">
    <TextField id="outlined-basic" label="" variant="outlined" defaultValue={"Usuario XD"}/>
  </div>
)};

Useradmin.propTypes = {};

Useradmin.defaultProps = {};

export default Useradmin;
