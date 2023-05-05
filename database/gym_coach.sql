-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: gym
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `coach_id` bigint NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `cin` varchar(8) DEFAULT NULL,
  `coachcode` varchar(45) DEFAULT NULL,
  `coachimage` varchar(255) DEFAULT 'avatar.png',
  `birthdate` date DEFAULT NULL,
  `adress` varchar(60) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `sport_id` bigint DEFAULT NULL,
  PRIMARY KEY (`coach_id`),
  UNIQUE KEY `cin` (`cin`),
  UNIQUE KEY `coachcode_UNIQUE` (`coachcode`),
  KEY `sport_id` (`sport_id`),
  CONSTRAINT `coach_ibfk_1` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`sport_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES (1,'Salim','Khaloukii','BJ85741','COBJ85741','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOBJ85741?alt=media&token=30470bfc-f03c-4932-a703-40d798342414','2001-06-01','El jadida','password',24),(10,'Ahmad','lname','BJ87452','COBJ87452','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOBJ87452?alt=media&token=e52379b5-fdfa-4b8a-9575-0dd59e58a989','1999-06-01','Casablanca','password',18),(11,'Anass','Ouardini','BJ57891','COBJ57891','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOBJ57891?alt=media&token=eec637b4-049e-4f48-843f-2dac3880c9b5','1998-06-04','Casablanca','password',18),(12,'Hamid','Benkada','BJ75987','COBJ75987','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOBJ75987?alt=media&token=da7e9abf-bd0e-4938-8c2f-be15fabf4a38','2000-08-15','El jadida','password',20),(13,'Taha','rhaloub','NJ412587','CONJ412587','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCONJ412587?alt=media&token=60b86b8f-a4d4-483f-a11e-fcbe64107f3a','2001-06-17','Tanger','password',24),(14,'Marwane','Faroki','RE258964','CORE258964','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCORE258964?alt=media&token=56a98122-f2d9-4aad-9c78-32d7403b7542','2000-06-08','Agadir','password',17),(15,'Test','testy','T214569','COT214569','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOT214569?alt=media&token=007a3154-2a85-4b99-a0e0-c2a90ad64779','1998-06-08','Tanger','password',18),(21,'daadda','dadada','dadada','COdadada','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/coach%2FCOdadada?alt=media&token=6ea84813-6d58-486e-8ac0-dfab90b2bde2','2021-06-02','dadad','adadda',24);
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-08 19:08:56
