package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesService {
    private final RolesRepository Rolesrep;

    public RolesService(RolesRepository Rolesrep) {
        this.Rolesrep = Rolesrep;
    }

    public List<Roles> getAllRoless() {
        return Rolesrep.findAll();
    }

    public Roles findRolesById(long id) {
        return Rolesrep.findRolesByroleId(id);
    }

    public boolean createRoles(Roles Roles) {
        List<Roles> Roless = Rolesrep.findAll();
        for (Roles other : Roless) {
            if (other.getUserId().toString().equals(Roles.getUserId().toString())) {
                return false;
            }
        }
        Rolesrep.save(Roles);
        return true;
    }



    public Roles findRolesByUserId(Long id) {
        return Rolesrep.findRolesByuserId(id);
    }

    public void deleteRolesByRoles(Roles Roles) {
        Rolesrep.delete(Roles);
    }
}
