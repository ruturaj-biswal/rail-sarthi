package com.railsaarthi.repository;

import com.railsaarthi.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository
        extends JpaRepository<Booking, Long> {

    List<Booking> findByMobile(String mobile);

    Optional<Booking> findByPnrNumber(String pnrNumber);
}