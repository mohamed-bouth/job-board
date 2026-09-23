export async function getData() {
    try {
        const response = await fetch("/data/offers.json");
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("Error fetching data");
        return [];
    }
}