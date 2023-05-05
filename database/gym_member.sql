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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cin` varchar(8) DEFAULT NULL,
  `membercode` varchar(45) DEFAULT NULL,
  `memberpic` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `adress` varchar(60) DEFAULT NULL,
  `height` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `activity_level` enum('low','medium','high') DEFAULT NULL,
  `subscription_date` date DEFAULT NULL,
  `subscription_expire` date DEFAULT NULL,
  `status` enum('Locked','Active') DEFAULT 'Active',
  `password` varchar(25) DEFAULT NULL,
  `subscription_id` bigint DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cin` (`cin`),
  UNIQUE KEY `membercode_UNIQUE` (`membercode`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `member_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`subscription_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (2,'Anass','Ouardini','Anass@gmail.com','BJ456865','MEBJ456869.jpg','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBJ456869.jpg?alt=media&token=bc8c3ab2-236a-464c-8119-20bc2340fb71','1999-07-30','Casablanca',180,80,'medium','2021-06-01','2021-11-28','Active','password',2,'Male','0587786685'),(7,'Fname','Lname','fname@gmail.com','BJ4712','MEBJ4712','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBJ4712?alt=media&token=8c4cbf63-123c-425a-84d0-2cbad2575add','2001-06-11','El jadida',185,90,'medium','2021-06-02','2021-11-29','Active','password',2,'Male','057785521'),(8,'Taha','rh','taha@gmail.com','BG47895','MEBG47895','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBJ4712?alt=media&token=8c4cbf63-123c-425a-84d0-2cbad2575add','2000-06-09','El jadida',170,80,'medium','2021-06-04','2021-06-14','Active','password',NULL,'Male','0699605581'),(10,'ffef','fefef','effeffefef','efefef','MEefefef','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEefefef?alt=media&token=cefa24ab-d7f5-44f5-a903-608052c5cd44','2021-06-04','efefef',3,3,'low','2021-06-04','2021-06-03','Locked','fbfbfbfb',NULL,'Male','efefeffe'),(11,'dvdv','vdvd','dvddvvddv','vddv','MEvddv','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEvddv?alt=media&token=b79af909-fcc8-493e-ac5b-4be810347206','2021-06-05','dvvddvd',3,2,'medium','2021-06-04','2022-05-30','Active','vdvdvdvd',3,'Female','dvdvdvdv'),(13,'Hamid','Benkada','hamid@gmail.com','BJ58741','MEBJ58741','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBJ58741?alt=media&token=e05d8123-7e1d-474b-bd2c-dada87402298','1998-06-05','El jadida',190,90,'medium','2021-06-05','2022-05-31','Active','password',3,'Male','06887412'),(14,'Aymane','Ba3iya','aymane@gmail.com','BH214578','MEBH214578','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBH214578?alt=media&token=e0bbfe9c-29fd-43f9-ad70-556789642abf','1998-06-03','France',190,90,'medium','2021-06-05','2022-05-31','Active','oassword',3,'Male','0699603587'),(15,'jhjhhj','jhjjh','jhhjhjhj','jhhjjh','MEjhhjjh','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEjhhjjh?alt=media&token=6f8a1c58-858a-44a6-91f5-5b483166d553','2021-06-02','hjjhjhhj',3,4,'medium','2021-06-05','2021-12-02','Active','jhhjhjhj',NULL,'Female','hjjhhj'),(16,'Nawfal','Rabit','nawfal@gmail.com','BJ45871','MEBJ45871','https://firebasestorage.googleapis.com/v0/b/egym-a0e75.appspot.com/o/member%2FMEBJ45871?alt=media&token=c9ccaa93-3737-4049-a10c-6fa049355226','2021-06-04','Hay fara7e',195,80,'medium','2021-06-06','2022-06-01','Active','password',NULL,'Male','0688741236');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
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
