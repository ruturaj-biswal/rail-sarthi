package com.railsaarthi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "train_route")
public class TrainRoute {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "train_id")
    private Long trainId;

    @Column(name = "station_code")
    private String stationCode;

    @Column(name = "station_order")
    private Integer stationOrder;

    public Long getId() {
        return id;
    }

    public Long getTrainId() {
        return trainId;
    }

    public void setTrainId(Long trainId) {
        this.trainId = trainId;
    }

    public String getStationCode() {
        return stationCode;
    }

    public void setStationCode(String stationCode) {
        this.stationCode = stationCode;
    }

    public Integer getStationOrder() {
        return stationOrder;
    }

    public void setStationOrder(Integer stationOrder) {
        this.stationOrder = stationOrder;
    }
}