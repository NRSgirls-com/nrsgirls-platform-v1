# MCP (Model Context Protocol) Setup Guide

This guide covers setting up MCP servers for Claude Code integration with the NRSgirls platform.

## Prerequisites

- Docker installed and running ([Install Docker](https://docs.docker.com/get-docker/))
- Claude Code CLI installed
- Discord Bot Token (for Discord MCP)

## Discord MCP Server (Docker Installation)

The Discord MCP server enables Claude Code to interact with Discord servers for community management, notifications, and automation.

### Quick Setup

1. **Pull the Docker image:**
   ```bash
   docker pull saseq/discord-mcp:latest
   ```

2. **Set up environment variables:**
   Add to your `.env` file:
   ```bash
   DISCORD_BOT_TOKEN=your_discord_bot_token_here
   DISCORD_GUILD_ID=your_default_server_id  # Optional
   ```

3. **Configure Claude Code:**
   Copy the example settings:
   ```bash
   cp .claude/settings.example.json .claude/settings.json
   ```

   Then edit `.claude/settings.json` and replace the placeholder values with your actual credentials.

### Configuration

The MCP server configuration is located in `.claude/settings.json`:

```json
{
  "mcpServers": {
    "discord-mcp": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>",
        "-e",
        "DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>",
        "saseq/discord-mcp:latest"
      ]
    }
  }
}
```

### Available Tools

Once configured, the following Discord tools are available:

#### Server Information
- `get_server_info` - Get detailed Discord server information

#### User Management
- `get_user_id_by_name` - Get a Discord user's ID by username for pings (`<@id>`)
- `send_private_message` - Send a private message to a specific user
- `edit_private_message` - Edit a private message
- `delete_private_message` - Delete a private message
- `read_private_messages` - Read recent message history from a user

#### Message Management
- `send_message` - Send a message to a specific channel
- `edit_message` - Edit a message in a channel
- `delete_message` - Delete a message from a channel
- `read_messages` - Read recent message history from a channel
- `add_reaction` - Add a reaction (emoji) to a message
- `remove_reaction` - Remove a reaction from a message

#### Channel Management
- `create_text_channel` - Create a text channel
- `delete_channel` - Delete a channel
- `find_channel` - Find a channel by name
- `list_channels` - List all channels

#### Category Management
- `create_category` - Create a new category for channels
- `delete_category` - Delete a category
- `find_category` - Find a category by name
- `list_channels_in_category` - List channels in a category

#### Webhook Management
- `create_webhook` - Create a new webhook
- `delete_webhook` - Delete a webhook
- `list_webhooks` - List webhooks on a channel
- `send_webhook_message` - Send a message via webhook

> **Note:** If `DISCORD_GUILD_ID` is set, the `guildId` parameter becomes optional for all tools.

## Creating a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Navigate to "Bot" in the sidebar
4. Click "Add Bot"
5. Under "TOKEN", click "Copy" to get your bot token
6. Enable the necessary Privileged Gateway Intents:
   - Presence Intent
   - Server Members Intent
   - Message Content Intent
7. Navigate to "OAuth2" > "URL Generator"
8. Select scopes: `bot`, `applications.commands`
9. Select bot permissions as needed
10. Copy the generated URL and use it to invite the bot to your server

## Security Best Practices

- Never commit `.claude/settings.json` with real tokens
- Use environment variables for sensitive credentials
- Keep `.claude/settings.json` in `.gitignore` if it contains secrets
- Regularly rotate your Discord bot token
- Grant minimum necessary permissions to your bot

## Troubleshooting

### Docker not found
Ensure Docker is installed and the daemon is running:
```bash
docker --version
docker info
```

### Permission denied
You may need to add your user to the docker group:
```bash
sudo usermod -aG docker $USER
```
Then log out and back in.

### MCP server not connecting
1. Verify your Discord token is correct
2. Check that the bot is invited to the target server
3. Ensure Docker can pull the image:
   ```bash
   docker pull saseq/discord-mcp:latest
   ```

## Additional MCP Servers

Additional MCP servers can be added to the `mcpServers` object in `.claude/settings.json`. Each server configuration requires:
- `command` - The command to run (e.g., `docker`, `npx`, `node`)
- `args` - Array of arguments to pass to the command

Example with multiple servers:
```json
{
  "mcpServers": {
    "discord-mcp": { ... },
    "another-mcp": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"]
    }
  }
}
```

## Resources

- [Discord MCP Server GitHub](https://github.com/saseq/discord-mcp)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Docker Documentation](https://docs.docker.com/)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
