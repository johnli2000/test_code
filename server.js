const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY;

if (!ADMIN_KEY) {
  console.warn('[admin] Missing ADMIN_KEY environment variable. Admin access will be blocked.');
}

const dataDir = path.join(__dirname, 'data');
const modelsFile = path.join(dataDir, 'models.json');

const ensureDataStore = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  if (!fs.existsSync(modelsFile)) {
    fs.writeFileSync(modelsFile, JSON.stringify({ models: [] }, null, 2));
  }
};

ensureDataStore();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

const readModels = () => {
  const raw = fs.readFileSync(modelsFile, 'utf8');
  return JSON.parse(raw);
};

const writeModels = (data) => {
  fs.writeFileSync(modelsFile, JSON.stringify(data, null, 2));
};

const requireAdminKey = (req, res, next) => {
  const provided = req.body.admin_key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || provided !== ADMIN_KEY) {
    return res.status(403).send('Forbidden: invalid admin key.');
  }
  return next();
};

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/admin/models', (req, res) => {
  res.json(readModels());
});

app.post('/admin/models', requireAdminKey, (req, res) => {
  const { name, price, availability, summary, tags } = req.body;
  if (!name || !price || !availability || !summary) {
    return res.status(400).send('Missing required fields.');
  }

  const payload = readModels();
  const model = {
    id: Date.now().toString(36),
    name: String(name).trim(),
    price: String(price).trim(),
    availability: String(availability).trim(),
    summary: String(summary).trim(),
    tags: tags ? String(tags).split(',').map((tag) => tag.trim()).filter(Boolean) : [],
    createdAt: new Date().toISOString(),
  };

  payload.models.unshift(model);
  writeModels(payload);

  res.redirect('/admin?success=1');
});

app.listen(PORT, () => {
  console.log(`[admin] running on http://localhost:${PORT}`);
});
