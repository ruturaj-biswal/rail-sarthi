package com.railsaarthi.repository;

import com.railsaarthi.entity.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TrainRepository extends JpaRepository<Train, Long> {

    @Query(value = """
            SELECT DISTINCT
                t.id,
                t.train_number,
                t.train_name,
                ts.departure_time,
                ts.arrival_time
            FROM trains t
            JOIN train_schedule ts
                ON t.id = ts.train_id
            JOIN train_route s
                ON t.id = s.train_id
            JOIN train_route d
                ON t.id = d.train_id
            WHERE s.station_code = :source
            AND d.station_code = :destination
            AND s.station_order < d.station_order
            AND ts.journey_date = :date
            """,
            nativeQuery = true)
    List<Object[]> searchTrainsWithDate(
            @Param("source") String source,
            @Param("destination") String destination,
            @Param("date") LocalDate date
    );
}