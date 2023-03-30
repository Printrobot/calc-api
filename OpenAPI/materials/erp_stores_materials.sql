SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_stores_materials` (
  `material_id` mediumint(8) UNSIGNED NOT NULL,
  `material_type_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `category_id` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `material_article` varchar(20) NOT NULL DEFAULT '',
  `material_name` varchar(50) NOT NULL DEFAULT '',
  `material_descript` varchar(255) NOT NULL DEFAULT '',
  `material_price` double(10,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `date_price_changed` date NOT NULL DEFAULT '0000-00-00',
  `quantity_min` double(8,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `in_using_calc` tinyint(1) UNSIGNED DEFAULT '1',
  `is_enabled` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `control_id` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_stores_materials`
  ADD PRIMARY KEY (`material_id`),
  ADD UNIQUE KEY `material_article` (`material_article`),
  ADD UNIQUE KEY `control_id` (`control_id`),
  ADD KEY `material_type_id` (`material_type_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `date_price_changed` (`date_price_changed`),
  ADD KEY `in_using_calc` (`in_using_calc`);


ALTER TABLE `erp_stores_materials`
  MODIFY `material_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
