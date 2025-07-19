const mongoose = require('mongoose');

const invoiceItemSchema = new mongoose.Schema({
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true }, // Parent invoice
  description: { type: String, required: true },  // Item description
  quantity: { type: Number, required: true, min: 0 },
  unitPrice: { type: Number, required: true, min: 0 },
  lineTotal: { type: Number }     // quantity * unitPrice
}, { timestamps: true });

// Auto-calculate lineTotal before save
invoiceItemSchema.pre('save', function (next) {
  this.lineTotal = this.quantity * this.unitPrice;
  next();
});

module.exports = mongoose.model('InvoiceItem', invoiceItemSchema);
