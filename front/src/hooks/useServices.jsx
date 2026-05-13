import { useEffect, useState } from "react";
import { getVehicles } from "../services/vehiclesService";
import { rentVehicle, cancelRentaCar } from "../services/operationsService";

export function useFetchingVehicles() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const vehiclesData = await getVehicles();
            setVehicles(vehiclesData);
        };
        fetchVehicles();
    }, []);
    return { vehicles, setVehicles };
}

export function useVehicleOperationsRentCar() {
    const [operationStatus, setOperationStatus] = useState(null);

    const rentCar = async (vehicleId) => {
        const response = await rentVehicle(vehicleId);
        const newStatus = response === "Alquiler confirmado" ? false : true;
        setOperationStatus(newStatus);
        return newStatus;
    };

    return { operationStatus, rentCar };
}

export function useVehicleOperationsCancelCar() {
    const [operationStatus, setOperationStatus] = useState(null);

    const cancelCar = async (vehicleId) => {
        const response = await cancelRentaCar(vehicleId);
        const newStatus = response === "Alquiler cancelado" ? true : false;
        setOperationStatus(newStatus);
        return newStatus;
    };

    return { operationStatus, cancelCar };
}
