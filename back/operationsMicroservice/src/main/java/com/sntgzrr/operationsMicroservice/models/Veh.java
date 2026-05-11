package com.sntgzrr.operationsMicroservice.models;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Veh {
    Long id;
    String brand;
    String model;
    Boolean status;
    Integer year;
    String licensePlate;
    Integer pricePerDay;
    Integer mileage;
    String image;
}
