const express = require('express');
const router = express.Router();
const {
  createInvoice,
  getAllInvoices,
  getInvoicesByUser,
  updateInvoiceStatus,
  deleteInvoice
} = require('../controllers/invoiceController');

// Routes
router.post('/', createInvoice);                    // Upload invoice
router.get('/', getAllInvoices);                    // Get all invoices
router.get('/user/:userId', getInvoicesByUser);     // Get invoices by user
router.put('/:invoiceId/status', updateInvoiceStatus); // Update status
router.delete('/:invoiceId', deleteInvoice);        // Delete invoice

module.exports = router;
