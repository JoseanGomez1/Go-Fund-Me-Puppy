///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express');
const router = express.Router();

const puppiesCtrl = require('../controllers/puppies'); // Update the controller import path

///////////////////////////////
// ROUTES
////////////////////////////////

// PUPPIES CREATE ROUTE
router.post('/', puppiesCtrl.createPuppy);

// PUPPIES INDEX ROUTE
router.get('/', puppiesCtrl.getAllPuppies);

// PUPPIES SHOW ROUTE
router.get('/:id', puppiesCtrl.getPuppyById);

// PUPPIES DELETE ROUTE
router.delete('/:id', puppiesCtrl.deletePuppyById);

// PUPPIES UPDATE ROUTE
router.put('/:id', puppiesCtrl.updatePuppyById);

module.exports = router;
