package com.railsaarthi.controller;

import com.railsaarthi.dto.CrowdPredictionRequest;
import com.railsaarthi.service.MlCrowdPredictionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ml")
@CrossOrigin(origins = "http://localhost:3000")
public class MlCrowdPredictionController {

    private final
    MlCrowdPredictionService mlService;

    public MlCrowdPredictionController(
            MlCrowdPredictionService mlService) {

        this.mlService = mlService;
    }

    @PostMapping("/crowd")
    public Double predictCrowd(
            @RequestBody
            CrowdPredictionRequest request) {

        return mlService
                .predictCrowd(request);
    }
}