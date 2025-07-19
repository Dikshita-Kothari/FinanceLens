const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Uploader
  supplierName: { type: String, required: true },
  supplierContact: { type: String },
  buyerName: { type: String, required: true },
  buyerContact: { type: String },
  filePath: { type: String, required: true },  // File location (local/cloud)
  fileType: { type: String, required: true },  // e.g., PDF, JPG
  uploadStatus: {
    type: String,
    enum: ['uploaded', 'parsed', 'error'],
    default: 'uploaded'
  },
  uploadedAt: { type: Date, default: Date.now },
  parsedAt: { type: Date },
  confidenceScore: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
