package com.sntgzrr.vehMicroservice.models;

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
    @Column(name = "marca")
    String marca;
    @Column(name = "modelo")
    String modelo;
    @Column(name = "estado")
    Boolean estado;
}
