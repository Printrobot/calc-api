SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_processes_types` (
  `process_type_id` smallint(5) UNSIGNED NOT NULL,
  `parent_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `process_name` char(30) NOT NULL DEFAULT '',
  `process_class` char(50) NOT NULL DEFAULT '',
  `process_uniqueness` enum('none','any','work','order') NOT NULL DEFAULT 'any',
  `status_ext_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `template_show` char(30) NOT NULL DEFAULT '',
  `is_category` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_container` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_materials` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_machines` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_hidden` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_complate` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_manage` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_system` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_enabled` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `order_field` smallint(5) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_processes_types`
  ADD PRIMARY KEY (`process_type_id`),
  ADD UNIQUE KEY `process_name` (`parent_id`,`process_name`),
  ADD KEY `order_field` (`order_field`);


ALTER TABLE `erp_processes_types`
  MODIFY `process_type_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
