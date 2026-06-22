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

        System.out.println("INPUT SOURCE = " + source);
        System.out.println("INPUT DESTINATION = " + destination);

        source = stationService.getStationCode(source);
        destination = stationService.getStationCode(destination);

        System.out.println("DB SOURCE CODE = " + source);
        System.out.println("DB DESTINATION CODE = " + destination);
        System.out.println("DATE = " + date);

        List<Object[]> rows =
                trainRepository.searchTrainsWithDate(
                        source,
                        destination,
                        date
                );

        System.out.println("ROWS FOUND = " + rows.size());

        List<TrainResponse> result = new ArrayList<>();

        for (Object[] row : rows) {

            System.out.println("TRAIN = " + row[2]);

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