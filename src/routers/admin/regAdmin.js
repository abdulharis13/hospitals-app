const express = require('express');

const { Admin } = require('../../models');
const { schemaAdmin } = require('../../schema');

const router = express.Router();

router.post('/add-admin', async (req, res) => {
    try {
        const { error, value } = schemaAdmin.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            username,
            email,
            password
        } = value;

        const admin = new Admin({
            username,
            email,
            password
        });
        await admin.save();
        res.send(admin);

    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; 
