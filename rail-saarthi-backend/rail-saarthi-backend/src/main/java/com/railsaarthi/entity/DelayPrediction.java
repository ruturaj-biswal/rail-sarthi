package com.railsaarthi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "delay_prediction")
public class DelayPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "train_id")
    private Long trainId;

    @Column(name = "delay_minutes")
    private Integer delayMinutes;

    public Long getId() {
        return id;
    }

    public Long getTrainId() {
        return trainId;
    }

    public void setTrainId(Long trainId) {
        this.trainId = trainId;
    }

    public Integer getDelayMinutes() {
        return delayMinutes;
    }

    public void setDelayMinutes(Integer delayMinutes) {
        this.delayMinutes = delayMinutes;
    }
}