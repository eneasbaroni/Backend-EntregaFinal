import {getUser} from '../services/usuarios.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getUsuario = async (req, res) => {

  res.send(req.user);




  /* sendInfoLog(req);
  const userData = await getUser(req.user._id); 
  res.status(200).send(userData);   */
}

export { getUsuario };