package com.railsaarthi.service;

import com.railsaarthi.entity.DelayPrediction;
import com.railsaarthi.repository.DelayPredictionRepository;
import org.springframework.stereotype.Service;

@Service
public class DelayPredictionService {

    private final DelayPredictionRepository delayRepository;

    public DelayPredictionService(
            DelayPredictionRepository delayRepository) {

        this.delayRepository = delayRepository;
    }

    public Integer getDelayMinutes(
            Long trainId) {

        return delayRepository
                .findByTrainId(trainId)
                .map(DelayPrediction::getDelayMinutes)
                .orElse(0);
    }
}