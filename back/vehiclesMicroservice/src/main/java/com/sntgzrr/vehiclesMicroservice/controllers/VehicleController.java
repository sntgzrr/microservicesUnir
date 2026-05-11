package com.sntgzrr.vehiclesMicroservice.controllers;

import com.sntgzrr.vehiclesMicroservice.models.Veh;
import com.sntgzrr.vehiclesMicroservice.services.VehicleServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/veh")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VehicleController {
    @Autowired
    private final VehicleServiceImpl vehicleService;

    @GetMapping
    public List<Veh> getVehicles() {
        return this.vehicleService.getVehicles();
    }
    @GetMapping("/{id}")
    public Veh getVehById (@PathVariable Long id) {
        return this.vehicleService.getVehById(id);
    }
    @PostMapping
    public Veh createVehicle (@RequestBody Veh veh) {
        return this.vehicleService.saveVehicle(veh);
    }
    @PutMapping
    public Veh updateVehicle (@RequestBody Veh veh) {
        return this.vehicleService.saveVehicle(veh);
    }
    @DeleteMapping("/{id}")
    public void deleteVehicle (@PathVariable Long id) {
        this.vehicleService.deleteVehicle(id);
    }
}
