// Define Express
const express = require('express');

// Define Router
const router = express.Router();

// Import Controller Users
const usersController = require('../controller/usersController')


// GET -> INDEX
router.get('/', usersController.index)

// GET by ID -> SHOW
router.get('/:id', usersController.show)

// POST by ID -> STORE
router.post('/', usersController.store)

// PUT by ID -> UPDATE
router.put('/:id', usersController.update)

// PATCH by ID -> MODIFY
router.patch('/:id', usersController.modify)

// DELETE by ID -> DESTROY
router.delete('/:id', usersController.destroy)

module.exports = router;