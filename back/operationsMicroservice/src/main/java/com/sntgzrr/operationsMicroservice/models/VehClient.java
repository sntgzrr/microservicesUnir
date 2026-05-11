package com.sntgzrr.operationsMicroservice.models;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "vehiclesMicroservice", url = "http://localhost:8081")
public interface VehClient {
    @GetMapping("/veh/{id}")
    Veh getVeh (@PathVariable("id") Long id);

    @PutMapping("/veh")
    Veh updateVeh (@RequestBody Veh veh);
}
