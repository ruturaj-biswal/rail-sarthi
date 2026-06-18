package com.railsaarthi.controller;

import com.railsaarthi.dto.TrainResponse;
import com.railsaarthi.entity.Train;
import com.railsaarthi.service.TrainService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/trains")
public class TrainController {

    private final TrainService trainService;

    public TrainController(TrainService trainService) {
        this.trainService = trainService;
    }

    @GetMapping
    public List<Train> getAllTrains() {
        return trainService.getAllTrains();
    }

    @GetMapping("/search")
    public List<TrainResponse> searchTrains(
            @RequestParam String source,
            @RequestParam String destination,
            @RequestParam String date) {

        return trainService.searchTrains(
                source,
                destination,
                LocalDate.parse(date)
        );
    }
}