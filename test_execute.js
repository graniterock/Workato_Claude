const fetch = require('node-fetch');

(async () => {
  const payload = { recipe_id: 'r_123', action: 'run', input: { foo: 'bar' } };
  try {
    const res = await fetch('http://localhost:3000/mcp/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (res.status === 200 && json.recipe_id === payload.recipe_id && json.result && json.result.success) {
      console.log('TEST PASSED');
      console.log(JSON.stringify(json));
      process.exit(0);
    }
    console.error('TEST FAILED', JSON.stringify(json));
    process.exit(2);
  } catch (err) {
    console.error('TEST ERROR', err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
