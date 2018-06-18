const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

function list(user_account = '') {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-borrow.json')) {
            fs.writeFileSync('data-borrow.json', '');
        }

        fs.readFile('data-borrow.json', 'utf8', (err, data) => {
            if (err) reject(err);
            
            let arrears = data ? JSON.parse(data) : [];
            resolve(arrears);
        });
    });
}

/*DB

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account = '') {
    const where = [];
    if (user_account)
        where.push(`borrower = '%$1:value%'`);
    const sql = `
        SELECT *
        FROM record
        ${where.length ? 'WHERE ' + where.join(' OR ') : ''}
    `;
    console.log("here is");
    console.log(sql);
    return db.any(sql, [user_account]);
}
*/

module.exports = {
    list
};