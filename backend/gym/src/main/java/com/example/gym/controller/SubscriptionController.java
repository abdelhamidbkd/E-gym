package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Subscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Subscription")
public class SubscriptionController {
    private final SubscriptionService Subscriptionservice;

    @Autowired
    public SubscriptionController(SubscriptionService Subscriptionservice) {
        this.Subscriptionservice = Subscriptionservice;
    }

    @GetMapping("")
    public List<Subscription> AllSubscriptions() {
        return Subscriptionservice.getAllSubscriptions();
    }

    @PostMapping("/add")
    public boolean newSubscription(@RequestBody Subscription Subscription) {
        return Subscriptionservice.createSubscription(Subscription);
    }

    @PutMapping("/update")
    public boolean editSubscription(@RequestBody Subscription Subscription) {
        return Subscriptionservice.updateSubscription(Subscription);
    }

    @GetMapping("/{SubscriptionId}")
    public Subscription SubscriptionById(@PathVariable long SubscriptionId) {
        return Subscriptionservice.findSubscriptionById(SubscriptionId);
    }

    @GetMapping("/SubName/{SubName}")
    public Subscription SubscriptionByTitle(@PathVariable String SubName) {
        return Subscriptionservice.findSubscriptionByname(SubName);
    }

    @DeleteMapping("/delete/{SubscriptionId}")
    public void deleteBySubscription(@PathVariable long SubscriptionId) {
        Subscriptionservice.deleteSubscriptionBySubscription(Subscriptionservice.findSubscriptionById(SubscriptionId));
    }
}
