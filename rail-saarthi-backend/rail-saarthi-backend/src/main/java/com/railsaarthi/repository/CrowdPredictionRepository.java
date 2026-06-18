package com.railsaarthi.repository;

import com.railsaarthi.entity.CrowdPrediction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CrowdPredictionRepository
        extends JpaRepository<CrowdPrediction, Long> {

    Optional<CrowdPrediction> findByTrainId(Long trainId);
}