-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06.11.2018 klo 19:10
-- Palvelimen versio: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keskustelupalsta`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `keskustelut`
--

CREATE TABLE `keskustelut` (
  `id` int(11) NOT NULL,
  `otsikko` text COLLATE utf8_swedish_ci NOT NULL,
  `sisalto` text COLLATE utf8_swedish_ci NOT NULL,
  `kirjoittaja` text COLLATE utf8_swedish_ci NOT NULL,
  `aikaleima` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `keskustelut`
--

INSERT INTO `keskustelut` (`id`, `otsikko`, `sisalto`, `kirjoittaja`, `aikaleima`) VALUES
(10, 'Eka!', '<p>T&auml;ss&auml; on keskustelupalstan ensimm&auml;inen kirjoitettu keskustelu!</p>', 'Jouni', 1541515063323),
(11, 'Kokeilen uutta keskustelupalstaa anonyyminä!', '<p>T&auml;ss&auml; testaan, ett&auml; tuleeko kirjoittajan tilalle anonyymi jos j&auml;t&auml;n kirjoittajan kertomatta.</p>', 'Anonyymi', 1541515130973),
(12, 'Testataan vielä tekstieditorin toimivuutta', '<p>Toimiiko <strong>boldaus? </strong><em>Toimiiko kursivoitu teksti?</em> Taitaa toimia!</p>', 'Testailija', 1541515221107);

-- --------------------------------------------------------

--
-- Rakenne taululle `viestit`
--

CREATE TABLE `viestit` (
  `id` int(11) NOT NULL,
  `kirjoittaja` text COLLATE utf8_swedish_ci NOT NULL,
  `sisalto` text COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keskustelut`
--
ALTER TABLE `keskustelut`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viestit`
--
ALTER TABLE `viestit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `keskustelut`
--
ALTER TABLE `keskustelut`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `viestit`
--
ALTER TABLE `viestit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
