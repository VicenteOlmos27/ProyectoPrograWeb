-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2025 a las 19:09:42
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

--
-- Volcado de datos para la tabla `arriendos`
--

INSERT INTO `arriendos` (`id`, `fecha_inicio`, `fecha_fin`, `patente_vehiculo`, `tipo_vehiculo`, `rut_cliente`, `nombre_cliente`) VALUES
(6, '2025-07-06 17:02:32', NULL, 'ABC123', 'Camioneta', '12.345.678', 'Juan Pérez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
