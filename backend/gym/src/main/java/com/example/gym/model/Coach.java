package com.example.gym.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "coach")
public class Coach implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "coach_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coachId;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "cin")
    private String cin;

    @Column(name = "coachcode")
    private String coachcode;

    @Column(name = "coachimage")
    private String coachimage;

    @Column(name = "birthdate")
    private Date birthdate;

    @Column(name = "adress")
    private String adress;

    @Column(name = "password")
    private String password;

    @Column(name = "sport_id")
    private Long sportId;

}
