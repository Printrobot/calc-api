SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_payers` (
  `payer_id` mediumint(8) UNSIGNED NOT NULL,
  `payer_name` varchar(100) NOT NULL DEFAULT '',
  `payer_letter` char(1) DEFAULT NULL,
  `date_added` date NOT NULL DEFAULT '0000-00-00',
  `pattern_ownership` varchar(100) NOT NULL DEFAULT '',
  `payer_head_type` varchar(100) NOT NULL DEFAULT '',
  `payer_head_name` varchar(100) NOT NULL DEFAULT '',
  `chief_accountant_name` varchar(100) NOT NULL DEFAULT '',
  `payer_phones` varchar(255) NOT NULL DEFAULT '',
  `bank_details_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `is_archived` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_downloaded` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `control_id` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_payers`
  ADD PRIMARY KEY (`payer_id`),
  ADD UNIQUE KEY `control_id` (`control_id`),
  ADD KEY `date_added` (`date_added`),
  ADD KEY `bank_details_id` (`bank_details_id`),
  ADD KEY `payer_letter` (`payer_letter`);


ALTER TABLE `erp_payers`
  MODIFY `payer_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
