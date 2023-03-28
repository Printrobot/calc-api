SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_stores_materials_types_properties` (
  `property_id` mediumint(8) UNSIGNED NOT NULL,
  `object_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `property_name` varchar(30) NOT NULL DEFAULT '',
  `property_var` varchar(30) NOT NULL DEFAULT '',
  `value_by_default` varchar(30) NOT NULL DEFAULT '',
  `measure_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `input_type` varchar(255) NOT NULL DEFAULT '',
  `is_fixed` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `order_field` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `tag` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_stores_materials_types_properties`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `object_id` (`object_id`);


ALTER TABLE `erp_stores_materials_types_properties`
  MODIFY `property_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
