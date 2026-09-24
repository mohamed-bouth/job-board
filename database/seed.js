import db from "../src/config/db.js"
import { queryKeysValuesHelper } from "../src/utils/queryKeysValuesHelper.js";
import offers from "./data/offers.js";
import companies from "./data/companies.js";
import technologies from "./data/technologies.js";

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

    await db.query(query);

    console.log("Technologies inserted successfully!");
}

async function seedOfferTable(db, offers) {
    const offersText = queryKeysValuesHelper(offers);

    const query = `
        INSERT INTO offer ${offersText.keys}
        VALUES ${offersText.values};
    `;

    await db.query(query);

    console.log("Offers inserted successfully!");
}

async function getOffersTechnologiesIds(){
    
}

await seedCompanyTable(db, companies)
await seedTechnologyTable(db, technologies);
await seedOfferTable(db, offers);

await db.end();

