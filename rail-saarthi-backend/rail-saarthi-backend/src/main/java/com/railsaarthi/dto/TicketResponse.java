package com.railsaarthi.dto;

public class TicketResponse {

    private Long ticketId;
    private String passengerName;
    private Integer age;
    private String gender;
    private String mobile;
    private String coachType;
    private String status;

    public TicketResponse(
            Long ticketId,
            String passengerName,
            Integer age,
            String gender,
            String mobile,
            String coachType,
            String status) {

        this.ticketId = ticketId;
        this.passengerName = passengerName;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.coachType = coachType;
        this.status = status;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public Integer getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getMobile() {
        return mobile;
    }

    public String getCoachType() {
        return coachType;
    }

    public String getStatus() {
        return status;
    }
}