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
-- Table structure for table `sport`
--

DROP TABLE IF EXISTS `sport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sport` (
  `sport_id` bigint NOT NULL AUTO_INCREMENT,
  `name_sp` varchar(25) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `sportimage` varchar(255) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2Fblank?alt=media&token=3df0c4ee-62b4-42a4-8269-d611e244a358',
  PRIMARY KEY (`sport_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sport`
--

LOCK TABLES `sport` WRITE;
/*!40000 ALTER TABLE `sport` DISABLE KEYS */;
INSERT INTO `sport` VALUES (17,'Karate','Karate is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts under the influence of Kung Fu, particularly Fujian White Crane.','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2FKarate?alt=media&token=c0bc2979-6c88-41d8-a5e8-da26e2fc70d5'),(18,'Judo','Judo is generally categorized as a modern Japanese martial art, which has since evolved into an Olympic event. The sport was created in 1882 by Jigoro Kano as a physical, mental, and moral pedagogy in Japan.','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2Fjudo-et-sante.jpg?alt=media&token=76edd44f-6674-4c6a-a2b7-4ec610dee3af'),(20,'Yoga','From ancient times, yoga has been referred to as a spiritual practice as it helps in combating all sorts of mental, physical & emotional issues.','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2Fistock_000016994756small.jpg?alt=media&token=980607cf-fd60-475a-a6aa-7792694a1be6'),(24,'Swimming','Swimming is an individual or team racing sport that requires the use of one\'s entire body to move through water. The sport takes place in pools or open water.','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2FSwimming?alt=media&token=cd54b6a1-d508-4ade-b9dd-747c2443d614');
/*!40000 ALTER TABLE `sport` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-08 19:08:58
