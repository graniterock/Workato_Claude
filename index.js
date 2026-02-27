const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/mcp/info', (req, res) => {
  res.json({ name: 'workato-mcp-server', version: '0.1.0' });
});

app.post('/mcp/execute', (req, res) => {
  const payload = req.body || {};
  if (!payload.recipe_id || !payload.action) {
    return res.status(400).json({ error: 'missing recipe_id or action' });
  }

  // Simulate processing a Workato recipe: echo input and mark success
  const result = {
    success: true,
    processedAt: new Date().toISOString(),
    processedInput: payload.input || {}
  };

  res.json({ recipe_id: payload.recipe_id, status: 'ok', result });
});

app.listen(port, () => {
  console.log(`MCP server listening on http://localhost:${port}`);
});
