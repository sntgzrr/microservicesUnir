package com.sntgzrr.vehMicroservice.services;

import com.sntgzrr.vehMicroservice.models.Veh;
import com.sntgzrr.vehMicroservice.repositories.IVehiclesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl {
    @Autowired
    private final IVehiclesRepository iVehiclesRepository;

    public List<Veh> getVehicles () {
        return this.iVehiclesRepository.findAll();
    }
    public Veh saveVehicle (Veh veh) {
        return this.iVehiclesRepository.save(veh);
    }
    public void deleteVehicle (Long id) {
        this.iVehiclesRepository.deleteById(id);
    }
}
