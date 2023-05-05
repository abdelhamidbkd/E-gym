package com.example.gym.Rep;

import com.example.gym.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Date;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>, JpaSpecificationExecutor<Schedule> {

    Schedule findScheduleBysessionId(long id);

    List<Schedule> findScheduleBycoachId(long coch_id);

    List<Schedule> findScheduleBysessionDay(Date day);
}