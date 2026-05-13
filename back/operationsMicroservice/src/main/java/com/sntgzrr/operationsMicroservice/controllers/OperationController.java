package com.sntgzrr.operationsMicroservice.controllers;

import com.sntgzrr.operationsMicroservice.services.OperationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OperationController {
    @Autowired
    private OperationServiceImpl operationService;

    @PostMapping("/rental/{vehId}")
    public String rental(@PathVariable Long vehId) {
        return operationService.rental(vehId);
    }

    @PostMapping("/cancel/{vehId}")
    public String cancel(@PathVariable Long vehId) {
        return operationService.cancel(vehId);
    }
}
