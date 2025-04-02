import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {

    const transport = new StdioClientTransport({
        command: "node",
        args: ["../build/index.js"]
    });

    const client = new Client(
    {
        name: "example-client",
        version: "1.0.0"
    },
    {
        capabilities: {
        prompts: {},
        resources: {},
        tools: {}
        }
    }
    );

    await client.connect(transport);

    // List prompts
    // const prompts = await client.listPrompts();

    // Get a prompt
    // const prompt = await client.getPrompt("example-prompt", {
    //   arg1: "value"
    // });

    console.log("TOOLS");
    const tools = await client.listTools();
    tools.tools.forEach((tool) => {
        console.log("Tool: ", tool.name);
    });

    // List resources
    console.log("RESOURCES");
    const resources = await client.listResources();
    resources.resources.forEach((resource) => {
        console.log("\tResource: ", resource.uri);
    });

    console.log("RESOURCE TEMPLATES");
    const resourceTemplates = client.listResourceTemplates();
    (await resourceTemplates).resourceTemplates.forEach((resourceTemplate) => {
        console.log("\tResource Template: ", resourceTemplate.uriTemplate);
    });
   
    const url = (await resourceTemplates).resourceTemplates[0].uriTemplate.replace("{name}", "hello")

    const resultTemplate = await client.readResource({ uri: url });
    console.log("\tResult: ", resultTemplate);


    // // Read a resource
    // const resource = await client.readResource("file:///example.txt");

    // Call a tool
    console.log("CALL TOOL");
    const result = await client.callTool({
        name: "add",
        arguments: {
            a: 2,
            b: 2
        }
    });

    console.log("\tResult: ", result);

}

main().catch((error) => {
    console.error("Fatal error: ", error);
    process.exit(1);
});