package com.railsaarthi.controller;

import com.railsaarthi.dto.BookedSeatsResponse;
import com.railsaarthi.service.BookedSeatsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booked-seats")
@CrossOrigin(origins = "http://localhost:3000")
public class BookedSeatsController {

    private final BookedSeatsService bookedSeatsService;

    public BookedSeatsController(
            BookedSeatsService bookedSeatsService) {

        this.bookedSeatsService =
                bookedSeatsService;
    }

    @GetMapping("/{trainId}")
    public BookedSeatsResponse getBookedSeats(
            @PathVariable Long trainId) {

        return new BookedSeatsResponse(
                bookedSeatsService
                        .getBookedSeats(trainId)
        );
    }
}