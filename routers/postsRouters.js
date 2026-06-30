// Define Express
const express = require('express');

// Define Router
const router = express.Router();

// Import Controller Users
const postsController = require('../controller/postsController')


// GET -> INDEX
router.get('/', postsController.index)

// GET by ID -> SHOW
router.get('/:id', postsController.show)

// POST by ID -> STORE
router.post('/', postsController.store)

// PUT by ID -> UPDATE
router.put('/:id', postsController.update)

// PATCH by ID -> MODIFY
router.patch('/:id', postsController.modify)

// DELETE by ID -> DESTROY
router.delete('/:id', postsController.destroy)

module.exports = router;