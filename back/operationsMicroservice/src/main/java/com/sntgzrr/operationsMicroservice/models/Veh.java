package com.sntgzrr.operationsMicroservice.models;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Veh {
    Long id;
    String marca;
    String modelo;
    boolean estado;
}
