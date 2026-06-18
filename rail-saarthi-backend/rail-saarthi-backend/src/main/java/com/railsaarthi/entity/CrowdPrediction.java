package com.railsaarthi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "crowd_prediction")
public class CrowdPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "train_id")
    private Long trainId;

    @Column(name = "crowd_percentage")
    private Integer crowdPercentage;

    public Long getId() {
        return id;
    }

    public Long getTrainId() {
        return trainId;
    }

    public void setTrainId(Long trainId) {
        this.trainId = trainId;
    }

    public Integer getCrowdPercentage() {
        return crowdPercentage;
    }

    public void setCrowdPercentage(Integer crowdPercentage) {
        this.crowdPercentage = crowdPercentage;
    }
}