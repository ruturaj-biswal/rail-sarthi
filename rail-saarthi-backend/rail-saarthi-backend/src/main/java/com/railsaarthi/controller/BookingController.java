package com.railsaarthi.controller;

import com.railsaarthi.entity.Booking;
import com.railsaarthi.repository.BookingRepository;
import com.railsaarthi.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private final BookingService bookingService;
    private final BookingRepository bookingRepository;

    public BookingController(
            BookingService bookingService,
            BookingRepository bookingRepository) {

        this.bookingService = bookingService;
        this.bookingRepository = bookingRepository;
    }

    @PostMapping
    public Booking bookTicket(
            @RequestBody Booking booking) {

        return bookingService.bookTicket(
                booking
        );
    }

    @GetMapping("/mobile/{mobile}")
    public List<Booking> getBookingsByMobile(
            @PathVariable String mobile) {

        return bookingRepository
                .findByMobile(mobile);
    }

    @GetMapping("/pnr/{pnr}")
    public Booking getByPnr(
            @PathVariable String pnr) {

        return bookingService
                .getBookingByPnr(pnr);
    }
}