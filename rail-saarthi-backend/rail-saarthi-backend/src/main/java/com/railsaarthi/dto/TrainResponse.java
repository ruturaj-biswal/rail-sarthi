package com.railsaarthi.dto;

import java.time.LocalTime;

public class TrainResponse {

    private Long id;
    private String trainNumber;
    private String trainName;
    private LocalTime departureTime;
    private LocalTime arrivalTime;

    public TrainResponse() {
    }

    public TrainResponse(
            Long id,
            String trainNumber,
            String trainName,
            LocalTime departureTime,
            LocalTime arrivalTime) {

        this.id = id;
        this.trainNumber = trainNumber;
        this.trainName = trainName;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(String trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }
}