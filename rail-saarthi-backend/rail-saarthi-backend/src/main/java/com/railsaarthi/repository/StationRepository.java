package com.railsaarthi.repository;

import com.railsaarthi.entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StationRepository extends JpaRepository<Station, Integer> {

    Optional<Station> findByStationNameIgnoreCase(String stationName);

    Optional<Station> findByStationCodeIgnoreCase(String stationCode);
}