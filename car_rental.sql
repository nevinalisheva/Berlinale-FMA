-- MySQL Script generated by MySQL Workbench
-- Wed Jan 11 15:37:28 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema car_rental
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_rental
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `car_rental` DEFAULT CHARACTER SET utf8 ;
USE `car_rental` ;

-- -----------------------------------------------------
-- Table `car_rental`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_rental`.`company` ;

CREATE TABLE IF NOT EXISTS `car_rental`.`company` (
  `company_name` VARCHAR(255) NOT NULL,
  `company_info` VARCHAR(2550) NULL,
  `company_id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_rental`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_rental`.`location` ;

CREATE TABLE IF NOT EXISTS `car_rental`.`location` (
  `location_id` INT NOT NULL AUTO_INCREMENT,
  `venue_name` VARCHAR(255) NOT NULL,
  `latitude` DECIMAL(8,6) NOT NULL,
  `longtitude` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`location_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_rental`.`vehicle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_rental`.`vehicle` ;

CREATE TABLE IF NOT EXISTS `car_rental`.`vehicle` (
  `vehicle_id` INT NOT NULL AUTO_INCREMENT,
  `vehicle_name` VARCHAR(255) NOT NULL,
  `vehicle_desc` VARCHAR(2550) NULL,
  `vehicle_brand` VARCHAR(45) NULL,
  `vehicle_model` VARCHAR(45) NULL,
  `mileage` INT NULL,
  `availability` TINYINT NOT NULL,
  `plate_no` VARCHAR(45) NOT NULL,
  `location_id` INT NOT NULL,
  `image` BLOB NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`vehicle_id`),
  INDEX `company_id_idx` (`company_id` ASC) VISIBLE,
  INDEX `location_id_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `company_id`
    FOREIGN KEY (`company_id`)
    REFERENCES `car_rental`.`company` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `car_rental`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_rental`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_rental`.`user` ;

CREATE TABLE IF NOT EXISTS `car_rental`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_info` VARCHAR(2550) NULL,
  `is_customer` TINYINT NOT NULL,
  `is_company` TINYINT NOT NULL,
  `is_admin` TINYINT NOT NULL,
  `company-id` INT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_rental`.`booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_rental`.`booking` ;

CREATE TABLE IF NOT EXISTS `car_rental`.`booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `vehicle_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `vehicle_id_idx` (`vehicle_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `car_rental`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `vehicle_id`
    FOREIGN KEY (`vehicle_id`)
    REFERENCES `car_rental`.`vehicle` (`vehicle_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `car_rental`.`company`
-- -----------------------------------------------------
START TRANSACTION;
USE `car_rental`;
INSERT INTO `car_rental`.`company` (`company_name`, `company_info`, `company_id`) VALUES ('blatest', NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `car_rental`.`location`
-- -----------------------------------------------------
START TRANSACTION;
USE `car_rental`;
INSERT INTO `car_rental`.`location` (`location_id`, `venue_name`, `latitude`, `longtitude`) VALUES (1, 'berlinale palast', 41.40338, 2.17403);

COMMIT;


-- -----------------------------------------------------
-- Data for table `car_rental`.`vehicle`
-- -----------------------------------------------------
START TRANSACTION;
USE `car_rental`;
INSERT INTO `car_rental`.`vehicle` (`vehicle_id`, `vehicle_name`, `vehicle_desc`, `vehicle_brand`, `vehicle_model`, `mileage`, `availability`, `plate_no`, `location_id`, `image`, `company_id`) VALUES (1, 'test', NULL, NULL, NULL, NULL, true, '7709878098', 1, NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `car_rental`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `car_rental`;
INSERT INTO `car_rental`.`user` (`user_id`, `user_name`, `user_info`, `is_customer`, `is_company`, `is_admin`, `company-id`) VALUES (1, 'test', NULL, true, false, false, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `car_rental`.`booking`
-- -----------------------------------------------------
START TRANSACTION;
USE `car_rental`;
INSERT INTO `car_rental`.`booking` (`booking_id`, `vehicle_id`, `user_id`) VALUES (1, 1, 1);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
