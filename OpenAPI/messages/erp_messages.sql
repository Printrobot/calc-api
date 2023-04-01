SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_messages` (
  `message_id` mediumint(8) UNSIGNED NOT NULL,
  `datetime_sent` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `from_user_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `message_type` enum('private','common','system') NOT NULL DEFAULT 'private',
  `message_priority` enum('normal','extra') NOT NULL DEFAULT 'normal',
  `message_text` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `datetime_sent` (`datetime_sent`),
  ADD KEY `from_user_id` (`from_user_id`);


ALTER TABLE `erp_messages`
  MODIFY `message_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
