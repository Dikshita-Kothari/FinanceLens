const express = require('express');
const router = express.Router();
const {
  createField,
  getFieldsByInvoice,
  updateField,
  deleteField
} = require('../controllers/invoiceFieldController');

// Routes
router.post('/', createField);                  // Add a parsed field
router.get('/:invoiceId', getFieldsByInvoice);  // Get fields for an invoice
router.put('/:fieldId', updateField);           // Update a specific field
router.delete('/:fieldId', deleteField);        // Delete a specific field

module.exports = router;
