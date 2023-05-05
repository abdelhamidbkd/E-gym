package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Roles")
public class RolesController {
    private final RolesService Rolesservice;

    @Autowired
    public RolesController(RolesService Rolesservice) {
        this.Rolesservice = Rolesservice;
    }

    @GetMapping("")
    public List<Roles> AllRoless() {
        return Rolesservice.getAllRoless();
    }

    @PostMapping("/add")
    public boolean newRoles(@RequestBody Roles Roles) {
        return Rolesservice.createRoles(Roles);
    }



    @GetMapping("/{RolesId}")
    public Roles RolesById(@PathVariable long RolesId) {
        return Rolesservice.findRolesById(RolesId);
    }



    @DeleteMapping("/delete/{RolesId}")
    public void deleteByRoles(@PathVariable long RolesId) {
        Rolesservice.deleteRolesByRoles(Rolesservice.findRolesById(RolesId));
    }
}
