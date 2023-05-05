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
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `article_id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(25) DEFAULT NULL,
  `article_date` date NOT NULL DEFAULT (curdate()),
  `article_type` enum('Training','Nutrition') DEFAULT NULL,
  `file_type` enum('pdf','mp4') DEFAULT NULL,
  `coach_id` bigint DEFAULT NULL,
  `articecoverimage` varchar(255) DEFAULT NULL,
  `articefile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  UNIQUE KEY `title` (`title`),
  KEY `coach_id` (`coach_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`coach_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (8,'Heath','2021-06-03','Nutrition','pdf',1,'https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FHeath%2Fcover?alt=media&token=44ab822e-f254-4cc7-90b4-f8b6bb0f8477','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FHeath%2Farticle?alt=media&token=5ddc3484-5bcc-48cb-808e-1a4012e33819'),(11,'Test','2021-06-06','Training','pdf',1,'https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FTest%2Fcover?alt=media&token=a3fc0e77-bde5-4542-a585-62509cb189a1','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FTest%2Farticle?alt=media&token=18b5f987-dca0-4fde-a178-b769346b152a'),(12,'diet','2021-06-07','Nutrition','pdf',1,'https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FTest%2Fcover?alt=media&token=a3fc0e77-bde5-4542-a585-62509cb189a1','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FTest%2Farticle?alt=media&token=18b5f987-dca0-4fde-a178-b769346b152a'),(13,'cardio','2021-06-07','Training','pdf',1,'https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/sport%2Fistock_000016994756small.jpg?alt=media&token=980607cf-fd60-475a-a6aa-7792694a1be6','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/post%2FTest%2Farticle?alt=media&token=18b5f987-dca0-4fde-a178-b769346b152a');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
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
