SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_accounting_own_firms` (
  `firm_id` tinyint(3) UNSIGNED NOT NULL,
  `firm_name` char(100) NOT NULL DEFAULT '',
  `recipient_name` char(100) NOT NULL DEFAULT '',
  `firm_head_name` char(100) NOT NULL DEFAULT '',
  `firm_chief_accountant_name` char(100) NOT NULL DEFAULT '',
  `firm_nds` double(5,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `tn_stamp_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `stamp_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `is_default` tinyint(1) UNSIGNED DEFAULT '0',
  `is_enabled` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `detail_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_accounting_own_firms`
  ADD PRIMARY KEY (`firm_id`),
  ADD UNIQUE KEY `firm_name` (`firm_name`),
  ADD KEY `detail_id` (`detail_id`);


ALTER TABLE `erp_accounting_own_firms`
  MODIFY `firm_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
