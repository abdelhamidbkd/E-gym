package com.example.gym.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "sport")
public class Sport implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "sport_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sportId;

    @Column(name = "name_sp")
    private String nameSp;

    @Column(name = "description")
    private String description;
    @Column(name = "sportimage", nullable = false)
    private String sportimage;

}
