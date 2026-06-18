package com.railsaarthi.service;

import com.railsaarthi.entity.CrowdPrediction;
import com.railsaarthi.repository.CrowdPredictionRepository;
import org.springframework.stereotype.Service;

@Service
public class CrowdPredictionService {

    private final CrowdPredictionRepository crowdRepository;

    public CrowdPredictionService(
            CrowdPredictionRepository crowdRepository) {

        this.crowdRepository = crowdRepository;
    }

    public Integer getCrowdPercentage(
            Long trainId) {

        return crowdRepository
                .findByTrainId(trainId)
                .map(CrowdPrediction::getCrowdPercentage)
                .orElse(0);
    }
}