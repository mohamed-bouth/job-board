import db from '../config/db.js'
import { queryKeysValuesHelper } from '../utils/queryKeysValuesHelper.js'

export class Base {
    constructor(table, column) {
        this.table = table;
        this.column = column
    }

    async findAll() {
        try {
            const [rows] = await db.query(`SELECT * FROM ${this.table}`)
            return rows
        } catch (error) {
            return error
        }
    }
    async findById(id) {
        if (!Number.isInteger(id) || 0 < id) {
            return []
        }
        try {
            const [row] = await db.query(`select * FROM ${this.table} WHERE id = ${id}`)
            return row
        } catch (error) {
            return error
        }
    }
    async create(requestBody) {
        const bodyKeys = Object.keys(requestBody)
        const same = this.column.length === bodyKeys.length && this.column.every(key => bodyKeys.includes(key));
        if (!same) {
            return [{ error: "check your body" }]
        }
        try {
            const requestToText = queryKeysValuesHelper([requestBody])
            const query = `
                            INSERT INTO ${this.table} ${requestToText.keys}
                            VALUES ${requestToText.values};
                        `;
            await db.query(query)
            return {
                success: true
            }
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }
    async update(id, requestBody) {
        if (!Number.isInteger(id) || 0 >= id) {
            return []
        }
        const bodyKeys = Object.keys(requestBody)
        const same = bodyKeys.every(key => this.column.includes(key));
        if (!same) {
            return [{ error: "check your body" }]
        }
        const keysValues = Object.entries(requestBody)
        let query = `UPDATE ${this.table} SET `
        keysValues.forEach(column => {
            query += `${column[0]} = '${column[1]}' ,`
        })
        query = query.slice(0,-1)
        query += `WHERE id = ${id}`

        try {
            await db.query(query)
            return {
                success : true
            }
        }catch (error){
            return {
                success : false,
                error
            }
        }
    }
    async delete(id) {
        if (!Number.isInteger(id) || 0 >= id) {
            return []
        }
        const query = `DELETE FROM ${this.table}
                    WHERE id = ${id};`
        try {
            await db.query(query)
            return {
                seccess : true
            }
        }catch (error){
            return{
                success :false,
                error
            }
        }
    }
}