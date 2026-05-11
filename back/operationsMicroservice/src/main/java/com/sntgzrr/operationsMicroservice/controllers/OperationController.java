package com.sntgzrr.operationsMicroservice.controllers;

import com.sntgzrr.operationsMicroservice.services.OperationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/operations")
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
