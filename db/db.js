let mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'BeGre@t2019',
    database: 'portfolio_contact'
});

module.exports = {

    contactInfo: function contactInfo() {

        let query = `SELECT * FROM contact_info`

        return new Promise((resolve, reject) => {
            pool.query(query, (err, results, fields) => {
                if (err) reject(err);

                resolve(results);

                console.log(results)
            });
        });
    },


    insertInfo: function insertInfo() {

        let query = `INSERT INTO contact_info(name, email, message) VALUES(Blake, blake@gmail.com, message)`;

        return new Promise((resolve, reject) => {
            pool.query(query, (err, results, fields) => {
                if (err) reject(err);

                resolve(results);

                console.log(results)
            });
        });
    },

    contactItem: function contactItem(id) {

        let query = `SELECT * FROM contact_info WHERE id = ${id}`;

        return new Promise((resolve, reject) => {
            pool.query(query, (err, results, fields) => {
                if (err) reject(err);

                resolve(results);
            });
        });
    }
};