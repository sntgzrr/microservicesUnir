import axios from "axios"

export const api = axios.create();

export async function getVehicles() {
    try {
        const response = await api.get('/veh');
        return response.data;
    } catch (error) {
        console.error("Error fetching vehicles:", error);
    }
}

export async function createVehicle(vehicleData) {
    try {
        vehicleData.status = true;
        const response = await api.post('/veh', vehicleData);
        return response.data;
    } catch (error) {
        console.error("Error creating vehicle:", error);
    }
}

export async function updateVehicle(vehicleData) {
    try {
        const response = await api.put('/veh', vehicleData);
        return response.data;
    } catch (error) {
        console.error("Error updating vehicle:", error);
    }
}

export async function deleteVehicle(vehicleId) {
    try {
        const response = await api.delete(`/veh/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting vehicle:", error);
    }
}
