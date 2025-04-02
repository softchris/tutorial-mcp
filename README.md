# 🚀 MCP Sample for JavaScript 🌟

Welcome to the smallest possible example of a JavaScript project using the MCP! This repo is your starting point for building amazing projects with MCP. 🛠️✨

> [!NOTE]
> The client should ideally integrate with an LLM to negotiate with the server on what tools to call and what resources to access. 🤖💬. That's not the case here and the client explicitly call the server and asks about its tools and resources and more.

> [!IMPORTANT]
> Install and build the server before running the client. 🏗️🚀

## 🌐 Server

The server uses `StdioServerTransport` and includes the following:

- 🧮 **`add`**: A tool that takes two numbers, `a` and `b`, and returns their sum.
- 👋 **`greeting/{name}`**: A resource template that takes a name and returns a friendly greeting.

### 📦 Install Server

Build the server with this command:

```bash
npm install
```

### ▶️ Run Server

Start the server with this command:

```bash
npm build
```

### 🕵️‍♂️ Test the Server with the Inspector Tool

Use the inspector tool to test the server! 🛠️ Open it with:

```bash
npm run inspect
```

This will connect to the server and launch a user interface in your browser. 🌐 Use the inspector tool to call tools, access resources, view logs, and more! 🎉

## 💻 Client

The client is located in the `client` folder. 📂

### 📦 Install Client

Change directory to the client folder with this command:

```bash
cd client
```

Install the client with this command:

```bash
npm install
```

### ▶️ Run Client

Start the client with this command:

```bash
npm start
```

Enjoy building your MCP-powered JavaScript projects! 🚀✨
