package com.example.gym.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "member")
public class Member implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "member_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "cin")
    private String cin;

    @Column(name = "membercode")
    private String membercode;

    @Column(name = "memberpic")
    private String memberpic;

    @Column(name = "birthdate")
    private Date birthdate;

    @Column(name = "adress")
    private String adress;

    @Column(name = "height")
    private Integer height;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "activity_level")
    private String activityLevel;

    @Column(name = "subscription_date")
    private Date subscriptionDate;

    @Column(name = "subscription_expire")
    private Date subscriptionExpire;

    @Column(name = "status")
    private String status;

    @Column(name = "password")
    private String password;

    @Column(name = "subscription_id")
    private Long subscriptionId;

    @Column(name = "gender")
    private String gender;

    @Column(name = "phone")
    private String phone;

}
