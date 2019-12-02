const express = require('express');
const router = express.Router();
const ctrlIndex = require('../controllers/index');

// clients
router
  .route('/all/')
  .get(ctrlIndex.showAllRecords);

router
  .route('/departure/:airport')
  .get(ctrlIndex.showDepartureAirport);

router
  .route('/arrival/:airport')
  .get(ctrlIndex.showArrivalAirport);  

module.exports = router;