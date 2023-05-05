package com.example.gym.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "subscription")
public class Subscription implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subscription_id", nullable = false)
    private Long subscriptionId;

    @Column(name = "name_sub")
    private String nameSub;

    @Column(name = "desc_sub")
    private String descSub;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "price")
    private Integer price;

}
