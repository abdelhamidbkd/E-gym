package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Schedule")
public class ScheduleController {
    private final ScheduleService Scheduleservice;

    @Autowired
    public ScheduleController(ScheduleService Scheduleservice) {
        this.Scheduleservice = Scheduleservice;
    }

    @GetMapping("")
    public List<Schedule> AllSchedules() {
        return Scheduleservice.getAllSchedules();
    }

    @PostMapping("/add")
    public boolean newSchedule(@RequestBody Schedule Schedule) throws ParseException {
        return Scheduleservice.createSchedule(Schedule);
    }



    @GetMapping("/{ScheduleId}")
    public Schedule ScheduleById(@PathVariable long ScheduleId) {
        return Scheduleservice.findScheduleById(ScheduleId);
    }

    @GetMapping("/CoachID/{CoachID}")
    public List<Schedule> ScheduleByTitle(@PathVariable long CoachID) {
        return Scheduleservice.findScheduleByCoach(CoachID);
    }

    @GetMapping("/day/{day}")
    public List<Schedule> ScheduleByTDay(@PathVariable Date day) {
        return Scheduleservice.findScheduleByDay(day);
    }

    @DeleteMapping("/delete/{ScheduleId}")
    public void deleteBySchedule(@PathVariable long ScheduleId) {
        Scheduleservice.deleteScheduleBySchedule(Scheduleservice.findScheduleById(ScheduleId));
    }

    @DeleteMapping("/deleteold/")
    public void deleteBySchedule() {
        Scheduleservice.deleteOldSession();
    }
}
