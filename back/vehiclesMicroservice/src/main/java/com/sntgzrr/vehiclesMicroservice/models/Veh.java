package com.sntgzrr.vehiclesMicroservice.models;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;

@Entity(name = "Vehicles")
@Table(name = "\"Vehicles\"")
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Veh implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    Long id;
    @Column(name = "brand")
    String brand;
    @Column(name = "model")
    String model;
    @Column(name = "status")
    Boolean status;
    @Column(name = "year")
    Integer year;
    @Column(name = "licensePlate")
    String licensePlate;
    @Column(name = "pricePerDay")
    Integer pricePerDay;
    @Column (name = "mileage")
    Integer mileage;
    @Column (name = "image")
    String image;
    @Column(name = "rentedBy")
    String rentedBy;
    @Column(name = "rentalDate")
    String rentalDate;
}
