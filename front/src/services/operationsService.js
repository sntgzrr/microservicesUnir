import axios from "axios";
import { DOMAIN_URL } from "../utils/Constants"

export const api = axios.create();

export async function cancelRentaCar(vehicleId) {
    try {
        const response = await api.post(`${DOMAIN_URL}/operations/cancel/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}

export async function rentVehicle(vehicleId) {
    try {
        const response = await api.post(`${DOMAIN_URL}/operations/rental/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}
