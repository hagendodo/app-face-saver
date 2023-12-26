-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 07:55 AM
-- Server version: 10.4.24-MariaDB-log
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facesaver`
--

-- Drop the database if it exists
DROP DATABASE IF EXISTS facesaver;

-- Create the database
CREATE DATABASE facesaver;

-- --------------------------------------------------------

--
-- Table structure for table `helpers`
--

CREATE TABLE `helpers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `helpers`
--

INSERT INTO `helpers` (`id`, `name`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Ibnu', 'ibnu', 'password', '2023-12-26 02:37:41', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `helper_contact`
--

CREATE TABLE `helper_contact` (
  `id` int(11) NOT NULL,
  `helper_id` int(11) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `history_menus`
--

CREATE TABLE `history_menus` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_menus`
--

INSERT INTO `history_menus` (`id`, `user_id`, `menu_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-12-20 02:59:35', '2023-12-20 02:59:35'),
(2, 1, 1, '2023-12-20 03:00:17', '2023-12-20 03:00:17'),
(3, 1, 1, '2023-12-20 03:01:35', '2023-12-20 03:01:35'),
(4, 1, 1, '2023-12-20 03:02:01', '2023-12-20 03:02:01'),
(5, 1, 1, '2023-12-20 03:02:05', '2023-12-20 03:02:05'),
(6, 1, 1, '2023-12-20 03:28:28', '2023-12-20 03:28:28'),
(7, 1, 1, '2023-12-20 03:29:45', '2023-12-20 03:29:45'),
(8, 1, 2, '2023-12-20 03:30:06', '2023-12-20 03:30:06'),
(9, 1, 2, '2023-12-20 03:32:41', '2023-12-20 03:32:41'),
(10, 1, 1, '2023-12-20 03:32:45', '2023-12-20 03:32:45'),
(11, 1, 1, '2023-12-20 03:33:02', '2023-12-20 03:33:02'),
(12, 1, 1, '2023-12-20 03:33:24', '2023-12-20 03:33:24'),
(13, 1, 2, '2023-12-20 03:33:50', '2023-12-20 03:33:50'),
(14, 1, 1, '2023-12-20 03:34:16', '2023-12-20 03:34:16'),
(15, 1, 1, '2023-12-20 03:34:16', '2023-12-20 03:34:16'),
(16, 1, 1, '2023-12-20 03:34:16', '2023-12-20 03:34:16'),
(17, 1, 1, '2023-12-20 03:34:17', '2023-12-20 03:34:17'),
(18, 1, 1, '2023-12-20 03:35:09', '2023-12-20 03:35:09'),
(19, 1, 1, '2023-12-20 03:35:09', '2023-12-20 03:35:09'),
(20, 1, 1, '2023-12-20 03:36:03', '2023-12-20 03:36:03'),
(21, 1, 1, '2023-12-20 03:36:03', '2023-12-20 03:36:03'),
(22, 1, 2, '2023-12-20 03:36:03', '2023-12-20 03:36:03'),
(23, 1, 1, '2023-12-20 03:38:12', '2023-12-20 03:38:12'),
(24, 1, 2, '2023-12-20 03:38:39', '2023-12-20 03:38:39'),
(25, 1, 2, '2023-12-20 03:38:40', '2023-12-20 03:38:40'),
(26, 1, 1, '2023-12-20 03:39:34', '2023-12-20 03:39:34'),
(27, 1, 1, '2023-12-20 06:43:52', '2023-12-20 06:43:52'),
(28, 1, 2, '2023-12-20 06:44:02', '2023-12-20 06:44:02'),
(29, 1, 2, '2023-12-20 06:46:02', '2023-12-20 06:46:02'),
(30, 1, 2, '2023-12-20 06:47:08', '2023-12-20 06:47:08'),
(31, 1, 1, '2023-12-20 06:47:14', '2023-12-20 06:47:14'),
(32, 1, 1, '2023-12-20 06:47:53', '2023-12-20 06:47:53'),
(33, 1, 1, '2023-12-20 06:48:44', '2023-12-20 06:48:44'),
(34, 1, 1, '2023-12-20 06:49:53', '2023-12-20 06:49:53'),
(35, 1, 1, '2023-12-20 06:50:19', '2023-12-20 06:50:19'),
(36, 1, 1, '2023-12-20 06:52:05', '2023-12-20 06:52:05'),
(37, 1, 1, '2023-12-20 06:53:04', '2023-12-20 06:53:04'),
(38, 1, 1, '2023-12-20 06:55:12', '2023-12-20 06:55:12'),
(39, 1, 1, '2023-12-20 07:13:08', '2023-12-20 07:13:08'),
(40, 1, 2, '2023-12-20 07:13:16', '2023-12-20 07:13:16'),
(41, 1, 1, '2023-12-20 07:14:56', '2023-12-20 07:14:56'),
(42, 1, 1, '2023-12-20 07:16:39', '2023-12-20 07:16:39'),
(43, 1, 1, '2023-12-20 07:16:41', '2023-12-20 07:16:41'),
(45, 1, 2, '2023-12-26 01:27:32', '2023-12-26 01:27:32'),
(53, 1, 2, '2023-12-26 01:31:20', '2023-12-26 01:31:20'),
(54, 1, 2, '2023-12-26 01:31:21', '2023-12-26 01:31:21'),
(55, 1, 2, '2023-12-26 01:31:21', '2023-12-26 01:31:21'),
(56, 1, 3, '2023-12-26 01:31:50', '2023-12-26 01:31:50'),
(57, 1, 1, '2023-12-26 01:34:03', '2023-12-26 01:34:03'),
(58, 1, 2, '2023-12-26 01:34:09', '2023-12-26 01:34:09'),
(59, 1, 2, '2023-12-26 01:34:18', '2023-12-26 01:34:18'),
(60, 1, 3, '2023-12-26 01:34:25', '2023-12-26 01:34:25'),
(61, 1, 2, '2023-12-26 01:35:32', '2023-12-26 01:35:32'),
(62, 1, 2, '2023-12-26 01:35:33', '2023-12-26 01:35:33'),
(63, 1, 3, '2023-12-26 01:35:58', '2023-12-26 01:35:58'),
(64, 1, 3, '2023-12-26 01:35:59', '2023-12-26 01:35:59'),
(65, 1, 3, '2023-12-26 01:36:50', '2023-12-26 01:36:50'),
(66, 1, 1, '2023-12-26 01:36:50', '2023-12-26 01:36:50'),
(67, 1, 1, '2023-12-26 01:38:11', '2023-12-26 01:38:11'),
(68, 1, 1, '2023-12-26 01:39:07', '2023-12-26 01:39:07'),
(69, 1, 2, '2023-12-26 01:39:07', '2023-12-26 01:39:07'),
(70, 1, 3, '2023-12-26 01:39:11', '2023-12-26 01:39:11'),
(71, 1, 1, '2023-12-26 01:39:12', '2023-12-26 01:39:12'),
(72, 1, 2, '2023-12-26 01:41:02', '2023-12-26 01:41:02'),
(73, 1, 3, '2023-12-26 01:41:04', '2023-12-26 01:41:04'),
(74, 1, 1, '2023-12-26 01:42:31', '2023-12-26 01:42:31'),
(75, 1, 1, '2023-12-26 02:32:00', '2023-12-26 02:32:00'),
(76, 1, 1, '2023-12-26 02:32:53', '2023-12-26 02:32:53'),
(77, 1, 3, '2023-12-26 02:33:37', '2023-12-26 02:33:37'),
(78, 1, 2, '2023-12-26 02:34:10', '2023-12-26 02:34:10'),
(79, 1, 1, '2023-12-26 02:36:19', '2023-12-26 02:36:19'),
(80, 1, 1, '2023-12-26 02:36:19', '2023-12-26 02:36:19'),
(81, 1, 3, '2023-12-26 02:36:19', '2023-12-26 02:36:19'),
(82, 1, 3, '2023-12-26 02:36:20', '2023-12-26 02:36:20'),
(83, 1, 2, '2023-12-26 02:36:20', '2023-12-26 02:36:20'),
(84, 1, 2, '2023-12-26 02:37:16', '2023-12-26 02:37:16'),
(85, 1, 2, '2023-12-26 02:43:32', '2023-12-26 02:43:32'),
(86, 1, 1, '2023-12-26 02:43:38', '2023-12-26 02:43:38'),
(87, 1, 1, '2023-12-26 03:30:04', '2023-12-26 03:30:04'),
(88, 1, 1, '2023-12-26 03:32:10', '2023-12-26 03:32:10'),
(89, 1, 1, '2023-12-26 03:32:54', '2023-12-26 03:32:54'),
(90, 1, 2, '2023-12-26 03:34:41', '2023-12-26 03:34:41'),
(91, 1, 2, '2023-12-26 03:35:10', '2023-12-26 03:35:10'),
(92, 1, 2, '2023-12-26 03:36:37', '2023-12-26 03:36:37'),
(93, 1, 2, '2023-12-26 03:36:55', '2023-12-26 03:36:55'),
(94, 1, 2, '2023-12-26 03:37:15', '2023-12-26 03:37:15'),
(95, 1, 2, '2023-12-26 03:39:20', '2023-12-26 03:39:20'),
(96, 1, 1, '2023-12-26 04:16:12', '2023-12-26 04:16:12'),
(97, 1, 1, '2023-12-26 04:18:10', '2023-12-26 04:18:10');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `user_id`, `name`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Menu 1', 'Aku Ingin Makan', '2023-12-20 02:53:50', '0000-00-00 00:00:00'),
(2, 1, 'Menu 2', 'Aku ingin Ke Toilet', '2023-12-20 02:53:50', '0000-00-00 00:00:00'),
(3, 1, 'Menu 3', 'Aku Ingin Hiburan', '2023-12-26 01:31:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `id` int(11) NOT NULL,
  `helper_id` int(11) DEFAULT NULL,
  `response_message` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`id`, `helper_id`, `response_message`, `createdAt`, `updatedAt`) VALUES
(13, 1, 'iya nanti dibawain', '2023-12-26 04:16:25', '2023-12-26 04:16:25'),
(14, 1, '30 menit lagi ya', '2023-12-26 04:16:29', '2023-12-26 04:16:29'),
(15, 1, 'iya otw', '2023-12-26 04:18:15', '2023-12-26 04:18:15'),
(16, 1, 'nanti dibawain pizza', '2023-12-26 04:18:39', '2023-12-26 04:18:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Raden Ibnu Huygenz Widodo', '2023-12-19 22:50:13', '2023-12-19 22:50:13');

-- --------------------------------------------------------

--
-- Table structure for table `user_helpers`
--

CREATE TABLE `user_helpers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `helper_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `helpers`
--
ALTER TABLE `helpers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `helper_contact`
--
ALTER TABLE `helper_contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `helper_id` (`helper_id`);

--
-- Indexes for table `history_menus`
--
ALTER TABLE `history_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `helper_id` (`helper_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_helpers`
--
ALTER TABLE `user_helpers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `helper_id` (`helper_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `helpers`
--
ALTER TABLE `helpers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `helper_contact`
--
ALTER TABLE `helper_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history_menus`
--
ALTER TABLE `history_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_helpers`
--
ALTER TABLE `user_helpers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `helper_contact`
--
ALTER TABLE `helper_contact`
  ADD CONSTRAINT `helper_contact_ibfk_1` FOREIGN KEY (`helper_id`) REFERENCES `helpers` (`id`);

--
-- Constraints for table `history_menus`
--
ALTER TABLE `history_menus`
  ADD CONSTRAINT `history_menus_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `history_menus_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);

--
-- Constraints for table `menus`
--
ALTER TABLE `menus`
  ADD CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_ibfk_2` FOREIGN KEY (`helper_id`) REFERENCES `helpers` (`id`);

--
-- Constraints for table `user_helpers`
--
ALTER TABLE `user_helpers`
  ADD CONSTRAINT `user_helpers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_helpers_ibfk_2` FOREIGN KEY (`helper_id`) REFERENCES `helpers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
