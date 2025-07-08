import { Request, Response } from "express";
import Usuario from "../models/Usuario";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const SECRET = process.env.SECRET_KEY;

  try {
    //BUSCAR EL USUARIO
    const usuario = await Usuario.findByPk(email);
    if (!usuario || !bycrypt.compareSync(password, usuario.password)) {
      response.status(401).json({ error: "Credenciales incorrectas" });
    }

    //SI SE LLEGA HASTA ACA, LAS CREDENCIALES SON CORRECTAS
    const token = jwt.sign({ email: usuario.email }, SECRET, {
      expiresIn: "1hr",
    });
    response.json({ token });
  } catch (error) {
    console.error("Error de login: ", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export const crearUsuario = async (request: Request, response: Response) => {
  response.json("Crear Usuario");

  const { email, password } = request.body;
  if (!email || !password) {
    response.status(400).json({ error: "Email y Contraseña son obligatorios" });
  }

  try {
    const existe = await Usuario.findByPk(email);
    if (existe) {
      response
        .status(500)
        .json({ error: "Este usuario ya esta registrado en el sistema" });
    }
    const nuevoUsuario = await Usuario.create({ email, password });
    response.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.error("Error al registrar el usuario: ", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};
