package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Coach;
import com.example.gym.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Coach")
public class CoachController {
    private final CoachService Coachservice;

    @Autowired
    public CoachController(CoachService Coachservice) {
        this.Coachservice = Coachservice;
    }

    @GetMapping("")
    public List<Coach> AllCoachs() {
        return Coachservice.getAllCoachs();
    }

    @PostMapping("/add")
    public boolean newCoach(@RequestBody Coach Coach) {
        return Coachservice.createCoach(Coach);
    }

    @PutMapping("/update")
    public boolean editCoach(@RequestBody Coach Coach) {
        return Coachservice.updateCoach(Coach);
    }

    @GetMapping("/{CoachId}")
    public Coach CoachById(@PathVariable long CoachId) {
        return Coachservice.findCoachById(CoachId);
    }

    @GetMapping("/lastname/{lastname}")
    public Coach CoachByTitle(@PathVariable String lastname) {
        return Coachservice.findCoachByName(lastname);
    }

    @DeleteMapping("/delete/{CoachId}")
    public void deleteByCoach(@PathVariable long CoachId) {
        Coachservice.deleteCoachByCoach(Coachservice.findCoachById(CoachId));
    }

    @PostMapping("/login")
    public boolean loginCoach( @RequestBody Coach coach) {
        return Coachservice.loginCoach(coach);
    }

    @GetMapping("/code/{code}")
    public Coach MemberByCode(@PathVariable String code) {
        return Coachservice.findCoachByCode(code);
    }

}
