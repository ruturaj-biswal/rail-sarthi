package com.railsaarthi.repository;

import com.railsaarthi.entity.DelayPrediction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DelayPredictionRepository
        extends JpaRepository<DelayPrediction, Long> {

    Optional<DelayPrediction> findByTrainId(Long trainId);
}