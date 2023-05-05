package com.example.gym.Rep;

import com.example.gym.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CoachRepository extends JpaRepository<Coach, Long>, JpaSpecificationExecutor<Coach> {

    Coach findCoachBycoachId(long id);

    Coach findCoachBylastname(String name);

    Coach findCoachBycoachcode(String code);
}