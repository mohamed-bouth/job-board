export async function getData() {
    try {
        const response = await fetch("http://127.0.0.1:3000/api/offers", {
            headers : {
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        console.log(data.data)
        return data.data.offers;
    } catch (error) {
        console.error("FETCH ERROR:", error);
        return [];
    }
}