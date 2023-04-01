SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `erp_orders` (
  `order_id` mediumint(8) UNSIGNED NOT NULL,
  `process_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `production_id` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `format_width` double(6,1) UNSIGNED NOT NULL DEFAULT '0.0',
  `format_height` double(6,1) UNSIGNED NOT NULL DEFAULT '0.0',
  `company_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `customer_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `order_circulation` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `datetime_to_work` datetime DEFAULT NULL,
  `is_closed_docs` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `is_uploaded_layouts` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `date_closed_docs` date DEFAULT NULL,
  `payment_type` enum('cash','cash_doc','cashless','cashless_cash','cashless_cash_doc') NOT NULL DEFAULT 'cash',
  `agent_payoff` double(12,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `cashless_share` double(14,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `order_price` double(14,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `order_runtime` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `calculated_order_price` double(14,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `date_closed` datetime DEFAULT NULL,
  `system_id` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


ALTER TABLE `erp_orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `process_id` (`process_id`),
  ADD KEY `production_id` (`production_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `date_closed` (`date_closed`),
  ADD KEY `is_uploaded_layouts` (`is_uploaded_layouts`);


ALTER TABLE `erp_orders`
  MODIFY `order_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
