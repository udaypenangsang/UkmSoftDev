const db = require('../config/database')

const getAll = () => {
    return db.execute('SELECT * FROM mobil');
}

const getId = (id) => {
    return db.execute(`SELECT * FROM mobil where id = ${id}`);
}

const insert = (body) => {
    return db.execute(`INSERT INTO mobil (model,price) VALUES ('${body.model}',${body.price})`);
}

const update = (body,id) => {
    const column = Object.keys(body)
        .map(col => `${col} = ?`)
        .join(', ');
    const values = Object.values(body);
    const query = `UPDATE mobil set ${column} WHERE id=${id}`
    return db.execute(query, values);
}

const destroy = (id) => {
    return db.execute(`DELETE FROM mobil where id = ${id}`);
}

module.exports = {getAll, getId, insert, update, destroy}