const InvoiceField = require('../models/InvoiceField');

// Add a new parsed field
exports.createField = async (req, res) => {
  try {
    const { invoiceId, fieldName, fieldValue, confidenceScore, isCorrected } = req.body;

    const field = new InvoiceField({
      invoiceId,
      fieldName,
      fieldValue,
      confidenceScore,
      isCorrected
    });

    await field.save();
    res.status(201).json({ message: 'Field added successfully', field });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all fields for a specific invoice
exports.getFieldsByInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const fields = await InvoiceField.find({ invoiceId });
    res.json(fields);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific field (value, confidence, corrected)
exports.updateField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    const { fieldValue, confidenceScore, isCorrected } = req.body;

    const field = await InvoiceField.findByIdAndUpdate(
      fieldId,
      { fieldValue, confidenceScore, isCorrected },
      { new: true }
    );

    if (!field) return res.status(404).json({ error: 'Field not found' });
    res.json({ message: 'Field updated successfully', field });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a field
exports.deleteField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    const deleted = await InvoiceField.findByIdAndDelete(fieldId);
    if (!deleted) return res.status(404).json({ error: 'Field not found' });
    res.json({ message: 'Field deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
