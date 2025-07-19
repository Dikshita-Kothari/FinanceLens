const express = require('express');
const router = express.Router();
const {
  createItem,
  getItemsByInvoice,
  updateItem,
  deleteItem
} = require('../controllers/invoiceItemController');

// Routes
router.post('/', createItem);                   // Add a line item
router.get('/:invoiceId', getItemsByInvoice);   // Get items for an invoice
router.put('/:itemId', updateItem);             // Update a line item
router.delete('/:itemId', deleteItem);          // Delete a line item

module.exports = router;
