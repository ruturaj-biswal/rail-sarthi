package com.railsaarthi.dto;

public class BookedSeatsResponse {

    private Integer bookedSeats;

    public BookedSeatsResponse(Integer bookedSeats) {
        this.bookedSeats = bookedSeats;
    }

    public Integer getBookedSeats() {
        return bookedSeats;
    }

    public void setBookedSeats(Integer bookedSeats) {
        this.bookedSeats = bookedSeats;
    }
}