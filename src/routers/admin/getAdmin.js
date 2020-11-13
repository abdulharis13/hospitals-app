const express = require('express');
const { Admin } = require('../../models');


const router = express.Router();

router.get('/get-admin', async (req, res) => {
try {
    const result = await Admin.find({}); 
    res.send(result);
     
} catch(e) {
    res.send({ message: e.message });
};
});
module.exports = router;
