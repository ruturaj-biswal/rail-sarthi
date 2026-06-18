package com.railsaarthi.controller;

import com.railsaarthi.service.DelayPredictionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/delay")
@CrossOrigin(origins = "http://localhost:3000")
public class DelayPredictionController {

    private final DelayPredictionService delayService;

    public DelayPredictionController(
            DelayPredictionService delayService) {

        this.delayService = delayService;
    }

    @GetMapping("/{trainId}")
    public Integer getDelayPrediction(
            @PathVariable Long trainId) {

        return delayService
                .getDelayMinutes(trainId);
    }
}