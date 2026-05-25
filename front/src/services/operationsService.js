import axios from "axios";

export const api = axios.create();

export async function cancelRentaCar(vehicleId) {
    try {
        const response = await api.post(`/operations/cancel/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}

export async function rentVehicle(vehicleId) {
    try {
        const response = await api.post(`/operations/rental/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}
