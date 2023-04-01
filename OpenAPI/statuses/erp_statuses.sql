SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_statuses` (
  `status_id` tinyint(3) UNSIGNED NOT NULL,
  `status_name` char(30) NOT NULL DEFAULT '',
  `action_name` char(30) NOT NULL DEFAULT '',
  `action_name_back` char(30) NOT NULL DEFAULT '',
  `status_type` enum('canceled','returned','start','waiting','running','paused','finished','verified','end') NOT NULL DEFAULT 'start',
  `is_default` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_statuses`
  ADD PRIMARY KEY (`status_id`),
  ADD UNIQUE KEY `status_name` (`status_name`),
  ADD KEY `status_type` (`status_type`);


ALTER TABLE `erp_statuses`
  MODIFY `status_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
