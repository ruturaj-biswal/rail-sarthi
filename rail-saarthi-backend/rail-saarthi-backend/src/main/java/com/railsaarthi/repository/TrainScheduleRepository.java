package com.railsaarthi.repository;

import com.railsaarthi.entity.TrainSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TrainScheduleRepository
        extends JpaRepository<TrainSchedule, Long> {

    List<TrainSchedule> findByJourneyDate(LocalDate journeyDate);

}