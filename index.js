import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import pa11y from 'pa11y';

// Create an MCP server
const server = new McpServer({
  name: "pa11y-server",
  version: "0.0.1"
});

// Add an addition tool
server.registerTool("accessibility-check",
    {
        title: "Check accessibility",
        description: "Perform accessibility checks on a webpage",
        inputSchema: { url: z.string() }
    },
    async ({ url }) => 
    {
        try {
            const results = await pa11y(url);
            return {
                content: [{ type: "text", text: JSON.stringify(results, null, 2) }]
            }
            // Use the results
        }
        catch (error) {
            // Handle error
            return {
                content: [{ type: "text", text: `Accessibility check for the ${url} failed with ${error} ${JSON.stringify(pa11y)} ${JSON.stringify(pa11y1)}` }]
            }
        }       
    });

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
