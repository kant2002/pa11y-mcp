Pa11y MCP
=========

MCP server which performs accessibility checks using Pa11y.

# How to use

Enable `accessibility-check` tool. Pass URL which you want check for accessibility issuse to the tool.

```
https://mcpservers.org/servers/agentset-ai/mcp-serve
```

Other example.
```
Check accessibility of the URL https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

Present list of all results in Markdown table
```

Other example.
```
Check accessibility of the URL https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

Present list of all results in Markdown table. All output should be in Kazakh
```


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