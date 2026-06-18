package com.railsaarthi.service;

import com.railsaarthi.dto.CrowdPredictionRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class MlCrowdPredictionService {

    public Double predictCrowd(
            CrowdPredictionRequest request) {

        RestTemplate restTemplate =
                new RestTemplate();

        HttpHeaders headers =
                new HttpHeaders();

        headers.setContentType(
                MediaType.APPLICATION_JSON
        );

        Map<String, Object> body =
                Map.of(
                        "train_id",
                        request.getTrainId(),
                        "day_of_week",
                        request.getDayOfWeek(),
                        "month",
                        request.getMonth(),
                        "booked_seats",
                        request.getBookedSeats()
                );

        HttpEntity<Map<String, Object>>
                entity =
                new HttpEntity<>(
                        body,
                        headers
                );

        ResponseEntity<Map> response =
                restTemplate.postForEntity(
                        "http://localhost:5000/predict-crowd",
                        entity,
                        Map.class
                );

        return Double.valueOf(
                response.getBody()
                        .get("crowd_percentage")
                        .toString()
        );
    }
}