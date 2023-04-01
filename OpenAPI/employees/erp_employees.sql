SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_employees` (
  `user_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `employee_alias` varchar(15) DEFAULT NULL,
  `department_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `appointment_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `extracharge_group_id` smallint(5) UNSIGNED DEFAULT NULL,
  `firm_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `employee_phones` varchar(255) NOT NULL DEFAULT '',
  `employee_appointment` varchar(50) NOT NULL DEFAULT '',
  `date_birthday` date DEFAULT NULL,
  `date_job_started` date NOT NULL DEFAULT '0000-00-00',
  `date_job_finished` date DEFAULT NULL,
  `employee_inn` tinyblob NOT NULL,
  `address_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `tn_photo_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `photo_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `passport_number` tinyblob NOT NULL,
  `passport_who_gave` tinyblob NOT NULL,
  `passport_date_gave` date DEFAULT NULL,
  `passport_address_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `rate_of_salary` tinyblob NOT NULL,
  `salary` tinyblob NOT NULL,
  `advance_money` tinyblob NOT NULL,
  `last_order_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `is_archived` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_default_calc` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_employees`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `employee_alias` (`employee_alias`),
  ADD UNIQUE KEY `address_id` (`address_id`),
  ADD UNIQUE KEY `passport_address_id` (`passport_address_id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `appointment_id` (`appointment_id`),
  ADD KEY `photo_id` (`photo_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
