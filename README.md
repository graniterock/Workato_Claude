# workato-mcp-server

Minimal Model Context Protocol (MCP) server scaffold for Workato integration demos.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Test health endpoint:

```bash
curl http://localhost:3000/health
```

Endpoints

- `GET /health` — basic liveness check
- `GET /mcp/info` — server info
- `POST /mcp/execute` — stub to receive and echo MCP payloads
