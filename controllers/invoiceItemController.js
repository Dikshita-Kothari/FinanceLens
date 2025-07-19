const InvoiceItem = require('../models/InvoiceItem');

// Add an item
exports.createItem = async (req, res) => {
  try {
    const { invoiceId, description, quantity, unitPrice } = req.body;

    const item = new InvoiceItem({ invoiceId, description, quantity, unitPrice });
    await item.save();

    res.status(201).json({ message: 'Item added successfully', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all items for a specific invoice
exports.getItemsByInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const items = await InvoiceItem.find({ invoiceId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { description, quantity, unitPrice } = req.body;

    const item = await InvoiceItem.findById(itemId);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.description = description ?? item.description;
    item.quantity = quantity ?? item.quantity;
    item.unitPrice = unitPrice ?? item.unitPrice;
    item.lineTotal = item.quantity * item.unitPrice;

    await item.save();
    res.json({ message: 'Item updated successfully', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const deleted = await InvoiceItem.findByIdAndDelete(itemId);
    if (!deleted) return res.status(404).json({ error: 'Item not found' });

    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
