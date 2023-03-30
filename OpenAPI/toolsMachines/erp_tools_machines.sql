SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_tools_machines` (
  `machine_id` tinyint(3) UNSIGNED NOT NULL,
  `machine_name` char(50) NOT NULL DEFAULT '',
  `category_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `territory_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `date_installed` date NOT NULL DEFAULT '0000-00-00',
  `in_using_calc` tinyint(1) UNSIGNED DEFAULT '1',
  `is_enabled` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `processes_count` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `processes_running` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `processes_canceled` smallint(5) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_tools_machines`
  ADD PRIMARY KEY (`machine_id`),
  ADD UNIQUE KEY `machine_name` (`machine_name`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `territory_id` (`territory_id`);


ALTER TABLE `erp_tools_machines`
  MODIFY `machine_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
