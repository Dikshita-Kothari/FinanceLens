const mongoose = require('mongoose');

const invoiceFieldSchema = new mongoose.Schema({
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true }, // Link to invoice
  fieldName: { type: String, required: true },     // e.g., "Invoice No"
  fieldValue: { type: String, required: true },    // Parsed value
  confidenceScore: { type: Number, default: 0 },   // OCR confidence (0–1)
  isCorrected: { type: Boolean, default: false }   // True if user manually edited
}, { timestamps: true });

module.exports = mongoose.model('InvoiceField', invoiceFieldSchema);
