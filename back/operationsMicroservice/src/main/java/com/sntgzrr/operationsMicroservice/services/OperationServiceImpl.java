package com.sntgzrr.operationsMicroservice.services;

import com.sntgzrr.operationsMicroservice.models.Veh;
import com.sntgzrr.operationsMicroservice.models.VehClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperationServiceImpl {
    @Autowired
    private VehClient vehClient;

    public String rental (Long vehId) {
        Veh veh = vehClient.getVeh(vehId);
        if (!veh.getStatus()) {
            return "Vehículo no disponible";
        }

        veh.setStatus(false);
        vehClient.updateVeh(veh);

        return "Alquiler confirmado";
    }

    public String cancel(Long VehId) {

        Veh veh = vehClient.getVeh(VehId);
        veh.setStatus(true);
        vehClient.updateVeh(veh);

        return "Alquiler cancelado";
    }
}
