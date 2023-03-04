import { Router } from "express";
const endpoints = Router();

endpoints.get('/filme', async (req, resp) => {
    const resultado = await listarFilmes();
    resp.send(resultado);
})

export default endpoints;