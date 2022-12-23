import auth from '../middleware/auth.js';
import { Router } from "express";
import { getHome, getConfig } from "../controllers/home.js";

const home = Router();

home.get("/", auth, getHome); //en auth se valida que esté logueado. editar para enviar error al no estar logueado
home.get("/api/config", auth, getConfig); //en auth se valida que esté logueado. editar para enviar error al no estar logueado

export default home;