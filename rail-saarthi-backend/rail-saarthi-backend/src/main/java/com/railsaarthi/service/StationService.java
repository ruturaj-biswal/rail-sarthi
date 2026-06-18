package com.railsaarthi.service;

import com.railsaarthi.entity.Station;
import com.railsaarthi.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService {

    private final StationRepository stationRepository;

    public StationService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    public String getStationCode(String input) {

        return stationRepository
                .findByStationNameIgnoreCase(input)
                .map(Station::getStationCode)
                .orElse(input.toUpperCase());
    }
}