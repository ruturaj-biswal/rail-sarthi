package com.railsaarthi.controller;

import com.railsaarthi.entity.Station;
import com.railsaarthi.service.StationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stations")
@CrossOrigin(origins = "http://localhost:3000")
public class StationController {

    private final StationService stationService;

    public StationController(
            StationService stationService) {

        this.stationService = stationService;
    }

    @GetMapping
    public List<Station> getAllStations() {

        return stationService.getAllStations();
    }
}