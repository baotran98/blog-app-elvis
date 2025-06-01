import axios from "axios";

export async function fetchStrapiData(route: string) {
    try {
        const response = await axios.get(`${process.env.API_URL}` + route);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(`Could not fetch data for component: ${error.message}`);
    }
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return date.toLocaleDateString('vi-VI', options);
}