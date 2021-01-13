const express = require('express')
const router = express.Router()
const axios = require('axios')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

/////////////////////**********************///////////////////////
// sequelize
//     .query("SELECT * FROM client WHERE first='ahmad' ")
//     .then(function ([result]) {
//         console.log(result)
//     }) 
/////////////////////**********************///////////////////////

const findByID = async function (name, value) {
    let results = await sequelize.query(`SELECT id FROM ${name} WHERE ${name} = "${value}"`)
    return results[0][0].id
}

const isNew = async function (table, name, value) {
    let query = await sequelize.query(`SELECT id FROM ${table} WHERE ${name} = '${value}'`)
    let dataId = query[0][0] ? query[0][0].id : 'newValue'
    console.log(' isNew');
    return dataId
}

const addValue = async function (table, name) {
    let query = `INSERT INTO ${table} VALUES (null, '${name}')`
    await sequelize.query(query)
    let id = await findByID(table, name)
    console.log(' addValue');
    return id
}


router.get('/clients/:id?', async function (req, res) {
    const { id } = req.params
    if (id) {
        let result = await sequelize.query(`SELECT * FROM client WHERE id=${id}`)
        res.send(result[0])
    }
    else {
        let result = await sequelize.query(`
        SELECT owner, country, email_type, cl.id, first, last, email, sold, date
        FROM client AS cl, owner AS o, country AS co, email_type AS e
        WHERE cl.owner_id = o.id AND cl.country_id = co.id  AND cl.email_type_id = e.id
        `)
        res.send(result[0])
    }
})

router.post('/client', async function (req, res) {
    let client = req.body
    let email = await isNew('client', 'email', client.email) === 'newValue' ? client.email : 'user exist'
    let date = new Date(client.firstContact).toLocaleDateString()
    let country = await findByID('country', client.country)
    let owner = await isNew('owner', 'owner', client.owner) === 'newValue' ? await addValue('owner', client.owner) : await findByID('owner', client.owner)

    let result = email === 'user exist'
        ? null 
        : await sequelize.query(`INSERT INTO client VALUES(
            null, '${client.lastName}', '${client.firstName}', '${email}', 0, '${date}', null, ${owner}, ${country}
            )`)

    if (result === null) { res.send('user exist') }
    else { res.send(result[0]) }
})

router.put('/client', async function (req, res) {
    const { table, key, val, conditionKey, conditionVal } = req.body
    let newVal = typeof (val) === 'string' ? `'${val}'` : val
    let condVal = typeof (conditionVal) === 'string' ? `'${conditionVal}'` : conditionVal
    let query = (`UPDATE ${table}  SET ${key} = ${newVal}  WHERE ${conditionKey} = ${condVal} `)

    let result = await sequelize.query(query)
    res.send(result[0])
})

module.exports = router
