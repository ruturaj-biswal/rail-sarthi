package com.railsaarthi.controller;

import com.railsaarthi.entity.SeatAvailability;
import com.railsaarthi.service.SeatAvailabilityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seats")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatAvailabilityController {

    private final SeatAvailabilityService seatService;

    public SeatAvailabilityController(
            SeatAvailabilityService seatService) {

        this.seatService = seatService;
    }

    @GetMapping("/{trainId}")
    public List<SeatAvailability> getSeats(
            @PathVariable Long trainId) {

        return seatService
                .getSeatsByTrainId(trainId);
    }
}