package com.sntgzrr.vehiclesMicroservice.services;

import com.sntgzrr.vehiclesMicroservice.models.Veh;
import com.sntgzrr.vehiclesMicroservice.repositories.IVehiclesRepository;
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
    public Veh getVehById (Long id) {
        return this.iVehiclesRepository.getReferenceById(id);
    }
    public Veh saveVehicle (Veh veh) {
        return this.iVehiclesRepository.save(veh);
    }
    public void deleteVehicle (Long id) {
        this.iVehiclesRepository.deleteById(id);
    }
}
