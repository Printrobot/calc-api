SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_stores_materials_types` (
  `material_type_id` tinyint(3) UNSIGNED NOT NULL,
  `category_id` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `material_name` char(50) NOT NULL DEFAULT '',
  `measure_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `is_tool_set` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_float` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_auto_reserving` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_recalc_kg2sheet` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_stores_materials_types`
  ADD PRIMARY KEY (`material_type_id`),
  ADD UNIQUE KEY `material_name` (`material_name`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `measure_id` (`measure_id`);


ALTER TABLE `erp_stores_materials_types`
  MODIFY `material_type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
