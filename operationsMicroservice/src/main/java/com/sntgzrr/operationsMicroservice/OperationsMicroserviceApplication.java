package com.sntgzrr.operationsMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.sntgzrr.operationsMicroservice")
public class OperationsMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsMicroserviceApplication.class, args);
	}

}
