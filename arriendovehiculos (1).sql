-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2025 a las 05:42:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arriendovehiculos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arriendos`
--

CREATE TABLE `arriendos` (
  `id` int(11) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `patente_vehiculo` varchar(6) NOT NULL,
  `tipo_vehiculo` varchar(20) NOT NULL,
  `rut_cliente` varchar(10) NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `password`) VALUES
('as@gmail.com', '$2b$10$92YDkKNb9YiJl0hnhuRO3eXJfDDaUlTYo26KcIE3vLukY6y37NYXe'),
('CrisitanoRonaldo@hotmail.com', '$2b$10$ionc8KaYKcstT6cQ78zIyeVGKDTyHU707C8asvkqLsRvX4xGfsBbq'),
('fac@hotmail.com', '$2b$10$f/LTpDKrO/a2vP82ZeiM1evgUZh0qLr7Bfct85C6/qqQO7nedxV7C'),
('fav@gmail.com', '$2b$10$VANfRfLAfoJUb6c3tSoW3Oon9jI/pxTqHXLuo1TG4Ca3cLT4gSzWi'),
('galeita@gmail.com', '$2b$10$x6nI9OILmKv.HzG4H8okxudLAVl9JFCiGIoyobw8IKsMylcIKsVgi'),
('JuanitoPerez@gmail.com', '$2b$10$1masF/8E7QqQODLpQGo4F.nrH8ZILWQdh0LQUZu.Nt2XY5Q0FlSze'),
('olakase@gmail.com', '$2b$10$BiKQ5Kpl00MQ6vJgCZz00.EKZevvUkUrIwRpE9WfXfFcXYXByxRDy'),
('poo@gmail.com', '$2b$10$9wpsvbXYTJFmU6uiss5R/Oi6JGSTNiAGQeuPzDD7W18ccZxqHym56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
