package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ScheduleService {
    private final ScheduleRepository Schedulerep;

    public ScheduleService(ScheduleRepository Schedulerep) {
        this.Schedulerep = Schedulerep;
    }

    public List<Schedule> getAllSchedules() {
        return Schedulerep.findAll();
    }

    public Schedule findScheduleById(long id) {
        return Schedulerep.findScheduleBysessionId(id);
    }

    public boolean createSchedule(Schedule Schedule) throws ParseException {
        List<Schedule> Schedules = Schedulerep.findAll();
        for (Schedule other : Schedules) {
            if (other.getSessionDay().toString().equals(Schedule.getSessionDay().toString())) {
                if(Schedule.getRoomId().equals(other.getRoomId()) || Schedule.getCoachId().equals(other.getCoachId())){

                    if (compareTime(Schedule.getStartAt().toString(),Schedule.getEndAt().toString(),other.getStartAt().toString(),other.getEndAt().toString()) || Schedule.getStartAt().toString().equals(other.getStartAt())|| Schedule.getEndAt().toString().equals(other.getEndAt())){

                        return false;
                    }


                }


            }
        }
    Schedulerep.save(Schedule);
        return true;
    }



    public List<Schedule> findScheduleByCoach(long coch_id) {
        return Schedulerep.findScheduleBycoachId(coch_id);
    }

    public List<Schedule> findScheduleByDay(Date day) {
        return Schedulerep.findScheduleBysessionDay(day);
    }

    public void deleteScheduleBySchedule(Schedule Schedule) {
        Schedulerep.delete(Schedule);
    }

    public void deleteOldSession( ) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        List<Schedule> Schedules = Schedulerep.findAll();
        for (Schedule other : Schedules) {
            java.util.Date utilDate = new java.util.Date(other.getSessionDay().getTime());
            if(formatter.format(utilDate).compareTo(formatter.format(date)) < 0){
                Schedulerep.delete(other);
            }

        }

    }
public boolean compareTime(String timeS,String timeE,String timeBefore,String timeAfter) throws ParseException {

    SimpleDateFormat parser = new SimpleDateFormat("HH:mm");
    Date beforet = parser.parse(timeBefore);
    Date aftert = parser.parse(timeAfter);

        Date userDate = parser.parse(timeS);
         Date userDate2 = parser.parse(timeE);
    if (userDate.after(beforet) && userDate.before(aftert) || userDate2.after(beforet) && userDate2.before(aftert)) {
            return true;
        }
    if(beforet.after(userDate) && beforet.before(userDate2) || aftert.after(userDate) && aftert.before(userDate2) ){
        return true;

    }

    return false;


}

}
