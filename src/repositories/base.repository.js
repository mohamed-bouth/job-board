import db from '../config/db.js'
import { queryKeysValuesHelper } from '../utils/queryKeysValuesHelper.js'

export class Base {
    constructor(table, column, relations) {
        this.table = table;
        this.column = column;
        this.relations = relations;
    }

    async findAll() {
        try {
            const [rows] = await db.query(`SELECT * FROM ${this.table}`)
            return rows
        } catch (error) {
            throw error
        }
    }
    async findById(id) {
        if (!Number.isInteger(id) || 0 >= id) {
            throw new Error('Invalid Id')
        }
        try {
            const [[row]] = await db.query(`select * FROM ${this.table} WHERE id = ?`, id)
            return row
        } catch (error) {
            throw error
        }
    }
    async create(requestBody) {
        const bodyKeys = Object.keys(requestBody)
        const bodyValues = Object.values(requestBody)
        let placeholders = '('
        placeholders += bodyKeys.map(() => '?').join(', ');
        placeholders += ')'

        const same = this.column.length === bodyKeys.length && this.column.every(key => bodyKeys.includes(key));
        if (!same) {
            throw new Error('Invalid body')
        }
        try {
            const requestToText = queryKeysValuesHelper([requestBody])
            const query = `
                            INSERT INTO ${this.table} ${requestToText.keys}
                            VALUES ${placeholders};`;
            await db.query(query, bodyValues)
            return {
                success: true
            }
        } catch (error) {
            throw error
        }
    }
    async update(id, requestBody) {
        if (!Number.isInteger(id) || 0 >= id) {
            throw new Error('invalid Id')
        }
        const bodyKeys = Object.keys(requestBody)
        const bodyValues = Object.values(requestBody)
        const same = bodyKeys.every(key => this.column.includes(key));
        if (!same) {
            throw new Error('invalid body')
        }
        const keysValues = Object.entries(requestBody)
        let query = `UPDATE ${this.table} SET `
        keysValues.forEach(column => {
            query += `${column[0]} = ? ,`
        })
        query = query.slice(0, -1)
        query += `WHERE id = ?`

        bodyValues.push(id)
        try {
            await db.query(query, bodyValues);
            return {
                success: true
            }
        } catch (error) {
            throw error
        }
    }
    async delete(id) {
        if (!Number.isInteger(id) || 0 >= id) {
            throw new Error('invalid id')
        }
        const query = `DELETE FROM ${this.table}
                    WHERE id = ?;`
        try {
            await db.query(query, id)
            return {
                seccess: true
            }
        } catch (error) {
            throw error
        }
    }

    async with(selectedTable, id = null) {
        if (!this.relations.includes(selectedTable)) {
            throw new Error(`there no relation between ${this.table} and ${selectedTable}`)
        }

        let query =
            `SELECT
    ${this.table}.*,
    ${selectedTable}.id AS ${selectedTable}_id,
    ${selectedTable}.name AS ${selectedTable}_name
    FROM ${this.table}
    JOIN ${this.table}_${selectedTable}
    ON ${this.table}.id = ${this.table}_${selectedTable}.${this.table}_id
    JOIN ${selectedTable}
    ON ${this.table}_${selectedTable}.${selectedTable}_id = ${selectedTable}.id `

    if(id !== null){
        query += `WHERE ${this.table}.id = ${id} `
    }

    query += `ORDER BY ${this.table}.id ASC;`

        const [offers] = await db.query(query)
        const allOffers = offers.reduce((acc, offer) => {

            const existingOffer = acc.find(item => item.id === offer.id);

            if (existingOffer) {
                existingOffer.technologies.push({
                    id: offer.technology_id,
                    name: offer.technology_name
                });
            } else {
                acc.push({
                    id: offer.id,
                    title: offer.title,
                    description: offer.description,
                    city: offer.city,
                    contract_type: offer.contract_type,
                    publication_date: offer.publication_date,
                    company_id: offer.company_id,
                    technologies: [
                        {
                            id: offer.technology_id,
                            name: offer.technology_name
                        }
                    ]
                });
            }

            return acc;

        }, []);


        return allOffers

    }
}