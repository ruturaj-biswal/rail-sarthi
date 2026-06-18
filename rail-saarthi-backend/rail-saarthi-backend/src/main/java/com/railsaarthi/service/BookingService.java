package com.railsaarthi.service;

import com.railsaarthi.entity.Booking;
import com.railsaarthi.entity.SeatAvailability;
import com.railsaarthi.repository.BookingRepository;
import com.railsaarthi.repository.SeatAvailabilityRepository;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final SeatAvailabilityRepository seatRepository;

    public BookingService(
            BookingRepository bookingRepository,
            SeatAvailabilityRepository seatRepository) {

        this.bookingRepository = bookingRepository;
        this.seatRepository = seatRepository;
    }

    public Booking bookTicket(
            Booking booking) {

        SeatAvailability seat =
                seatRepository
                        .findByTrainIdAndCoachType(
                                booking.getTrainId(),
                                booking.getCoachType()
                        )
                        .orElse(null);

        if (seat == null) {

            throw new RuntimeException(
                    "Coach not found"
            );

        }

        if (seat.getAvailableSeats() <= 0) {

            throw new RuntimeException(
                    "No Seats Available"
            );

        }

        if (seat.getAvailableSeats()
                < booking.getSeatsBooked()) {

            throw new RuntimeException(
                    "Not enough seats available"
            );

        }

        seat.setAvailableSeats(
                seat.getAvailableSeats()
                        - booking.getSeatsBooked()
        );

        seatRepository.save(seat);

        String pnrNumber =
                String.valueOf(
                        System.currentTimeMillis()
                ).substring(3);

        booking.setPnrNumber(
                pnrNumber
        );

        booking.setStatus(
                "CONFIRMED"
        );

        return bookingRepository
                .save(booking);
    }

    public Booking getBookingByPnr(
            String pnrNumber) {

        return bookingRepository
                .findByPnrNumber(
                        pnrNumber
                )
                .orElse(null);
    }
}