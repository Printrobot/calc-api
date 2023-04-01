SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_departments` (
  `department_id` tinyint(3) UNSIGNED NOT NULL,
  `parent_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `department_name` char(50) NOT NULL DEFAULT '',
  `extracharge_group_id` smallint(5) UNSIGNED DEFAULT NULL,
  `is_main` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `is_for_customer` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `order_field` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_departments`
  ADD PRIMARY KEY (`department_id`),
  ADD UNIQUE KEY `parent_id` (`parent_id`,`department_name`),
  ADD KEY `order_field` (`order_field`);


ALTER TABLE `erp_departments`
  MODIFY `department_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
