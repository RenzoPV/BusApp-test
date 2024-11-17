import { Bus } from "../interfaces/Bus";

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

export async function fetchBuses(): Promise<Bus[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error al obtener la lista de buses.");
    }

    return response.json();
}

export async function fetchBusById(id: number): Promise<Bus> {
    const response = await fetch(`${API_URL}/${id}`);

    if(!response.ok) {
        throw new Error("Error al obtener la información del bus.")
    }
    return response.json();
}