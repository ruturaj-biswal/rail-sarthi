package com.railsaarthi.repository;

import com.railsaarthi.entity.SeatAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SeatAvailabilityRepository
        extends JpaRepository<SeatAvailability, Long> {

    List<SeatAvailability> findByTrainId(Long trainId);

    Optional<SeatAvailability> findByTrainIdAndCoachType(
            Long trainId,
            String coachType
    );
}