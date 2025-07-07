Pa11y MCP
=========

MCP server which performs accessibility checks using Pa11y.

# Add to VS code

Create following entry in the `.vscode/mcp.json`

```json
{
    "inputs": [],
    "servers": {
        "Pa11y": {
            "type": "stdio",
            "command": "npx",
            "args": [
                "-y",
                "pa11y-mcp"
            ]
        }
    }
}
```