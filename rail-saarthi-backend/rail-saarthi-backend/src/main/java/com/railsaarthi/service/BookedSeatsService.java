package com.railsaarthi.service;

import com.railsaarthi.entity.SeatAvailability;
import com.railsaarthi.repository.SeatAvailabilityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookedSeatsService {

    private final SeatAvailabilityRepository seatRepository;

    public BookedSeatsService(
            SeatAvailabilityRepository seatRepository) {

        this.seatRepository = seatRepository;
    }

    public Integer getBookedSeats(Long trainId) {

        List<SeatAvailability> seats =
                seatRepository.findByTrainId(trainId);

        int totalSeats = 0;
        int availableSeats = 0;

        for (SeatAvailability seat : seats) {

            totalSeats += seat.getTotalSeats();

            availableSeats += seat.getAvailableSeats();
        }

        return totalSeats - availableSeats;
    }
}