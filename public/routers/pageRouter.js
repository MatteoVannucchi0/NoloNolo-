const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/backoffice', async (req, res) => {
    return res.status(200).send("<h1>Pagina BackOffice</h1>")
})

console.log(path.join(global.frontendDir, '/dashboard'))

router.use('/', express.static(path.join(global.frontendDir, '/dashboard/_nuxt/')));
router.use('/dashboard', express.static(path.join(global.frontendDir, '/dashboard')));

module.exports = router;
