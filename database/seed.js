import db from "../src/config/db.js"
import { queryKeysValuesHelper } from "../src/utils/queryKeysValuesHelper.js";
import offers from "./data/offers.js";
import companies from "./data/companies.js";
import technologies from "./data/technologies.js";
import { Offer } from "../src/modules/offer.module.js";
import { Technology } from "../src/modules/technology.module.js"

async function seedCompanyTable(db, companies) {
    const companiesText = queryKeysValuesHelper(companies)
    const query = `
        INSERT INTO company ${companiesText.keys}
        VALUES ${companiesText.values};
    `;
    try {
        await db.query(query)
        console.log("Companies inserted successfully!")
    } catch (error) {
        console.error(error)
    }
}

async function seedTechnologyTable(db, technologies) {
    const technologiesText = queryKeysValuesHelper(technologies);

    const query = `
        INSERT INTO technology ${technologiesText.keys}
        VALUES ${technologiesText.values};
    `;
    try {
        await db.query(query);
        console.log("Technologies inserted successfully!");
    } catch (error) {
        console.error(error)
    }
}

async function seedOfferTable(db, offers) {
    const offersText = queryKeysValuesHelper(offers);

    const query = `
        INSERT INTO offer ${offersText.keys}
        VALUES ${offersText.values};
    `;
    try {
        await db.query(query);
        console.log("Offers inserted successfully!");
    } catch (error) {
        console.error(error)
    }

}

async function getOffersTechnologiesIds() {
    try {
        const offer = new Offer()
        const technology = new Technology()
        let offers = await offer.findAll()
        offers = offers.map(offer => offer.id)
        let technologies = await technology.findAll()
        technologies = technologies.map(technology => technology.id)
        for (const offerId of offers) {
            const numberOfTechnologies = Math.floor(Math.random() * 5) + 1;

            const shuffled = [...technologies].sort(
                () => Math.random() - 0.5
            );

            const selectedTechnologies = shuffled.slice(
                0,
                numberOfTechnologies
            );

            for (const technologyId of selectedTechnologies) {
                await db.query(
                    `INSERT INTO offer_technology (offer_id, technology_id)
                     VALUES (?, ?)`,
                    [offerId, technologyId]
                );
            }
        }
    } catch (error) {
        console.error(error)
    }
}

await seedCompanyTable(db, companies)
await seedTechnologyTable(db, technologies);
await seedOfferTable(db, offers);
await getOffersTechnologiesIds()

await db.end();

