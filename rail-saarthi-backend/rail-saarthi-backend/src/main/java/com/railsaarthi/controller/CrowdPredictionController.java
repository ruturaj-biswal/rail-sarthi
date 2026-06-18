package com.railsaarthi.controller;

import com.railsaarthi.service.CrowdPredictionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crowd")
@CrossOrigin(origins = "http://localhost:3000")
public class CrowdPredictionController {

    private final CrowdPredictionService crowdService;

    public CrowdPredictionController(
            CrowdPredictionService crowdService) {

        this.crowdService = crowdService;
    }

    @GetMapping("/{trainId}")
    public Integer getCrowdPrediction(
            @PathVariable Long trainId) {

        return crowdService
                .getCrowdPercentage(trainId);
    }
}