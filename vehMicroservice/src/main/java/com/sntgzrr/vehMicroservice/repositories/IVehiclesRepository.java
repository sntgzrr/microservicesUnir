package com.sntgzrr.vehMicroservice.repositories;

import com.sntgzrr.vehMicroservice.models.Veh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVehiclesRepository extends JpaRepository<Veh, Long> {
}
