package com.sntgzrr.vehiclesMicroservice.repositories;

import com.sntgzrr.vehiclesMicroservice.models.Veh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVehiclesRepository extends JpaRepository<Veh, Long> {
}
