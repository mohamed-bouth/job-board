export function filterCities(offers){
    return offers.reduce((acc, offer) => {
        if (!acc.includes(offer.city)) {
            acc.push(offer.city)
        }
        return acc
    }, [])
}

export function filterTechnologies(offers){
    return offers.reduce ((acc, offer) => {
        offer.technologies.forEach(technology => {
            if (!acc.includes(technology)) {
                acc.push(technology)
            }
        })
        return acc
    }, [])
}