SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_companies` (
  `company_id` mediumint(8) UNSIGNED NOT NULL,
  `company_name` varchar(100) NOT NULL DEFAULT '',
  `company_letter` char(1) DEFAULT NULL,
  `date_added` date NOT NULL DEFAULT '0000-00-00',
  `company_phones` varchar(255) NOT NULL DEFAULT '',
  `company_faxes` varchar(255) NOT NULL DEFAULT '',
  `company_emails` varchar(255) NOT NULL DEFAULT '',
  `company_descript` varchar(255) NOT NULL DEFAULT '',
  `address_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `groups` set('consumer','service_provider','materials_supplier') NOT NULL DEFAULT 'consumer',
  `default_payer_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `is_archived` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_downloaded` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `control_id` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_companies`
  ADD PRIMARY KEY (`company_id`),
  ADD UNIQUE KEY `address_id` (`address_id`),
  ADD KEY `date_added` (`date_added`),
  ADD KEY `company_letter` (`company_letter`);


ALTER TABLE `erp_companies`
  MODIFY `company_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
