package com.example.gym.Rep;

import com.example.gym.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SportRepository extends JpaRepository<Sport, Long>, JpaSpecificationExecutor<Sport> {

    Sport findSportBysportId(long id);

    Sport findSportBynameSp(String name);
}