# 🧾 financelens by code vassles

---

## 🚀 Features

- 📤 Upload invoices (PDF, JPG, PNG, DOCX)
- 🤖 OCR + AI-powered field extraction
- 📝 Editable fields with confidence scores
- 📊 Line item parsing (description, quantity, unit price, total)
- 👥 Role-based login (User / Manager / Admin)
- 📁 Export to CSV, JSON, Excel, XML
- 🔌 REST API access
- 🛡️ Admin dashboard with user and activity management

---

## 🧠 How It Works

1. **Login** with Email/Google/SSO
2. **Upload invoices** via drag & drop or file picker
3. **AI auto-extracts** key fields like:
   - Invoice Number, Date, Due Date
   - Supplier & Buyer info
   - Total Amount, Currency
   - Line Items & Tax Details
4. **Manually review and correct** low-confidence fields
5. **Save or export** the data
6. **Search and view history** of past uploads

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, react-pdf-viewer
- **Backend**: FastAPI (Python) / Node.js (Express)
- **OCR**: Tesseract / Google Vision API / AWS Textract
- **NLP**: SpaCy, LayoutLM, HuggingFace Transformers
- **Database**: PostgreSQL, MongoDB (optional)
- **Auth**: Clerk.dev / Firebase Auth
- **Storage**: AWS S3 / Google Cloud / Firebase Storage
