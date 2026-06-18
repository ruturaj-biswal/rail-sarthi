package com.railsaarthi.service;

import com.railsaarthi.entity.SeatAvailability;
import com.railsaarthi.repository.SeatAvailabilityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatAvailabilityService {

    private final SeatAvailabilityRepository seatAvailabilityRepository;

    public SeatAvailabilityService(
            SeatAvailabilityRepository seatAvailabilityRepository) {

        this.seatAvailabilityRepository =
                seatAvailabilityRepository;
    }

    public List<SeatAvailability> getSeatsByTrainId(
            Long trainId) {

        return seatAvailabilityRepository
                .findByTrainId(trainId);
    }
}