package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService {
    private final SportRepository Sportrep;

    public SportService(SportRepository Sportrep) {
        this.Sportrep = Sportrep;
    }

    public List<Sport> getAllSports() {
        return Sportrep.findAll();
    }

    public Sport findSportById(long id) {
        return Sportrep.findSportBysportId(id);
    }

    public boolean createSport(Sport Sport) {
        List<Sport> Sports = Sportrep.findAll();
        for (Sport other : Sports) {
            if (other.getNameSp().toString().equals(Sport.getNameSp().toString())) {
                return false;
            }
        }
        Sportrep.save(Sport);
        return true;
    }

    public boolean updateSport(Sport Sport) {
        List<Sport> Sports = Sportrep.findAll();
        for (Sport other : Sports) {
            if (other.getNameSp().toString().equals(Sport.getNameSp().toString())) {
                if (!other.getSportId().equals(Sport.getSportId())) {
                    return false;
                }
            }
        }
        Sportrep.save(Sport);
        return true;
    }

    public Sport findSportByName(String name) {
        return Sportrep.findSportBynameSp(name);
    }

    public void deleteSportBySport(Sport Sport) {
        Sportrep.delete(Sport);
    }
}
