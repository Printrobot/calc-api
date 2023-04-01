SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_customers` (
  `user_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `type_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `customer_letter` char(1) DEFAULT NULL,
  `company_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `customer_phones` varchar(255) NOT NULL DEFAULT '',
  `customer_faxes` varchar(255) NOT NULL DEFAULT '',
  `address_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `is_middleman` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `department_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `extracharge_group_id` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `last_order_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `user_owner_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `limit_upload_file` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `limit_credit` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `is_remove_layouts` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `is_archived` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_downloaded` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_customers`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `address_id` (`address_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `user_owner_id` (`user_owner_id`),
  ADD KEY `is_remove_layouts` (`is_remove_layouts`),
  ADD KEY `customer_letter` (`customer_letter`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
