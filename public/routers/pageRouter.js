const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static(path.join(global.frontendDir, '/dashboard/_nuxt/')));
router.use('/dashboard', express.static(path.join(global.frontendDir, '/dashboard')));
router.use('/backoffice', express.static(path.join(global.frontendDir, '/backoffice')));


module.exports = router;
