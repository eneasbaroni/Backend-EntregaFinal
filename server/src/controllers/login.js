//import logger
import { sendInfoLog } from '../logs/logger.js';

//se debe Eliminar ya que el front se hace en React
const getLogin = (req, res) => {
  sendInfoLog(req);
  res.render('login');
}

const postLogin = (req, res) => {
  sendInfoLog(req);
  console.log(req.user);
  res.status(200).send({message: 'Login exitoso'}); //no hay try catch porque passport ya lo hace  
}

export { getLogin, postLogin };