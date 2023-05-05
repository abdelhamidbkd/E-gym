package com.example.gym.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "article")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "article_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;

    @Column(name = "title")
    private String title;

    @Column(name = "article_date", nullable = false)
    private Date articleDate;

    @Column(name = "article_type")
    private String articleType;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "coach_id")
    private Long coachId;
    @Column(name = "articecoverimage")
    private String articecoverimage;
    @Column(name = "articefile")
    private String articefile;

}
