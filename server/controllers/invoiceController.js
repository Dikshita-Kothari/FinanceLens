const Invoice = require('../models/Invoice');

// Create (upload) an invoice
exports.createInvoice = async (req, res) => {
  try {
    const { userId, supplierName, supplierContact, buyerName, buyerContact, filePath, fileType } = req.body;

    const invoice = new Invoice({
      userId,
      supplierName,
      supplierContact,
      buyerName,
      buyerContact,
      filePath,
      fileType
    });

    await invoice.save();
    res.status(201).json({ message: 'Invoice uploaded successfully', invoice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all invoices
exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('userId', 'name email');
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get invoices by user
exports.getInvoicesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const invoices = await Invoice.find({ userId }).populate('userId', 'name email');
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update invoice status (parsed/error)
exports.updateInvoiceStatus = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const { uploadStatus, confidenceScore } = req.body;

    const invoice = await Invoice.findByIdAndUpdate(
      invoiceId,
      {
        uploadStatus,
        confidenceScore: confidenceScore || 0,
        parsedAt: uploadStatus === 'parsed' ? new Date() : null
      },
      { new: true }
    );

    if (!invoice) return res.status(404).json({ error: 'Invoice not found' });
    res.json({ message: 'Invoice status updated', invoice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete invoice
exports.deleteInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const deleted = await Invoice.findByIdAndDelete(invoiceId);
    if (!deleted) return res.status(404).json({ error: 'Invoice not found' });
    res.json({ message: 'Invoice deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
