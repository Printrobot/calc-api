SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_productions` (
  `production_id` smallint(5) UNSIGNED NOT NULL,
  `parent_id` smallint(5) UNSIGNED DEFAULT NULL,
  `production_name` char(50) NOT NULL DEFAULT '',
  `is_blank` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `default_circulation` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `default_format_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `is_different_format` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `cut_double_width` double(4,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `cut_double_height` double(4,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `bleed_width` double(5,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `bleed_height` double(5,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `is_using_calc` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_enabled` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `is_remote` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `order_field` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_productions`
  ADD PRIMARY KEY (`production_id`),
  ADD KEY `parent_id` (`parent_id`,`production_name`),
  ADD KEY `order_field` (`order_field`),
  ADD KEY `is_using_calc` (`is_using_calc`);


ALTER TABLE `erp_productions`
  MODIFY `production_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
