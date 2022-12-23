import { getUser, getAll, save, deleteById } from '../services/usuarios.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';
import { saveCart } from '../services/carritos.js';

//importo la funcion para enviar mail
import {sendMail} from '../middleware/nodemailer.js';


const postRegister = async (req, res) => {

  sendInfoLog(req);

  const file = req.file;
  const image = file.filename;
  

  const {username, edad, telefono, direccion, password, email } = req.body

  try {
    const user = await save({username, edad, telefono, direccion, password, email, image});
    if (!user) {
      res.status(400).send({message: 'El usuario ya existe'});
    } else {

      /* VERIFICAR */
      let userId = user._id;
      sendMail(user);
      const cart = await saveCart(userId, username, email, direccion);      
      res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error al registrar el usuario'});
  }



  /* save({ username, email, edad, telefono, direccion, password, image })
 

  .then (user => { 
    if (!user) { //la funcion save del controller devuelve un objeto con los datos del usuario, si el usuario existe
      res.status(400).send({error: 'No se pudo registrar el usuario', name:'register', url: 'auth/register' }); //si no existe devuelve null            
    } 
    
    sendInfoLog(req);  
    return res.status(200).send({message: 'Usuario registrado con exito'}); //no hay try catch porque passport ya lo hace
  })
  .catch(err => {
    console.log('error en el registro', err);
    res.status(400).send({error: 'No se pudo registrar el usuario', name:'register', url: 'auth/register' });      
  }) */
    
}

export { postRegister };
  
  

