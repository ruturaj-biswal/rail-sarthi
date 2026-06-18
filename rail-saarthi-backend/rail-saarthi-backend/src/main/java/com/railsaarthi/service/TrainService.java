package com.railsaarthi.service;

import com.railsaarthi.dto.TrainResponse;
import com.railsaarthi.entity.Train;
import com.railsaarthi.repository.TrainRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.sql.Time;

@Service
public class TrainService {

    private final TrainRepository trainRepository;
    private final StationService stationService;

    public TrainService(
            TrainRepository trainRepository,
            StationService stationService) {

        this.trainRepository = trainRepository;
        this.stationService = stationService;
    }

    public List<Train> getAllTrains() {
        return trainRepository.findAll();
    }

    public List<TrainResponse> searchTrains(
            String source,
            String destination,
            LocalDate date) {

        source = stationService.getStationCode(source);
        destination = stationService.getStationCode(destination);

        List<Object[]> rows =
                trainRepository.searchTrainsWithDate(
                        source,
                        destination,
                        date
                );

        List<TrainResponse> result = new ArrayList<>();

        for (Object[] row : rows) {

            result.add(
                    new TrainResponse(
                            ((Number) row[0]).longValue(),
                            (String) row[1],
                            (String) row[2],
                            ((Time) row[3]).toLocalTime(),
                            ((Time) row[4]).toLocalTime()
                    )
            );
        }

        return result;
    }
}