
import {database_handle} from '$lib/server/database';

let db;

export async function load() {
    if (!db) {
        db = database_handle();
    }
    const sql = `
    SELECT 
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;
    const stmt = db.prepare(sql);
    const rows = stmt.all();

    console.log({rows});

    return { containers: rows };
}
