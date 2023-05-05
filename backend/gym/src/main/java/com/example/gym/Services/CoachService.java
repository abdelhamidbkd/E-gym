package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoachService {
    private final CoachRepository Coachrep;

    public CoachService(CoachRepository Coachrep) {
        this.Coachrep = Coachrep;
    }

    public List<Coach> getAllCoachs() {
        return Coachrep.findAll();
    }

    public Coach findCoachById(long id) {
        return Coachrep.findCoachBycoachId(id);
    }

    public Coach findCoachByCode(String code) {
        return Coachrep.findCoachBycoachcode(code);
    }

    public boolean createCoach(Coach Coach) {
        List<Coach> Coachs = Coachrep.findAll();
        for (Coach other : Coachs) {
            if (other.getCin().toString().equals(Coach.getCin().toString())) {
                return false;
            }
        }
        Coachrep.save(Coach);
        return true;
    }

    public boolean updateCoach(Coach Coach) {
        List<Coach> Coachs = Coachrep.findAll();
        for (Coach other : Coachs) {
            if (other.getCin().toString().equals(Coach.getCin().toString())) {
                if (!other.getCoachId().equals(Coach.getCoachId())) {
                    return false;
                }
            }
        }
        Coachrep.save(Coach);
        return true;
    }

    public Coach findCoachByName(String Name) {
        return Coachrep.findCoachBylastname(Name);
    }

    public void deleteCoachByCoach(Coach Coach) {
        Coachrep.delete(Coach);
    }

    public boolean loginCoach(Coach coach) {

        List<Coach> coachs = Coachrep.findAll();
        for (Coach other : coachs) {
            if (other.getCoachcode().toString().equals(coach.getCoachcode().toString())) {
                if (other.getPassword().toString().equals(coach.getPassword().toString()))
                    return true;
            }
        }
        return false;
    }
}
