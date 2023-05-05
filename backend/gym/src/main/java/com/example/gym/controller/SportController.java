package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Sport")
public class SportController {
    private final SportService Sportservice;

    @Autowired
    public SportController(SportService Sportservice) {
        this.Sportservice = Sportservice;
    }

    @GetMapping("")
    public List<Sport> AllSports() {
        return Sportservice.getAllSports();
    }

    @PostMapping("/add")
    public boolean newSport(@RequestBody Sport Sport) {
        return Sportservice.createSport(Sport);
    }

    @PutMapping("/update")
    public boolean editSport(@RequestBody Sport Sport) {
        return Sportservice.updateSport(Sport);
    }

    @GetMapping("/{SportId}")
    public Sport SportById(@PathVariable long SportId) {
        return Sportservice.findSportById(SportId);
    }

    @GetMapping("/SportName/{SportName}")
    public Sport SportByTitle(@PathVariable String SportName) {
        return Sportservice.findSportByName(SportName);
    }

    @DeleteMapping("/delete/{SportId}")
    public void deleteBySport(@PathVariable long SportId) {
        Sportservice.deleteSportBySport(Sportservice.findSportById(SportId));
    }
}
