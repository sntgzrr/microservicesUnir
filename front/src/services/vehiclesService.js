import axios from "axios"
import { DOMAIN_URL } from "../utils/Constants"

export const api = axios.create();

export async function getVehicles() {
    try {
        const response = await api.get(`${DOMAIN_URL}/veh`);
        return response.data;
    } catch (error) {
        console.error("Error fetching vehicles:", error);
    }
}

export async function updateVehicle() {
    try {
        const response = await api.put(`${DOMAIN_URL}/veh`);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}
